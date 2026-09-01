/* =========================================================================
   icons.js — the icon set, as pure configuration.

   THIS IS THE ONLY FILE YOU NEED TO TOUCH TO CHANGE THE ICONS.
   Menu and placement are generated from ICONS; no logic anywhere else knows
   what an icon depicts.

   Exposes: ICONS, ICON_VIEWBOX, ICON_STROKE_WIDTH, ICON_HALO_WIDTH

   Each entry:
     id     unique, stable key (used in the in-memory model and as a CSS hook:
            the rendered <svg> gets the class "icon-<id>", which is how the
            coloured exception ("dislike") is styled — see css/style.css)
     label  caption per language — one entry per code in LANGUAGES (i18n.js)
     svg    the INNER markup of a 24x24 icon — no <svg> wrapper

   The markup deliberately carries NO color, stroke-width or fill attributes.
   Those are applied once by the caller via CSS, so restyling the set means
   editing two stylesheet rules instead of every icon.

   Warum inline-Markup statt einzelner .svg-Dateien: separate Dateien lassen
   sich unter file:// nicht per fetch() laden (CORS) — beim Doppelklick auf
   index.html bliebe das Menü leer.

   Auf zwei Symbole verkürzt: das sind die einzigen, die in der Praxis
   benutzt wurden. Ein Kommentar zu einer Stelle braucht kein eigenes
   "Text"-Symbol: jedes Symbol lässt sich als Bereich aufziehen, was
   automatisch eine verknüpfte Sprechblase anlegt (addRegionInstance() in
   app.js).
   ========================================================================= */

var ICON_VIEWBOX = "0 0 24 24";
var ICON_STROKE_WIDTH = 1.7;

/* Jedes Symbol wird zweimal gezeichnet: zuerst dick in Schwarz (die Kontur),
   darüber dünn in Farbe. Nur so bekommt eine Strichzeichnung einen Rand —
   paint-order hilft nicht, weil die Symbole keine Füllung haben. Die Kontur
   ist der Grund, dass die Symbole auf JEDEM Screenshot lesbar bleiben.

   Nebenwirkung, die beim Zeichnen zu beachten ist: zwei Striche, die weniger
   als etwa 4 Einheiten auseinanderliegen, verschmelzen in der Kontur zu einer
   schwarzen Fläche. Innenlinien deshalb bewusst weit auseinander legen. */
var ICON_HALO_WIDTH = ICON_STROKE_WIDTH + 1.5;

/* Daumen: einmal gezeichnet, für "gefällt mir nicht" senkrecht gespiegelt —
   so können die beiden nie auseinanderlaufen. Hand samt Faust-Klammer statt
   einer glatten Daumen-Silhouette (die frühere Fassung sah damit zu sehr
   nach dem Facebook-Logo aus): zwei getrennte, eckigere Formen, die trotzdem
   eindeutig als Daumen zu lesen sind. */
var THUMB =
  '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/>' +
  '<path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>';

var ICONS = [
  {
    id: "like",
    label: { de: "Gefällt mir", en: "I like it" },
    svg: THUMB
  },
  {
    id: "dislike",
    label: { de: "Gefällt mir nicht", en: "I don't like it" },
    svg: '<g transform="translate(0 24) scale(1 -1)">' + THUMB + '</g>'
  }
];
