(function () {
  const mapRoot = document.getElementById("map-root");
  const detailEmpty = document.getElementById("detail-empty");
  const detailContent = document.getElementById("detail-content");
  const detailIso = document.getElementById("detail-iso");
  const detailWord = document.getElementById("detail-word");
  const detailGroup = document.getElementById("detail-group");
  const detailSources = document.getElementById("detail-sources");
  const detailPanel = document.getElementById("detail-panel");
  const detailPanelTitle = document.getElementById("detail-panel-title");

  /** @type {Record<string, Record<string, string>>} */
  let byIso = {};

  const DEFAULT_EMPTY_HTML = "<p>Hover a country label on the map to load details.</p>";

  function showDetail(iso) {
    const row = byIso[iso];
    detailEmpty.hidden = !!row;
    detailContent.hidden = !row;

    if (!row) {
      // Defensive only: init() never wires up a label that has no row.
      detailPanelTitle.textContent = "Details";
      detailEmpty.textContent = "";
      const p = document.createElement("p");
      p.textContent = "No name has been recorded for this language yet.";
      detailEmpty.appendChild(p);
      return;
    }

    detailEmpty.innerHTML = DEFAULT_EMPTY_HTML;
    detailPanelTitle.textContent = "Details — " + row.lang;
    detailIso.textContent = row.iso;
    detailWord.textContent = row.word || "—";
    detailGroup.textContent = row.meaning_group || "—";

    detailSources.innerHTML = "";
    const urls = Array.isArray(row.sources) ? row.sources : [];
    if (urls.length === 0) {
      const li = document.createElement("li");
      li.textContent = row.sourceRaw ? "(no http(s) URL parsed) " + row.sourceRaw : "—";
      detailSources.appendChild(li);
    } else {
      for (const u of urls) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = u;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = u;
        li.appendChild(a);
        detailSources.appendChild(li);
      }
    }
  }

  function isoFromTarget(target) {
    const node = target && target.closest ? target.closest("text[data-iso][data-named]") : null;
    if (!node) return null;
    return node.getAttribute("data-iso");
  }

  function onMapHover(ev) {
    const iso = isoFromTarget(ev.target);
    if (iso) showDetail(iso);
  }

  function onMapFocusIn(ev) {
    const iso = isoFromTarget(ev.target);
    if (iso) showDetail(iso);
  }

  function labelGloss(row, iso) {
    if (!row) return iso;
    const raw = (row.mapLabel && row.mapLabel.trim()) || row.translation || iso;
    return raw.replace(/\\n/g, " ").replace(/\n/g, " ");
  }

  async function init() {
    detailPanel.setAttribute("aria-busy", "true");
    const [dataRes, svgRes] = await Promise.all([fetch("data.json"), fetch("map.svg")]);
    if (!dataRes.ok) throw new Error("data.json: " + dataRes.status);
    if (!svgRes.ok) throw new Error("map.svg: " + svgRes.status);
    const rows = await dataRes.json();
    byIso = Object.fromEntries(rows.map((r) => [r.iso, r]));
    const svgText = await svgRes.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
    const parserErr = svgDoc.querySelector("parsererror");
    if (parserErr) {
      throw new Error("SVG parse error: " + parserErr.textContent);
    }
    const svgRoot = svgDoc.documentElement;
    if (!svgRoot || svgRoot.localName !== "svg") {
      throw new Error("SVG parse error: no root <svg> element");
    }
    mapRoot.replaceChildren(document.importNode(svgRoot, true));
    const svg = mapRoot.querySelector("svg");
    if (svg) {
      svg.setAttribute("role", "img");
      svg.setAttribute(
        "aria-label",
        "Map of tic-tac-toe names and English glosses across European languages"
      );
    }

    // The base map carries a label slot for every European language, but not all of
    // them have a name recorded yet. Slots without a row render as empty text, so only
    // wire up the ones we can actually describe — otherwise they become invisible tab
    // stops. They light up on their own once their row is added to data.json.
    mapRoot.querySelectorAll("text[data-iso]").forEach((el) => {
      const iso = el.getAttribute("data-iso");
      const row = byIso[iso];
      if (!row) return;
      el.setAttribute("data-named", "");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", (row.lang ? row.lang + ", " : "") + labelGloss(row, iso));
    });

    mapRoot.addEventListener("mouseover", onMapHover);
    mapRoot.addEventListener("focusin", onMapFocusIn);
    mapRoot.addEventListener("click", (ev) => {
      const iso = isoFromTarget(ev.target);
      if (iso) showDetail(iso);
    });
    detailPanel.setAttribute("aria-busy", "false");
  }

  init().catch((err) => {
    console.error(err);
    mapRoot.innerHTML =
      "<p class=\"load-error\">The interactive map could not be loaded. Please try reloading the page.</p>";
  });
})();
