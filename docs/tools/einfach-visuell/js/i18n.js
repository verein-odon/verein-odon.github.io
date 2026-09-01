/* =========================================================================
   i18n.js — all user-facing text, in one place per language.

   Exposes: LANGUAGES, LANG_FALLBACK, LANG_STORAGE_KEY, STRINGS

   Adding a language means adding one key to STRINGS with the same set of
   entries and listing it in LANGUAGES — no logic changes anywhere else.
   Die Symbol-Beschriftungen liegen bewusst NICHT hier, sondern beim Symbol
   in js/icons.js: so bleibt das Symbol-Set eine einzige austauschbare Datei.

   Platzhalter in geschweiften Klammern werden von format() in app.js
   ersetzt: {label} = Name des Symbols, {n} = Anzahl der Elemente.

   Werte mit dem Suffix "Html" werden als HTML eingesetzt (sie enthalten
   Links); alles andere wird als reiner Text gesetzt.
   ========================================================================= */

var LANGUAGES = ["de", "en"];
var LANG_FALLBACK = "de";
var LANG_STORAGE_KEY = "einfach-visuell.lang";

/* Systeme für den Aufnahme-Hinweis. Jeder Code braucht in STRINGS ein
   shotTip<Code> und ein os<Code> (jeweils groß geschrieben) und eine <option>
   in index.html. Reihenfolge = Reihenfolge im Auswahlfeld. */
var OS_CODES = ["mac", "win", "linux", "other"];
var OS_STORAGE_KEY = "einfach-visuell.os";

