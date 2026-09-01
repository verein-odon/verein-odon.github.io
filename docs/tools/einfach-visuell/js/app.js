/* =========================================================================
   app.js — state, pointer interactions and keyboard fallback.
   Depends on: i18n.js (LANGUAGES, LANG_FALLBACK, LANG_STORAGE_KEY, STRINGS)
               icons.js (ICONS, ICON_VIEWBOX, ICON_STROKE_WIDTH, ICON_HALO_WIDTH)

   One interaction model for mouse, pen and touch: everything runs through
   the Pointer Events API. Keine HTML5-Drag-and-Drop-API, keine Bibliothek —
   native DnD verhält sich auf Touch-Geräten zu unterschiedlich.
   ========================================================================= */

(function () {
  "use strict";

  /* ------------------------------- Setup ------------------------------- */

  var paletteEl = document.getElementById("palette");
  var canvasEl  = document.getElementById("canvas");
  var statusEl  = document.getElementById("status");
  var shotTipEl = document.getElementById("shot-tip-text");
  var shotOsEl  = document.getElementById("shot-os");
  var leaderSvg = document.getElementById("leader-lines");
  var langBtns  = document.querySelectorAll("[data-lang]");
  var canvasContentEl = document.getElementById("canvas-content");
  var zoomInEl    = document.getElementById("zoom-in");
  var zoomOutEl   = document.getElementById("zoom-out");
  var zoomResetEl = document.getElementById("zoom-reset");
  var zoomReadoutEl = document.getElementById("zoom-readout");
  var helpBtn    = document.getElementById("help-btn");
  var helpDialog = document.getElementById("help-dialog");

  var PLACED_SIZE = parseFloat(cssVar("--placed-size")) || 64;
  var DRAG_THRESHOLD = 6;   // px, darunter gilt eine Geste als Tippen, nicht als Ziehen
  var REGION_MIN = 16;      // kleinere Aufzieh-Rechtecke zählen als Klick, nicht als Bereich
  var NUDGE = 2;            // px pro Pfeiltastendruck (mit Shift: NUDGE_FAST)
  var NUDGE_FAST = 16;

  var IMAGE_MAX_BYTES = 20 * 1024 * 1024;  // größere Dateien gar nicht erst lesen
  var IMAGE_MAX_PX = 3200;                 // längste Kante nach dem Verkleinern
  var IMAGE_FIT = 0.45;                    // Anteil der Fläche, den ein Bild anfangs einnimmt

  var TEXT_MIN_WIDTH = 96;                 // Startbreite der leeren Sprechblase

  /* Griffsymbol für .placed-grab (einziger Weg zum Verschieben, siehe
     createNode()) — vier Pfeile aus der Mitte, das übliche "Verschieben"-
     Zeichen. Reines UI-Symbol auf eigenem weißem Knopf-Untergrund, deshalb
     ohne die zweilagige Kontur der Inhalts-Symbole (svgMarkup() in icons.js);
     currentColor übernimmt die Knopf-Textfarbe aus css/style.css. */
  var GRAB_ICON_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M12 3v18M3 12h18"/>' +
    '<path d="M8.5 6.5 12 3l3.5 3.5M8.5 17.5 12 21l3.5-3.5M6.5 8.5 3 12l3.5 3.5M17.5 8.5 21 12l-3.5 3.5"/>' +
    '</svg>';

  var ZOOM_MIN = 0.25;
  var ZOOM_MAX = 4;
  var ZOOM_WHEEL_SENSITIVITY = 0.0016;   // Exponent pro Pixel Mausrad-Delta
  var ZOOM_KEY_STEP = 1.2;               // Faktor pro Tastendruck/Knopfklick
  var ZOOM_SNAP_THRESHOLD = 0.04;        // 4 % — nah genug an 100 %, um einzurasten

  /* Modell. x/y sind der MITTELPUNKT des Elements in Flächen-Pixeln, w/h seine
     Größe — damit rechnen Ziehen und Begrenzen mit denselben Zahlen.
     kind unterscheidet vier Sorten: "icon" und "region" verweisen auf ICONS,
     "image" auf einen Eintrag in `images`, "text" trägt seinen Inhalt selbst.
     Ein "region"-Bereich und die zu ihm gehörende "text"-Blase kennen sich
     über textId/regionId UND stehen zusätzlich in `links` (siehe unten) —
     das Feld ist Datensicht, `links` ist der Weg, wie applyPosition() und
     removeInstance() das jeweils andere Element ohne Suche finden. */
  var placed = [];      // [{ id, kind, iconId|imageId, x, y, w, h, z, textId|regionId }]
  var nodes = {};       // instanceId -> DOM-Knoten
  var images = {};      // imageId -> { src (Data-URI), w, h }
  var links = {};       // instanceId (Region ODER Blase) -> { regionId, textId, lineEl }
  var selected = null;  // instanceId oder null
  var armed = null;     // iconId, der auf den nächsten Klick/Zug wartet, oder null
  var zTop = 0;
  var seq = 0;
  var imgSeq = 0;
  var lang = LANG_FALLBACK;
  var os = "other";     // "mac" | "win" | "linux" | "other"

  /* Ansicht (Zoom/Pan). Wird bewusst NICHT gespeichert — anders als Sprache
     und System: eine gemerkte Ansicht auf eine Fläche, die selbst nicht
     gespeichert wird ("Nothing is saved"), wäre beim nächsten Laden ohne
     Bezug. */
  var viewZoom = 1;
  var viewPanX = 0;
  var viewPanY = 0;

  /* Der sichtbare Ausschnitt unmittelbar VOR der letzten Größenänderung des
     Fensters (siehe visibleContentBounds() und den resize-Listener weiter
     unten) — von applyView() bei jeder Zoom/Schwenk-Änderung nachgeführt,
     damit der resize-Listener weggeschwenkte Elemente von tatsächlich
     sichtbaren unterscheiden kann. */
  var lastVisibleBounds = null;

  /* ------------------------------- Sprache ----------------------------- */

  /* Übersetzter Text mit Platzhaltern: t("statusPlaced", { label: "Person", n: 3 }).
     Fehlt ein Schlüssel in der aktiven Sprache, greift LANG_FALLBACK. */
  function t(key, vars) {
    var table = STRINGS[lang] || STRINGS[LANG_FALLBACK];
    var text = table[key];
    if (text === undefined) text = STRINGS[LANG_FALLBACK][key];
    if (text === undefined) return key;
    if (!vars) return text;
    return text.replace(/\{(\w+)\}/g, function (match, name) {
      return vars[name] === undefined ? match : String(vars[name]);
    });
  }

  /* Symbol-Beschriftung in der aktiven Sprache (aus js/icons.js). */
  function iconLabel(icon) {
    if (!icon) return t("elementFallback");
    return icon.label[lang] || icon.label[LANG_FALLBACK] || icon.id;
  }

  /* Beschriftung eines platzierten Elements — Symbol, Bereich, Bild oder
     Sprechblase. Bei der Sprechblase ist der getippte Text die beste
     Beschriftung, die es gibt; solange sie leer ist, bleibt es beim
     allgemeinen Namen. Ein Bereich trägt dieselbe iconId wie ein Symbol,
     fällt also automatisch in den letzten Zweig. */
  function instanceLabel(inst) {
    if (!inst) return t("elementFallback");
    if (inst.kind === "image") return t("imageLabel");
    if (inst.kind === "text") {
      var text = (inst.text || "").replace(/\s+/g, " ").trim();
      if (!text) return t("textLabel");
      return text.length > 60 ? text.slice(0, 60) + "…" : text;
    }
    return iconLabel(iconById(inst.iconId));
  }

  /* Ein Bereich löscht mit Entf auch seine Sprechblase — das darf die
     Beschriftung sagen, sonst kommt die zweite Löschung überraschend. */
  function placedLabelKey(inst) {
    return inst.kind === "region" ? "placedRegionLabel" : "placedLabel";
  }

  /* ---------------------------- Betriebssystem -------------------------- */

  /* Welche Tastenkombination fürs Aufnehmen gilt, hängt am System, nicht an der
     Sprache. Die Erkennung taugt nur als Vorauswahl: Browser verschleiern die
     Plattform zunehmend, und ein falscher Tastaturhinweis ist schlimmer als
     keiner. Deshalb ist jedes System über #shot-os frei wählbar. */
  function detectOs() {
    // Touch-Geräte haben keine Ausschnitt-Aufnahme — dort wäre das Nennen
    // einer Tastenkombination schlicht falsch.
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return "other";

    var uaData = navigator.userAgentData;
    var p = String((uaData && uaData.platform) || navigator.platform ||
                   navigator.userAgent || "").toLowerCase();
    if (/mac|iphone|ipad|ipod/.test(p)) return "mac";
    if (/win/.test(p)) return "win";
    if (/linux|x11|cros|bsd/.test(p)) return "linux";
    return "other";
  }

  function isOs(code) {
    return OS_CODES.indexOf(code) !== -1;
  }

  /* Gemerkte Wahl gewinnt, sonst die Erkennung. */
  function initialOs() {
    var stored = storedValue(OS_STORAGE_KEY);
    return isOs(stored) ? stored : detectOs();
  }

  function osTipKey(code) {
    return "shotTip" + code.charAt(0).toUpperCase() + code.slice(1);
  }

  function osName(code) {
    return t("os" + code.charAt(0).toUpperCase() + code.slice(1));
  }

  function applyOs() {
    shotTipEl.textContent = t(osTipKey(os));
    if (shotOsEl.value !== os) shotOsEl.value = os;
  }

  function setOs(code) {
    if (!isOs(code) || code === os) return;
    os = code;
    storeValue(OS_STORAGE_KEY, code);
    applyOs();
    setStatus(t("osSwitched", { os: osName(code) }));
  }

  function isLanguage(code) {
    return LANGUAGES.indexOf(code) !== -1;
  }

  /* localStorage kann verweigert werden — Safari erlaubt es über file:// nicht.
     Das darf die Seite nicht mitnehmen, die Wahl ist dann eben flüchtig. */
  function storedValue(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  function storeValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (err) { /* egal */ }
  }

  /* Gemerkte Wahl gewinnt, danach die Browsersprache, sonst LANG_FALLBACK. */
  function initialLanguage() {
    var stored = storedValue(LANG_STORAGE_KEY);
    if (isLanguage(stored)) return stored;

    var candidates = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < candidates.length; i++) {
      var code = String(candidates[i]).slice(0, 2).toLowerCase();
      if (isLanguage(code)) return code;
    }
    return LANG_FALLBACK;
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t("docTitle");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.dataset.i18nLabel));
    });

    langBtns.forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("is-active", active);
    });

    applyOs();              // Hinweistext hängt an Sprache UND System
    refreshPaletteLabels();
    refreshPlacedLabels();
  }

  function setLanguage(code) {
    if (!isLanguage(code) || code === lang) return;
    lang = code;
    storeValue(LANG_STORAGE_KEY, code);
    applyLanguage();
    setStatus(t("langSwitched"));
  }

  /* ------------------------------ Helpers ------------------------------ */

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function iconById(id) {
    for (var i = 0; i < ICONS.length; i++) {
      if (ICONS[i].id === id) return ICONS[i];
    }
    return null;
  }

  function instanceById(id) {
    for (var i = 0; i < placed.length; i++) {
      if (placed[i].id === id) return placed[i];
    }
    return null;
  }

  /* Dasselbe Markup zweimal: unten die schwarze Kontur, oben die farbige Linie.
     Die Farben stehen in css/style.css (--icon-halo / --icon-line), damit sich
     das Aussehen an einer Stelle ändern lässt. Die Klasse "icon-<id>" ist der
     Haken für die zwei farbigen Ausnahmen (dislike, unsure) — so bleibt das
     Symbol-Markup selbst frei von Farbangaben. */
  function svgMarkup(icon) {
    return '<svg class="icon icon-' + icon.id + '" viewBox="' + ICON_VIEWBOX + '" fill="none" ' +
           'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
           '<g class="icon-halo" stroke-width="' + ICON_HALO_WIDTH + '">' + icon.svg + '</g>' +
           '<g class="icon-line" stroke-width="' + ICON_STROKE_WIDTH + '">' + icon.svg + '</g>' +
           '</svg>';
  }

  function clamp(value, min, max) {
    return value < min ? min : (value > max ? max : value);
  }

  /* Bildschirm- in Flächen-Koordinaten, unter Berücksichtigung von Zoom/Pan.
     #canvas-content trägt den Transform (translate(panX,panY) scale(zoom)),
     #canvas selbst nicht — canvasEl.getBoundingClientRect() bleibt dadurch
     unabhängig von der Ansicht, und diese eine Umkehrung genügt für alle
     Aufrufstellen (Ziehen, Ablegen, Bereich aufziehen). Bei zoom=1, pan=0
     (Start- und einziger je gespeicherter Zustand) ist das Ergebnis mit dem
     alten canvasPoint() identisch. */
  function canvasPoint(ev) {
    var rect = canvasEl.getBoundingClientRect();
    return {
      x: (ev.clientX - rect.left - viewPanX) / viewZoom,
      y: (ev.clientY - rect.top  - viewPanY) / viewZoom
    };
  }

  /* Mitte der SICHTBAREN Fläche in Flächen-Koordinaten — für Einfügen ohne
     Zeigerposition (Strg/⌘+V), damit ein eingefügtes Bild dort erscheint,
     wo gerade hingeschaut wird, auch nach einem Schwenk. */
  function viewportCenterContent() {
    var rect = canvasEl.getBoundingClientRect();
    return {
      x: (rect.width  / 2 - viewPanX) / viewZoom,
      y: (rect.height / 2 - viewPanY) / viewZoom
    };
  }

  function setStatus(text) {
    statusEl.textContent = text;
  }

  /* Pointer Capture ist nur eine Verbesserung, kein Fundament: die Bewegungs-
     Listener hängen immer am window. Fällt das Capture aus (z. B. weil der
     Zeiger schon losgelassen wurde), läuft das Ziehen trotzdem weiter. */
  function capturePointer(el, pointerId) {
    try { el.setPointerCapture(pointerId); } catch (err) { /* egal */ }
  }

  function releasePointer(el, pointerId) {
    try {
      if (el.hasPointerCapture(pointerId)) el.releasePointerCapture(pointerId);
    } catch (err) { /* egal */ }
  }

  /* ------------------------------- Sicht -------------------------------- */

  function applyView() {
    canvasContentEl.style.transform =
      "translate(" + viewPanX + "px," + viewPanY + "px) scale(" + viewZoom + ")";
    zoomReadoutEl.textContent = Math.round(viewZoom * 100) + "%";
    lastVisibleBounds = visibleContentBounds();
  }

  /* Zoomt so, dass der Flächenpunkt unter (sx, sy) — Bildschirm-Pixel relativ
     zu canvasEl — unter dem Zeiger stehen bleibt: das übliche "zum Zeiger
     zoomen" aus Bildbearbeitung/Kartendiensten. */
  function setZoom(nextZoom, sx, sy) {
    nextZoom = clamp(nextZoom, ZOOM_MIN, ZOOM_MAX);
    // Rastet nahe 100 % ein: pixelgenau exakt auf 100 % zu scrollen ist sonst
    // kaum zu treffen. Solange die Anfrage innerhalb der Schwelle bleibt,
    // ergibt sich immer wieder exakt 1 — dadurch fühlt sich 100 % "magnetisch"
    // an, ohne dass ein eigener Zustand dafür nötig wäre.
    if (Math.abs(nextZoom - 1) < ZOOM_SNAP_THRESHOLD) nextZoom = 1;
    if (nextZoom === viewZoom) return;
    var factor = nextZoom / viewZoom;
    viewPanX = sx - (sx - viewPanX) * factor;
    viewPanY = sy - (sy - viewPanY) * factor;
    viewZoom = nextZoom;
    applyView();
  }

  function stepZoom(factor) {
    var rect = canvasEl.getBoundingClientRect();
    setZoom(viewZoom * factor, rect.width / 2, rect.height / 2);
  }

  function resetView() {
    viewZoom = 1;
    viewPanX = 0;
    viewPanY = 0;
    applyView();
  }

  /* Mausrad-Delta auf Pixel normieren — Firefox liefert häufig deltaMode 1
     (Zeilen) statt 0 (Pixel), manche Systeme 2 (Seiten). */
  function wheelDelta(ev, value) {
    if (ev.deltaMode === 1) return value * 16;
    if (ev.deltaMode === 2) return value * canvasEl.clientHeight;
    return value;
  }

  /* ------------------------------ Palette ------------------------------ */

  function buildPalette() {
    ICONS.forEach(function (icon) {
      var item = document.createElement("button");
      item.type = "button";
      item.className = "palette-item";
      item.dataset.iconId = icon.id;
      item.setAttribute("aria-pressed", "false");
      item.innerHTML = svgMarkup(icon) + '<span class="palette-label"></span>';

      item.addEventListener("pointerdown", onPaletteDown);
      item.addEventListener("click", onPaletteClick);
      paletteEl.appendChild(item);
    });
  }

  /* Beim Sprachwechsel nur die Texte tauschen — die Knöpfe bleiben stehen,
     damit eine laufende Scharfstellung nicht verloren geht. */
  function refreshPaletteLabels() {
    ICONS.forEach(function (icon) {
      var item = paletteEl.querySelector('[data-icon-id="' + icon.id + '"]');
      if (!item) return;
      var label = iconLabel(icon);
      item.title = t("paletteItemTitle", { label: label });
      item.querySelector(".palette-label").textContent = label;
    });
  }

  /* Beim Sprachwechsel nur Beschriftungen anfassen — der getippte Inhalt einer
     Sprechblase gehört dem Benutzer, nur ihr Platzhalter wird übersetzt.
     Ausnahme: die noch unveränderte Standard-Bildunterschrift einer
     Bereichs-Blase (isDefaultText) folgt der Sprache mit wie jeder andere
     Chrome-Text — sonst bliebe sie nach dem Umschalten in der alten Sprache
     stehen, obwohl der Rest der Seite längst übersetzt ist. */
  function refreshPlacedLabels() {
    placed.forEach(function (inst) {
      var node = nodes[inst.id];
      if (!node) return;
      var bubble = node.querySelector(".bubble");

      if (bubble && inst.isDefaultText && inst.regionId) {
        var region = instanceById(inst.regionId);
        if (region) {
          inst.text = iconLabel(iconById(region.iconId));
          bubble.textContent = inst.text;
          measureText(inst);
        }
      }

      refreshOneLabel(inst);
      if (bubble) bubble.dataset.placeholder = t("textPlaceholder");
    });
  }

  /* Ziehen aus dem Menü. Ein "Geist" folgt dem Zeiger; das Menü-Element
     selbst bleibt stehen und bleibt beliebig oft wiederverwendbar. */
  function onPaletteDown(ev) {
    if (ev.button !== undefined && ev.button !== 0) return;

    var item = ev.currentTarget;
    var icon = iconById(item.dataset.iconId);
    if (!icon) return;

    ev.preventDefault();

    var startX = ev.clientX;
    var startY = ev.clientY;
    var dragging = false;
    var ghost = null;

    capturePointer(item, ev.pointerId);

    function onMove(moveEv) {
      if (!dragging) {
        var dx = moveEv.clientX - startX;
        var dy = moveEv.clientY - startY;
        if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
        dragging = true;
        ghost = document.createElement("div");
        ghost.className = "ghost";
        ghost.innerHTML = svgMarkup(icon);
        document.body.appendChild(ghost);
        disarm();
      }
      ghost.style.left = (moveEv.clientX - PLACED_SIZE / 2) + "px";
      ghost.style.top = (moveEv.clientY - PLACED_SIZE / 2) + "px";
    }

    function onUp(upEv) {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      releasePointer(item, upEv.pointerId);
      if (ghost) ghost.remove();

      if (!dragging) return;   // war ein Tippen — den click-Handler übernehmen lassen

      /* Nach einer Ziehgeste darf der unmittelbar folgende click nichts mehr
         auslösen. Die Sperre MUSS danach wieder fallen: endet das Ziehen über
         der Fläche, bekommt der Menü-Knopf gar keinen click (der Browser
         schickt ihn an den gemeinsamen Vorfahren von Druck- und Loslasspunkt).
         Eine dauerhafte Sperre würde dann den nächsten echten Klick auf
         dasselbe Symbol verschlucken. setTimeout(0) läuft nach dem click
         derselben Interaktion und räumt sie in jedem Fall weg. */
      item._suppressClick = true;
      window.setTimeout(function () { item._suppressClick = false; }, 0);

      // Abgebrochene Geste (z. B. Systemgeste auf dem Tablet) platziert nichts.
      if (upEv.type === "pointercancel") return;

      var rect = canvasEl.getBoundingClientRect();
      var inside = upEv.clientX >= rect.left && upEv.clientX <= rect.right &&
                   upEv.clientY >= rect.top && upEv.clientY <= rect.bottom;
      if (inside) {
        // canvasPoint() statt rohem clientX/Y - rect.left: rechnet Zoom/Schwenk
        // mit ein, genau wie jeder andere Platzierungsweg (Klicken, Bereich
        // aufziehen, Einfügen). Sonst landet das Symbol bei laufendem
        // Zoom/Schwenk woanders, als wo losgelassen wurde.
        var dropPoint = canvasPoint(upEv);
        placeFromPalette(icon.id, dropPoint.x, dropPoint.y);
      }
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  }

  /* Klick-/Tastatur-Fallback (PRD 5): Symbol anklicken, dann die Stelle auf
     der Fläche anklicken. Mit der Tastatur ausgelöst (ev.detail === 0) gibt es
     keinen Zielklick — dann übernimmt placeFromKeyboard() die Position. */
  function onPaletteClick(ev) {
    var item = ev.currentTarget;

    if (item._suppressClick) {
      item._suppressClick = false;
      return;
    }

    if (ev.detail === 0) {
      placeFromKeyboard(item.dataset.iconId);
      return;
    }

    if (armed === item.dataset.iconId) disarm();
    else arm(item.dataset.iconId);
  }

  function arm(iconId) {
    disarm();
    armed = iconId;
    var item = paletteEl.querySelector('[data-icon-id="' + iconId + '"]');
    if (item) item.setAttribute("aria-pressed", "true");
    // Fadenkreuz-Cursor kündigt an, dass sich das scharfgestellte Symbol zu
    // einem Bereich aufziehen lässt, wie in Bildbearbeitungsprogrammen üblich.
    canvasEl.classList.add("is-armed");
    setStatus(t("statusArmed", { label: iconLabel(iconById(iconId)) }));
  }

  function disarm() {
    if (!armed) return;
    var item = paletteEl.querySelector('[data-icon-id="' + armed + '"]');
    if (item) item.setAttribute("aria-pressed", "false");
    armed = null;
    canvasEl.classList.remove("is-armed");
  }

  /* Ohne Zeiger gibt es keinen Zielpunkt. Statt alles übereinander zu stapeln,
     füllen wir die Fläche vom sichtbaren oberen linken Rand zeilenweise auf
     (nicht vom ungezoomten Fläche-Ursprung — sonst landet das Raster bei
     laufendem Zoom/Schwenk außerhalb des gerade sichtbaren Ausschnitts) —
     von dort kann man das Element mit den Pfeiltasten weiterschieben. */
  function placeFromKeyboard(iconId) {
    var bounds = visibleContentBounds();
    var margin = 16;
    var step = PLACED_SIZE + margin;
    var perRow = Math.max(1, Math.floor((bounds.right - bounds.left - margin) / step));
    var i = placed.length;
    var x = bounds.left + margin + PLACED_SIZE / 2 + (i % perRow) * step;
    var y = bounds.top + margin + PLACED_SIZE / 2 + Math.floor(i / perRow) * step;

    placeFromPalette(iconId, x, y);
    var node = nodes[selected];
    if (node && !node.classList.contains("is-editing")) node.focus();
  }

  /* Einziger Weg vom Menü auf die Fläche — Ziehen, Klicken und Tastatur laufen
     alle hier durch. */
  function placeFromPalette(entryId, x, y) {
    if (!iconById(entryId)) return null;
    return addInstance(entryId, x, y, true);
  }

  /* ------------------------- Elemente auf der Fläche -------------------- */

  function addInstance(iconId, x, y, announce) {
    var icon = iconById(iconId);
    if (!icon) return null;
    return addPlaced({
      kind: "icon",
      iconId: iconId,
      w: PLACED_SIZE,
      h: PLACED_SIZE
    }, x, y, announce);
  }

  function addImageInstance(imageId, x, y, announce) {
    var image = images[imageId];
    if (!image) return null;
    var fit = fitSize(image.w, image.h);
    return addPlaced({
      kind: "image",
      imageId: imageId,
      w: fit.w,
      h: fit.h
    }, x, y, announce);
  }

  /* Ein aufgezogener Bereich braucht immer eine verknüpfte Sprechblase daneben
     — eine Markierung ohne Erklärung oder eine Erklärung ohne Markierung wäre
     beides unvollständig. Die Blase startet vorausgefüllt mit der Symbol-
     Beschriftung und offen zum Weiterschreiben; setPosition() zieht sie
     automatisch auf die Fläche zurück, falls die naive Ecke rechts unten
     daneben liegen würde. */
  function addRegionInstance(iconId, x, y, w, h) {
    var icon = iconById(iconId);
    if (!icon) return null;

    var region = addPlaced({ kind: "region", iconId: iconId, w: w, h: h }, x, y, false);
    if (!region) return null;

    var label = iconLabel(icon);
    var gap = 14;
    var text = addPlaced({
      kind: "text",
      text: label,
      isDefaultText: true,
      regionId: region.id,
      w: TEXT_MIN_WIDTH,
      h: 40
    }, region.x + region.w / 2 + gap + TEXT_MIN_WIDTH / 2, region.y + region.h / 2 - 20, false);

    region.textId = text.id;
    linkAnnotation(region, text);

    startEditing(text);
    setStatus(t("statusRegionPlaced", { label: label }));
    return region;
  }

  /* ------------------------- Bereich ↔ Sprechblase ----------------------- */

  /* Verknüpft einen Bereich mit seiner Sprechblase: beide merken sich die ID
     des anderen, `links` macht das Paar von JEDER der beiden IDs aus
     auffindbar (für applyPosition()/removeInstance()), und eine gestrichelte
     Linie erscheint dazwischen. */
  function linkAnnotation(region, text) {
    var link = { regionId: region.id, textId: text.id, lineEl: null };
    if (leaderSvg) {
      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("class", "leader-line icon-" + region.iconId);
      leaderSvg.appendChild(line);
      link.lineEl = line;
    }
    links[region.id] = link;
    links[text.id] = link;
    updateLeaderLine(link);
  }

  function unlinkAnnotation(id) {
    var link = links[id];
    if (!link) return;
    delete links[link.regionId];
    delete links[link.textId];
    if (link.lineEl) link.lineEl.remove();
  }

  function updateLeaderLine(link) {
    var region = instanceById(link.regionId);
    var text = instanceById(link.textId);
    if (!region || !text) return;

    if (link.lineEl) {
      var p1 = rectEdgeToward(region.x, region.y, region.w / 2, region.h / 2, text.x, text.y);
      var p2 = rectEdgeToward(text.x, text.y, text.w / 2, text.h / 2, region.x, region.y);
      link.lineEl.setAttribute("x1", p1.x);
      link.lineEl.setAttribute("y1", p1.y);
      link.lineEl.setAttribute("x2", p2.x);
      link.lineEl.setAttribute("y2", p2.y);
    }
  }

  /* Punkt auf dem Rand eines Rechtecks (Mitte cx,cy, halbe Breite/Höhe hw,hh)
     auf der Strecke zur Mitte des jeweils anderen Elements — ergibt zusammen
     die kürzeste sichtbare Verbindungslinie zwischen Bereich und Blase. */
  function rectEdgeToward(cx, cy, hw, hh, tx, ty) {
    var dx = tx - cx, dy = ty - cy;
    if (!dx && !dy) return { x: cx, y: cy };
    var scale = Math.min(
      dx ? Math.abs(hw / dx) : Infinity,
      dy ? Math.abs(hh / dy) : Infinity
    );
    return { x: cx + dx * scale, y: cy + dy * scale };
  }

  /* Gemeinsamer Weg für Symbole, Bereiche, Bilder und Sprechblasen — ab hier
     sind alle gleichwertig: verschiebbar, auswählbar, löschbar, in derselben
     Stapelreihenfolge. regionId/textId bleiben meist unbenutzt; addRegionInstance()
     setzt sie, um einen Bereich mit seiner Sprechblase zu verknüpfen. */
  function addPlaced(base, x, y, announce) {
    var inst = {
      id: "e" + (++seq),
      kind: base.kind,
      iconId: base.iconId,
      imageId: base.imageId,
      text: base.text,
      isDefaultText: base.isDefaultText || false,
      regionId: base.regionId,
      textId: base.textId,
      x: 0,
      y: 0,
      w: base.w,
      h: base.h,
      z: nextZ()
    };
    placed.push(inst);
    setPosition(inst, x, y);

    createNode(inst);
    select(inst.id);

    if (announce) {
      setStatus(t("statusPlaced", { label: instanceLabel(inst), n: placed.length }));
    }
    return inst;
  }

  /* Ein Bild auf einen Bruchteil der Fläche einpassen, Seitenverhältnis
     erhalten. Ein Screenshot in Originalgröße würde die Fläche sprengen. */
  function fitSize(naturalW, naturalH) {
    var rect = canvasEl.getBoundingClientRect();
    var maxW = Math.max(PLACED_SIZE, rect.width * IMAGE_FIT);
    var maxH = Math.max(PLACED_SIZE, rect.height * IMAGE_FIT);
    var scale = Math.min(maxW / naturalW, maxH / naturalH, 1);
    return {
      w: Math.max(16, Math.round(naturalW * scale)),
      h: Math.max(16, Math.round(naturalH * scale))
    };
  }

  function createNode(inst) {
    var label = instanceLabel(inst);
    var node = document.createElement("div");
    // Farbhaken fürs verknüpfte Symbol: die Blase kennt keine eigene iconId
    // (nur ihr Bereich), deshalb hier über regionId nachschlagen — genau die
    // Farbe, die auch die Verbindungslinie trägt (css/style.css).
    var linkedRegion = inst.kind === "text" && inst.regionId ? instanceById(inst.regionId) : null;
    // Ausgeschrieben statt zusammengesetzt, damit die Klassennamen auch im
    // Quelltext auffindbar sind (Verbindung zu css/style.css). Bereich UND
    // verknüpfte Blase tragen zusätzlich "icon-<id>" direkt am Wurzelelement
    // — das ist der Farbhaken für Rand/Füllung, genau wie svgMarkup() ihn
    // fürs Symbol setzt.
    node.className = inst.kind === "image"  ? "placed placed-image"
                  : inst.kind === "text"   ? "placed placed-text" + (linkedRegion ? " icon-" + linkedRegion.iconId : "")
                  : inst.kind === "region" ? "placed placed-region icon-" + inst.iconId
                  : "placed placed-icon";
    node.dataset.id = inst.id;
    node.tabIndex = 0;
    node.setAttribute("aria-label", t(placedLabelKey(inst), { label: label }));
    node.style.zIndex = String(inst.z);

    // Die Sprechblase bestimmt ihre Größe selbst aus dem Text.
    if (inst.kind !== "text") {
      node.style.width = inst.w + "px";
      node.style.height = inst.h + "px";
    }

    var content;
    if (inst.kind === "image") {
      content = '<img alt="" draggable="false" />';
    } else if (inst.kind === "text") {
      // KEIN data-i18n an der Blase: applyLanguage() setzt darauf textContent
      // und würde den getippten Text bei jedem Sprachwechsel löschen.
      content = '<div class="bubble" contenteditable="plaintext-only" spellcheck="false"></div>';
    } else if (inst.kind === "region") {
      // Kleines Abzeichen mit dem Symbol des Bereichs: bleibt die Bedeutung
      // auch dann erkennbar, wenn die verknüpfte Bildunterschrift später
      // gelöscht oder leer geräumt wird.
      content = '<span class="region-badge">' + svgMarkup(iconById(inst.iconId)) + '</span>';
    } else {
      content = svgMarkup(iconById(inst.iconId));
    }
    node.innerHTML = content +
      '<button type="button" class="placed-grab">' + GRAB_ICON_SVG + '</button>' +
      '<button type="button" class="placed-del">&times;</button>';

    if (inst.kind === "image") {
      node.querySelector("img").src = images[inst.imageId].src;
    }

    // Beschriftung per setAttribute, damit Anführungszeichen im Text nicht
    // versehentlich das Markup zerlegen können.
    var delBtn = node.querySelector(".placed-del");
    delBtn.setAttribute("aria-label", t("placedDelLabel", { label: label }));
    var grabBtn = node.querySelector(".placed-grab");
    grabBtn.setAttribute("aria-label", t("placedGrabLabel", { label: label }));

    node.addEventListener("pointerdown", onPlacedDown);
    // Absichtlich KEIN focus-Listener, der select() aufruft: ein Klick auf
    // ein noch nicht ausgewähltes Element fokussiert es nebenbei (siehe
    // onPlacedDown()), das darf allein daraus aber keine Auswahl machen —
    // auch nicht bei der rechten Maustaste, die dieselbe native Fokus-
    // Verschiebung auslöst. addPlaced() wählt Neues selbst aus, jede andere
    // Stelle, die auswählen will (Doppelklick, Ziehen), ruft select() explizit.
    delBtn.addEventListener("click", function (ev) {
      ev.stopPropagation();
      removeInstance(inst.id);
    });

    // Einziger Weg zum Verschieben (siehe onPlacedDown(): kein Ziehen mehr
    // direkt am Element-Körper) — ein eigener, immer gleich erreichbarer
    // Griff statt "irgendwo aufs Element klicken", das bei einer tippenden
    // Sprechblase ohnehin mit der Cursor-Positionierung kollidieren würde.
    // pointerdown statt click, damit sofort mit demselben Zeigerdruck
    // gezogen werden kann, ohne vorheriges Auswählen.
    grabBtn.addEventListener("pointerdown", function (ev) {
      if (ev.button !== undefined && ev.button !== 0) return;
      ev.preventDefault();
      ev.stopPropagation();

      // Tippt eine andere Blase gerade, beendet das Greifen ihre Bearbeitung
      // zuerst — sonst bliebe sie unsichtbar im Schreibmodus hängen.
      if (inst.kind === "text" && isEditing(inst)) {
        var bubble = bubbleOf(inst);
        if (bubble) bubble.blur();
      }

      select(inst.id);
      bringToFront(inst);
      node.focus();

      var point = canvasPoint(ev);
      var grabX = point.x - inst.x;
      var grabY = point.y - inst.y;

      node.classList.add("is-dragging");
      capturePointer(node, ev.pointerId);

      function onMove(moveEv) {
        var p = canvasPoint(moveEv);
        setPosition(inst, p.x - grabX, p.y - grabY);
        applyPosition(inst);
      }

      function onUp(upEv) {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        releasePointer(node, upEv.pointerId);
        node.classList.remove("is-dragging");
      }

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    });

    if (inst.kind === "text") {
      wireBubble(inst, node);   // eigener Doppelklick: öffnet den Schreibmodus (wählt dabei auch aus, siehe startEditing())
    } else {
      // Doppelklick wählt aus — ein einzelner Klick tut das bewusst nicht
      // mehr (siehe onPlacedDown()), damit ein großflächiges Element wie ein
      // eingefügter Screenshot nicht jede andere Bedienung der Fläche
      // blockiert.
      node.addEventListener("dblclick", function (ev) {
        if (ev.target.closest(".placed-del") || ev.target.closest(".placed-grab")) return;
        ev.preventDefault();
        select(inst.id);
        bringToFront(inst);
        node.focus();
      });
    }

    nodes[inst.id] = node;
    canvasContentEl.appendChild(node);
    applyPosition(inst);
    if (inst.kind === "text") measureText(inst);
    return node;
  }

  /* ---------------------------- Sprechblase ----------------------------- */

  function bubbleOf(inst) {
    var node = nodes[inst.id];
    return node ? node.querySelector(".bubble") : null;
  }

  function wireBubble(inst, node) {
    var bubble = node.querySelector(".bubble");
    bubble.textContent = inst.text || "";
    bubble.dataset.placeholder = t("textPlaceholder");

    bubble.addEventListener("input", function () {
      // Ab dem ersten echten Tastenanschlag gehört der Text dem Benutzer —
      // ein Sprachwechsel darf ihn dann nicht mehr überschreiben (siehe
      // refreshPlacedLabels()).
      inst.isDefaultText = false;
      inst.text = bubble.textContent;
      measureText(inst);
      refreshOneLabel(inst);
    });

    // Doppelklick holt eine bereits abgelegte Blase zurück in den Schreibmodus.
    node.addEventListener("dblclick", function (ev) {
      ev.preventDefault();
      startEditing(inst);
    });

    bubble.addEventListener("blur", function () { stopEditing(inst); });
  }

  function startEditing(inst) {
    var node = nodes[inst.id];
    var bubble = bubbleOf(inst);
    if (!node || !bubble) return;

    select(inst.id);
    bringToFront(inst);
    node.classList.add("is-editing");
    bubble.focus();

    // Cursor ans Ende, damit Weiterschreiben nicht am Anfang landet.
    var range = document.createRange();
    range.selectNodeContents(bubble);
    range.collapse(false);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  /* Eine leer gebliebene Blase wird entfernt: unsichtbar im Screenshot, aber
     im Weg beim Anklicken. */
  function stopEditing(inst) {
    var node = nodes[inst.id];
    if (!node) return;
    node.classList.remove("is-editing");

    if (!(inst.text || "").trim()) {
      removeInstance(inst.id);
      return;
    }
    measureText(inst);
  }

  function isEditing(inst) {
    var node = nodes[inst.id];
    return !!node && node.classList.contains("is-editing");
  }

  /* Die Blase wächst mit dem Text. Ihre echte Größe muss zurück ins Modell,
     sonst rechnen Begrenzung und späteres Ziehen mit veralteten Maßen. */
  function measureText(inst) {
    var node = nodes[inst.id];
    var bubble = node && node.querySelector(".bubble");
    if (!node || !bubble) return;

    bubble.classList.toggle("is-empty", !(inst.text || "").length);
    inst.w = node.offsetWidth;
    inst.h = node.offsetHeight;
    setPosition(inst, inst.x, inst.y);   // neu begrenzen, falls sie herausragt
    applyPosition(inst);
  }

  function refreshOneLabel(inst) {
    var node = nodes[inst.id];
    if (!node) return;
    var label = instanceLabel(inst);
    node.setAttribute("aria-label", t(placedLabelKey(inst), { label: label }));
    node.querySelector(".placed-del").setAttribute("aria-label", t("placedDelLabel", { label: label }));
    node.querySelector(".placed-grab").setAttribute("aria-label", t("placedGrabLabel", { label: label }));
  }

  /* Der gerade sichtbare Ausschnitt in Flächen-Koordinaten (abhängig von
     Zoom/Pan) — dieselbe Umkehrung wie canvasPoint(), hier auf die Bildschirm-
     ränder (0,0) und (rect.width, rect.height) angewendet statt auf einen
     Zeigerpunkt. Bei zoom=1, pan=0 deckt sich das Ergebnis exakt mit
     [0, rect.width] — unverändert gegenüber vor der Zoom/Pan-Funktion.
     Gemeinsam genutzt von setPosition() (Begrenzung) und placeFromKeyboard()
     (Rasterursprung) — beide sollen sich auf dasselbe "gerade sichtbar"
     beziehen, nicht auf das ursprüngliche, ungezoomte Fenster. */
  function visibleContentBounds() {
    var rect = canvasEl.getBoundingClientRect();
    return {
      left:   -viewPanX / viewZoom,
      top:    -viewPanY / viewZoom,
      right:  (rect.width  - viewPanX) / viewZoom,
      bottom: (rect.height - viewPanY) / viewZoom
    };
  }

  /* Position im Modell setzen — immer innerhalb des gerade sichtbaren
     Ausschnitts, nicht eines festen [0, rect.width]: sonst reißt jedes
     Element, das außerhalb des ursprünglichen, ungezoomten Fensters
     gezeichnet wird, auf dessen Rand zurück, sobald man dorthin geschwenkt
     hat (das Element "springt" an eine falsche Stelle, statt dort zu
     bleiben, wo gezeichnet wurde). */
  function setPosition(inst, x, y) {
    var bounds = visibleContentBounds();
    var halfW = inst.w / 2;
    var halfH = inst.h / 2;
    inst.x = clamp(x, bounds.left + halfW, Math.max(bounds.left + halfW, bounds.right - halfW));
    inst.y = clamp(y, bounds.top + halfH, Math.max(bounds.top + halfH, bounds.bottom - halfH));
  }

  function applyPosition(inst) {
    var node = nodes[inst.id];
    if (!node) return;
    node.style.left = (inst.x - inst.w / 2) + "px";
    node.style.top = (inst.y - inst.h / 2) + "px";

    // Bewegt sich ein verknüpftes Element (Bereich ODER Blase), muss die
    // Linie dazwischen mitwandern — jede Bewegungsart läuft durch diese
    // eine Funktion (Ziehen, Pfeiltasten, Größenänderung, Textwachstum).
    var link = links[inst.id];
    if (link) updateLeaderLine(link);
  }

  /* Verschieben läuft ausschließlich über .placed-grab (siehe createNode()) —
     hier bleibt nur übrig, einen Klick auf den Element-Körper selbst
     folgenlos durchzulassen: zum scharf gestellten Werkzeug oder zum
     Schwenken auf der Fläche (leerer Klick), oder zur Cursor-Positionierung
     in einer tippenden Sprechblase (Klick im Schreibmodus). Ohne eigenen
     Griff hätte Letzteres sonst mit dem Verschieben kollidiert. */
  function onPlacedDown(ev) {
    if (ev.button !== undefined && ev.button !== 0) return;
    // Der ×- und der Greif-Knopf haben ihre eigenen Listener (click bzw.
    // pointerdown) und regeln ihre Ausbreitung selbst — nur der ×-Knopf
    // braucht hier zusätzlich Schutz, weil sein Listener erst beim späteren
    // click-Ereignis greift, nicht schon beim pointerdown.
    if (ev.target.closest(".placed-del")) { ev.stopPropagation(); return; }

    var node = ev.currentTarget;
    var inst = instanceById(node.dataset.id);
    if (!inst) return;

    // Im Schreibmodus gehört der Klick dem Text: preventDefault() würde den
    // Cursor nicht setzen lassen.
    if (inst.kind === "text" && isEditing(inst)) {
      ev.stopPropagation();
    }
  }

  function bringToFront(inst) {
    inst.z = nextZ();
    var node = nodes[inst.id];
    if (node) node.style.zIndex = String(inst.z);
  }

  /* zTop zentral hochzählen, statt an zwei Stellen ++zTop zu schreiben: hier
     hängt auch die Ebene der Verbindungslinien dran. Sie müssen immer über
     dem zuletzt vergebenen z-index liegen, sonst könnte eine Linie hinter
     einem später platzierten Element verschwinden. */
  function nextZ() {
    zTop++;
    if (leaderSvg) leaderSvg.style.zIndex = String(zTop + 1);
    return zTop;
  }

  function select(id) {
    selected = id;
    Object.keys(nodes).forEach(function (key) {
      nodes[key].classList.toggle("is-selected", key === id);
    });
  }

  /* Ein Bereich und seine Sprechblase sind EINE Anmerkung: löscht man den
     Bereich, verschwindet die Erklärung mit — sonst bliebe eine Bild-
     unterschrift ohne Bezug übrig. Löscht man dagegen NUR die Blase (× oder
     Entf auf ihr, oder leer stehen gelassen), bleibt der Bereich stehen:
     Farbe, Rand und Abzeichen tragen die Bedeutung auch ohne Kommentar. */
  function removeInstance(id) {
    var inst = instanceById(id);
    if (!inst) return;

    var link = links[id];
    var cascadeTextId = (inst.kind === "region" && link) ? link.textId : null;
    unlinkAnnotation(id);

    // Erst die Sprechblase entfernen, damit die Status-Meldung danach vom
    // Bereich handelt — nicht von einem internen Zwischenschritt.
    if (cascadeTextId) removeInstance(cascadeTextId);

    placed = placed.filter(function (p) { return p.id !== id; });
    if (nodes[id]) nodes[id].remove();
    delete nodes[id];
    if (selected === id) selected = null;

    setStatus(t("statusRemoved", { label: instanceLabel(inst), n: placed.length }));
  }

  /* ------------------------------- Bilder ------------------------------ */

  /* Ein Screenshot kommt über zwei Wege herein: Einfügen aus der
     Zwischenablage und Ablegen einer Datei vom System. Beide landen hier.

     Data-URI statt Blob-URL: kein Lebenszyklus, den man aufräumen müsste, und
     der Wert übersteht das Weitergeben an <img> ohne Sonderfälle. */
  function importImageFile(file, x, y) {
    if (!file || !file.type || file.type.indexOf("image/") !== 0) {
      setStatus(t("statusImageBad"));
      return;
    }
    if (file.size > IMAGE_MAX_BYTES) {
      setStatus(t("statusImageBig", { mb: Math.round(IMAGE_MAX_BYTES / 1024 / 1024) }));
      return;
    }

    var reader = new FileReader();

    reader.onerror = function () { setStatus(t("statusImageFail")); };

    reader.onload = function () {
      var probe = new Image();

      probe.onerror = function () { setStatus(t("statusImageFail")); };

      probe.onload = function () {
        var shrunk = downscale(probe, String(reader.result));
        var id = "img" + (++imgSeq);
        images[id] = shrunk;
        addImageInstance(id, x, y, true);
        var node = nodes[selected];
        if (node) node.focus();
      };

      probe.src = String(reader.result);
    };

    reader.readAsDataURL(file);
  }

  /* Netzhaut-Aufnahmen sind schnell 2880×1800 und größer. Für die Anzeige ist
     das reine Speicherlast, also einmal verkleinern und nur das behalten. */
  function downscale(img, src) {
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    var longest = Math.max(w, h);
    if (longest <= IMAGE_MAX_PX) return { src: src, w: w, h: h };

    var scale = IMAGE_MAX_PX / longest;
    var outW = Math.max(1, Math.round(w * scale));
    var outH = Math.max(1, Math.round(h * scale));
    var out = document.createElement("canvas");
    out.width = outW;
    out.height = outH;
    out.getContext("2d").drawImage(img, 0, 0, outW, outH);

    try {
      return { src: out.toDataURL("image/png"), w: outW, h: outH };
    } catch (err) {
      return { src: src, w: w, h: h };   // im Zweifel das Original behalten
    }
  }

  /* Mehrere Dateien auf einmal sollen nicht deckungsgleich landen. */
  function importImageFiles(files, x, y) {
    var step = 24;
    Array.prototype.slice.call(files).forEach(function (file, i) {
      importImageFile(file, x + i * step, y + i * step);
    });
  }

  function setDropTarget(on) {
    canvasEl.classList.toggle("is-dropping", !!on);
  }

  /* Mausrad/Trackpad-Scroll zoomt immer, ohne Modifiertaste — eine frühere
     Fassung verlangte Strg/⌘+Scrollen fürs Zoomen, das war aber nicht
     auffindbar. Schwenken übernimmt stattdessen Klicken+Halten (siehe
     pointerdown weiter unten) — dieselbe Aufteilung wie in Google Maps
     (Scrollen zoomt, Ziehen schwenkt) statt der Figma-Konvention mit
     Modifiertaste. { passive: false } ist nötig, sonst wirkt
     preventDefault() im wheel-Ereignis nicht und die Seite zoomt/scrollt
     nativ mit. */
  canvasEl.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    var rect = canvasEl.getBoundingClientRect();
    var sx = ev.clientX - rect.left;
    var sy = ev.clientY - rect.top;
    var factor = Math.exp(-wheelDelta(ev, ev.deltaY) * ZOOM_WHEEL_SENSITIVITY);
    setZoom(viewZoom * factor, sx, sy);
  }, { passive: false });

  /* Safari feuert bei Trackpad-Kneifen KEIN wheel-Ereignis mit ctrlKey (wie
     Chrome/Firefox), sondern eigene, nicht standardisierte gesturestart/
     -change/-end-Ereignisse (nur WebKit). Ohne Gegenwehr zoomt Safari dabei
     die GANZE SEITE nativ statt die Fläche — preventDefault() unterbindet
     das, genau wie beim wheel-Handler oben. In Chrome/Firefox feuern diese
     Ereignisse nie; der Handler ist dort folgenlos. */
  canvasEl.addEventListener("gesturestart",  function (ev) { ev.preventDefault(); }, { passive: false });
  canvasEl.addEventListener("gesturechange", function (ev) { ev.preventDefault(); }, { passive: false });
  canvasEl.addEventListener("gestureend",    function (ev) { ev.preventDefault(); }, { passive: false });

  zoomInEl.addEventListener("click", function () { stepZoom(ZOOM_KEY_STEP); });
  zoomOutEl.addEventListener("click", function () { stepZoom(1 / ZOOM_KEY_STEP); });
  zoomResetEl.addEventListener("click", function () {
    resetView();
    setStatus(t("statusViewReset"));
  });

  /* Ohne preventDefault() im dragover feuert das drop-Ereignis nie. */
  canvasEl.addEventListener("dragover", function (ev) {
    ev.preventDefault();
    setDropTarget(true);
  });

  canvasEl.addEventListener("dragleave", function (ev) {
    if (ev.target === canvasEl) setDropTarget(false);
  });

  canvasEl.addEventListener("drop", function (ev) {
    ev.preventDefault();
    setDropTarget(false);
    var files = ev.dataTransfer && ev.dataTransfer.files;
    if (!files || !files.length) return;
    var point = canvasPoint(ev);
    importImageFiles(files, point.x, point.y);
  });

  /* Wichtig: ein Abwurf NEBEN die Fläche würde den Browser sonst zur Datei
     navigieren lassen — die Komposition wäre weg. */
  window.addEventListener("dragover", function (ev) { ev.preventDefault(); });
  window.addEventListener("drop", function (ev) {
    ev.preventDefault();
    setDropTarget(false);
  });

  /* Einfügen kennt keine Zeigerposition — also in die Mitte der Fläche. */
  document.addEventListener("paste", function (ev) {
    var data = ev.clipboardData;
    if (!data) return;

    /* Steht der Cursor in einer Sprechblase, ist Einfügen eine Textsache —
       kein Bild auf die Fläche. Wir setzen den Text selbst ein, damit weder
       Formatierung noch ein Bild hineinrutschen kann; das hängt dann nicht
       davon ab, wie gut ein Browser plaintext-only umsetzt. */
    var active = document.activeElement;
    if (active && active.classList && active.classList.contains("bubble")) {
      ev.preventDefault();
      var plain = data.getData("text/plain");
      if (plain) {
        // execCommand ist abgekündigt, aber überall vorhanden und setzt den
        // Text an der Cursorposition ein, inklusive Rückgängig-Verlauf.
        document.execCommand("insertText", false, plain);
      }
      return;
    }

    var files = [];
    var items = data.items || [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].kind === "file" && String(items[i].type).indexOf("image/") === 0) {
        var file = items[i].getAsFile();
        if (file) files.push(file);
      }
    }
    if (!files.length && data.files && data.files.length) {
      files = Array.prototype.slice.call(data.files);
    }
    if (!files.length) return;

    ev.preventDefault();
    var center = viewportCenterContent();
    importImageFiles(files, center.x, center.y);
  });

  /* ------------------------------- Fläche ------------------------------ */

  /* Scharf gestelltes Symbol: ein Klick setzt es wie gehabt an einer Stelle
     ab; Klicken und Ziehen zieht stattdessen einen Bereich auf, der einen
     Rand + eine durchscheinende Füllung in der Symbolfarbe bekommt und sofort
     eine verknüpfte, vorausgefüllte Sprechblase daneben öffnet — wie in
     einem Bildbearbeitungsprogramm eine Auswahl aufziehen. Die Sprechblase
     selbst kennt kein Aufziehen und behält ihr bisheriges Sofort-Platzieren.

     Kein genereller Ausschluss für Klicks auf ein .placed-Element mehr: ein
     noch nicht ausgewähltes Element lässt sein pointerdown jetzt bewusst
     durchlaufen (siehe onPlacedDown()), sonst würde z. B. ein eingefügter
     Screenshot, der die Fläche ausfüllt, jedes Platzieren oder Schwenken
     blockieren. Nur bereits ausgewählte Elemente und der ×-Knopf stoppen
     die Ausbreitung selbst, an der Quelle. */
  canvasEl.addEventListener("pointerdown", function (ev) {
    if (ev.button !== undefined && ev.button !== 0) return;

    if (!armed) {
      select(null);

      /* Leere Fläche, nichts scharf gestellt: Klicken und halten schwenkt
         die Ansicht — dieselbe Ziehschwelle wie beim Bereich-Aufziehen
         unten, damit ein bloßer Klick weiterhin nur abwählt. Bewusst KEIN
         preventDefault() hier: eine Sprechblase verlässt den Schreibmodus
         einzig über ihr blur-Ereignis (wireBubble()), das an das native
         Fokus-Verhalten von pointerdown hängt — preventDefault() würde das
         stillschweigend verhindern. */
      var panStart = { x: ev.clientX, y: ev.clientY };
      var panOriginX = viewPanX;
      var panOriginY = viewPanY;
      var panning = false;

      /* Erst beim tatsächlichen Schwenken einfangen, nicht schon hier: ein
         sofortiges setPointerCapture() auf jedem Pointerdown — auch bei
         einem bloßen Klick oder den zwei kurzen Klicks eines Doppelklicks —
         lässt Browser das daraus abgeleitete click-/dblclick-Ereignis auf
         die Fläche statt auf das eigentlich angeklickte Element umlenken.
         Damit käme der Doppelklick zum Auswählen (siehe createNode()) nie
         beim Element an. */
      function onPanMove(moveEv) {
        var dx = moveEv.clientX - panStart.x;
        var dy = moveEv.clientY - panStart.y;
        if (!panning) {
          if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
          panning = true;
          canvasEl.classList.add("is-panning");
          capturePointer(canvasEl, ev.pointerId);
        }
        viewPanX = panOriginX + dx;
        viewPanY = panOriginY + dy;
        applyView();
      }

      function onPanUp(upEv) {
        window.removeEventListener("pointermove", onPanMove);
        window.removeEventListener("pointerup", onPanUp);
        window.removeEventListener("pointercancel", onPanUp);
        releasePointer(canvasEl, upEv.pointerId);
        canvasEl.classList.remove("is-panning");
      }

      window.addEventListener("pointermove", onPanMove);
      window.addEventListener("pointerup", onPanUp);
      window.addEventListener("pointercancel", onPanUp);
      return;
    }

    var entryId = armed;

    ev.preventDefault();

    var start = canvasPoint(ev);
    var dragging = false;
    var preview = null;

    capturePointer(canvasEl, ev.pointerId);

    function rectFrom(curX, curY) {
      var x1 = Math.min(start.x, curX), x2 = Math.max(start.x, curX);
      var y1 = Math.min(start.y, curY), y2 = Math.max(start.y, curY);
      return { x1: x1, y1: y1, w: x2 - x1, h: y2 - y1 };
    }

    function onMove(moveEv) {
      var p = canvasPoint(moveEv);
      if (!dragging) {
        if (Math.hypot(p.x - start.x, p.y - start.y) < DRAG_THRESHOLD) return;
        dragging = true;
        preview = document.createElement("div");
        preview.className = "region-preview icon-" + entryId;
        canvasContentEl.appendChild(preview);
      }
      var r = rectFrom(p.x, p.y);
      preview.style.left = r.x1 + "px";
      preview.style.top = r.y1 + "px";
      preview.style.width = r.w + "px";
      preview.style.height = r.h + "px";
    }

    function onUp(upEv) {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      releasePointer(canvasEl, upEv.pointerId);
      if (preview) preview.remove();
      disarm();

      if (upEv.type === "pointercancel") return;

      var p = canvasPoint(upEv);
      var r = rectFrom(p.x, p.y);

      if (!dragging || r.w < REGION_MIN || r.h < REGION_MIN) {
        // Klick statt Ziehen, oder zu klein zum Aufziehen: Punktsymbol wie bisher.
        placeFromPalette(entryId, start.x, start.y);
        return;
      }

      addRegionInstance(entryId, r.x1 + r.w / 2, r.y1 + r.h / 2, r.w, r.h);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  });

  /* Beim Verkleinern des Fensters sollen keine gerade sichtbaren Elemente
     außerhalb landen. Nur DESHALB neu begrenzen, nicht pauschal für jedes
     platzierte Element: seit Zoom/Pan ist "außerhalb der Fläche" ein
     gültiger Zustand für weggeschwenkte Elemente — die dürfen nicht allein
     durch eine Fenster-Größenänderung an ihrem anderen Ort zurück in die
     Ansicht springen (lastVisibleBounds von applyView() nachgeführt). */
  window.addEventListener("resize", function () {
    var before = lastVisibleBounds;
    placed.forEach(function (inst) {
      if (before && (inst.x < before.left || inst.x > before.right ||
                      inst.y < before.top  || inst.y > before.bottom)) {
        return;
      }
      setPosition(inst, inst.x, inst.y);
      applyPosition(inst);
    });
    lastVisibleBounds = visibleContentBounds();
  });

  /* ------------------------------ Tastatur ----------------------------- */

  document.addEventListener("keydown", function (ev) {
    var active = document.activeElement;
    var tag = active ? active.tagName : "";
    var typing = tag === "INPUT" || tag === "TEXTAREA" || (active && active.isContentEditable);

    /* Escape vor der Tipp-Prüfung: nur so kommt man aus dem Schreibmodus
       wieder heraus. */
    if (ev.key === "Escape") {
      if (typing && active.classList.contains("bubble")) {
        ev.preventDefault();
        active.blur();
        return;
      }
      disarm();
      select(null);
      return;
    }

    /* Beim Tippen gehören Rücktaste und Pfeiltasten dem Text. Ohne diese
       Sperre löschte Backspace die ganze Blase und die Pfeiltasten
       verschöben sie, statt den Cursor zu bewegen. */
    if (typing) return;

    /* Zoom ist eine Sicht-Aktion, keine Element-Aktion — sie braucht keine
       Auswahl und steht deshalb vor der Auswahl-Sperre unten. */
    if (ev.key === "+" || ev.key === "=") { ev.preventDefault(); stepZoom(ZOOM_KEY_STEP); return; }
    if (ev.key === "-") { ev.preventDefault(); stepZoom(1 / ZOOM_KEY_STEP); return; }
    if (ev.key === "0") { ev.preventDefault(); resetView(); return; }

    if (!selected) return;
    var inst = instanceById(selected);
    if (!inst) return;

    /* Verlässlicher Weg in den Schreibmodus — und der einzige ohne Zeigegerät.
       Der Doppelklick daneben ist bequemer, hängt aber davon ab, dass der
       Browser ihn nach preventDefault() auf pointerdown noch bildet; darauf
       sollte die einzige Möglichkeit nicht beruhen. Enter statt Klick auf die
       ausgewählte Blase, weil Letzteres sonst mit "auswählen, dann Entf"
       kollidiert. */
    if (ev.key === "Enter" && inst.kind === "text") {
      ev.preventDefault();
      startEditing(inst);
      return;
    }

    if (ev.key === "Delete" || ev.key === "Backspace") {
      ev.preventDefault();          // Backspace navigiert sonst zurück
      removeInstance(selected);
      return;
    }

    var step = ev.shiftKey ? NUDGE_FAST : NUDGE;
    var dx = 0;
    var dy = 0;
    if (ev.key === "ArrowLeft")  dx = -step;
    else if (ev.key === "ArrowRight") dx = step;
    else if (ev.key === "ArrowUp")    dy = -step;
    else if (ev.key === "ArrowDown")  dy = step;
    else return;

    ev.preventDefault();            // sonst scrollt die Seite
    setPosition(inst, inst.x + dx, inst.y + dy);
    applyPosition(inst);
  });

  /* -------------------------------- Start ------------------------------ */

  langBtns.forEach(function (btn) {
    btn.addEventListener("click", function () { setLanguage(btn.dataset.lang); });
  });

  shotOsEl.addEventListener("change", function () { setOs(shotOsEl.value); });

  // showModal()/close() sind native <dialog>-Methoden: Escape schließt, der
  // Fokus bleibt im Dialog und springt beim Schließen zurück auf helpBtn —
  // alles ohne eigenen Code dafür. Der Schließen-Knopf selbst braucht auch
  // keinen Listener (siehe index.html: method="dialog"-Formular).
  helpBtn.addEventListener("click", function () { helpDialog.showModal(); });

  buildPalette();
  lang = initialLanguage();
  os = initialOs();
  applyLanguage();       // füllt Symbol-Beschriftungen und den Aufnahme-Hinweis
  applyView();            // Zoom/Pan starten immer bei 100 % / 0,0 — nichts wird gemerkt
})();