var STRINGS = {

  de: {
    docTitle:        "einfach visuell — zeigen statt beschreiben",
    langSwitchLabel: "Sprache wählen",
    langSwitched:    "Sprache auf Deutsch umgestellt.",

    paletteHeading:  "Symbole",
    canvasLabel:     "Arbeitsfläche",

    /* Die gesamte Bedienungshilfe, gesammelt im #help-dialog statt verteilt
       auf der Fläche/Werkzeugleiste — erreichbar über den Hilfe-Knopf im
       Kopf. Die Schlüssel shotTip… und os… weiter unten gehören ebenfalls
       dazu (siehe index.html). */
    helpButton:      "Hilfe",
    helpTitle:       "Hilfe",
    helpIntro:       "Zeig es, statt es zu beschreiben.",

    helpHowTitle:    "So funktioniert's",
    helpStep1Title:  "Ausschnitt aufnehmen",
    helpStep1Text:   "Nimm einen Bildschirmausschnitt von dem auf, worüber du sprichst.",
    helpStep2Title:  "Einfügen & markieren",
    helpStep2Text:   "Füge ihn ein und ziehe Symbole darauf, um zu zeigen, was du meinst.",
    helpStep3Title:  "Ergebnis aufnehmen",
    helpStep3Text:   "Nimm die Fläche auf demselben Weg auf — fertig zum Teilen.",

    helpBriefTitle:  "Kurz notiert",
    helpBriefPlace:  "Ziehen platziert ein Symbol",
    helpBriefArea:   "Aufziehen markiert einen Bereich",
    helpBriefMove:   "Griff beim Überfahren verschiebt, × entfernt",
    helpBriefView:   "Mausrad zoomt, Ziehen schwenkt",

    helpClose:       "Schließen",

    /* Bildausschnitt aufnehmen erledigt das Betriebssystem, nicht diese Seite.
       Voreingestellt ist das erkannte System; die Erkennung ist aber nicht
       verlässlich, deshalb lässt sich jedes System von Hand wählen (app.js).
       Bewusst ohne "Fertig?"-Rahmung: dieselbe Tastenkombination gilt für
       Schritt 1 UND 3 oben, nicht nur für den Abschluss. */
    shotTipMac:      "Bildschirmausschnitt: ⌘⇧4 — mit ⌘⌃⇧4 direkt in die Zwischenablage.",
    shotTipWin:      "Bildschirmausschnitt: Windows+Umschalt+S — landet in der Zwischenablage.",
    shotTipLinux:    "Bildschirmausschnitt: Umschalt+Druck (GNOME) oder Druck (KDE, Spectacle).",
    shotTipOther:    "Bildschirmausschnitt: die Ausschnitt-Funktion deines Systems.",

    osSelectLabel:   "System für den Hinweis wählen",
    osMac:           "macOS",
    osWin:           "Windows",
    osLinux:         "Linux",
    osOther:         "anderes System",
    osSwitched:      "Hinweis für {os} angezeigt.",

    paletteItemTitle: "{label} auf die Fläche ziehen oder antippen",
    placedLabel:      "{label} — verschieben mit den Pfeiltasten, entfernen mit Entf",
    placedRegionLabel: "{label}-Bereich — verschieben mit den Pfeiltasten, Entf entfernt Bereich und Kommentar",
    placedDelLabel:   "{label} entfernen",
    placedGrabLabel:  "{label} verschieben",
    elementFallback:  "Element",
    imageLabel:       "Bild",
    textLabel:        "Sprechblase",
    textPlaceholder:  "Text eingeben …",
    dropHint:         "Bild hier ablegen",

    statusArmed:       "{label} ausgewählt. Jetzt auf die Fläche klicken oder einen Bereich aufziehen.",
    statusPlaced:      "{label} platziert. {n} Elemente auf der Fläche.",
    statusRegionPlaced: "{label}-Bereich markiert — Kommentar eingeben oder Escape zum Beenden.",
    statusRemoved:     "{label} entfernt. {n} Elemente auf der Fläche.",
    statusImageBad:  "Das ist keine Bilddatei — übersprungen.",
    statusImageBig:  "Das Bild ist zu groß (über {mb} MB) — übersprungen.",
    statusImageFail: "Das Bild konnte nicht gelesen werden.",

    zoomControlLabel: "Ansicht",
    zoomOutLabel:     "Verkleinern",
    zoomInLabel:      "Vergrößern",
    zoomResetLabel:   "Ansicht zurücksetzen",
    statusViewReset:  "Ansicht zurückgesetzt.",

    footerAboutHtml: 'Ein Werkzeug von <a href="https://odon.at" target="_blank" rel="noopener noreferrer">' +
                     'ODON – Offene Daten für Offene Nutzung</a>. Nichts verlässt den Browser: ' +
                     'keine Konten, keine Server, keine Speicherung.',
    footerLinksHtml: '<a href="https://github.com/odon-at/einfach-visuell/" target="_blank" rel="noopener noreferrer">Quellcode</a> · ' +
                     '<a href="mailto:info@odon.at">info@odon.at</a> · ' +
                     '<a href="https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12" target="_blank" rel="noopener noreferrer">EUPL-1.2</a>'
  },

  en: {
    docTitle:        "einfach visuell — show it, don't describe it",
    langSwitchLabel: "Choose language",
    langSwitched:    "Language switched to English.",

    paletteHeading:  "Icons",
    canvasLabel:     "Work surface",

    helpButton:      "Help",
    helpTitle:       "Help",
    helpIntro:       "Show it, don't describe it.",

    helpHowTitle:    "How it works",
    helpStep1Title:  "Capture a region",
    helpStep1Text:   "Take a screen capture of whatever you're giving feedback on.",
    helpStep2Title:  "Paste & mark it up",
    helpStep2Text:   "Paste it in and drag icons onto it to show what you mean.",
    helpStep3Title:  "Capture the result",
    helpStep3Text:   "Capture the surface the same way — ready to share.",

    helpBriefTitle:  "In brief",
    helpBriefPlace:  "Drag to place an icon",
    helpBriefArea:   "Drag out a box to mark an area",
    helpBriefMove:   "Handle on hover moves it, × removes it",
    helpBriefView:   "Scroll to zoom, drag to pan",

    helpClose:       "Close",

    /* Capturing a region is the operating system's job, not this page's.
       It defaults to the detected system, but detection is not reliable, so
       every system can be picked by hand (see app.js). Deliberately not
       framed as "Done?": the same shortcut is used for step 1 AND 3 above,
       not just at the end. */
    shotTipMac:      "Screen capture: ⌘⇧4 — or ⌘⌃⇧4 straight to the clipboard.",
    shotTipWin:      "Screen capture: Windows+Shift+S — it lands on the clipboard.",
    shotTipLinux:    "Screen capture: Shift+PrtScn (GNOME) or PrtScn (KDE, Spectacle).",
    shotTipOther:    "Screen capture: your system's region capture tool.",

    osSelectLabel:   "Choose the system for this hint",
    osMac:           "macOS",
    osWin:           "Windows",
    osLinux:         "Linux",
    osOther:         "other system",
    osSwitched:      "Showing the hint for {os}.",

    paletteItemTitle: "Drag or tap {label} to place it",
    placedLabel:      "{label} — move with the arrow keys, remove with Delete",
    placedRegionLabel: "{label} area — move with the arrow keys, Delete removes the area and its comment",
    placedDelLabel:   "Remove {label}",
    placedGrabLabel:  "Move {label}",
    elementFallback:  "Element",
    imageLabel:       "Image",
    textLabel:        "Speech bubble",
    textPlaceholder:  "Type text …",
    dropHint:         "Drop image here",

    statusArmed:       "{label} selected. Click the surface, or drag to mark an area.",
    statusPlaced:      "{label} placed. {n} elements on the surface.",
    statusRegionPlaced: "{label} area marked — type a comment or press Escape to finish.",
    statusRemoved:     "{label} removed. {n} elements on the surface.",
    statusImageBad:  "That is not an image file — skipped.",
    statusImageBig:  "That image is too large (over {mb} MB) — skipped.",
    statusImageFail: "The image could not be read.",

    zoomControlLabel: "View",
    zoomOutLabel:     "Zoom out",
    zoomInLabel:      "Zoom in",
    zoomResetLabel:   "Reset view",
    statusViewReset:  "View reset.",

    footerAboutHtml: 'A tool by <a href="https://odon.at" target="_blank" rel="noopener noreferrer">' +
                     'ODON – Offene Daten für Offene Nutzung</a>. Nothing leaves your browser: ' +
                     'no accounts, no servers, no storage.',
    footerLinksHtml: '<a href="https://github.com/odon-at/einfach-visuell/" target="_blank" rel="noopener noreferrer">Source code</a> · ' +
                     '<a href="mailto:info@odon.at">info@odon.at</a> · ' +
                     '<a href="https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12" target="_blank" rel="noopener noreferrer">EUPL-1.2</a>'
  }

};
