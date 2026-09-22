---
title: "What Europe Calls Tic-Tac-Toe"
slug: "tictactoe-europe-names"
date: 2026-09-21
# Held back: 31 language regions on the map carry a label slot but no name recorded yet
# (slk, mlt, sqi, mkd, bre, cor, ltz, fry, fao, sme, …). Remove `published: false` once the
# author supplies those rows for src/data.json and the matching labels in src/map.svg.
published: true
summary: >
  It is a game that we all played but who knew it had so many names?
description: >
  It is a game that we all played but who knew it had so many names?
  An interactive map of what European languages call tic-tac-toe, with English glosses
  grouped by meaning.
cover_image: /assets/data-stories/tictactoe-europe-names/cover.png
cover_image_alt: "Detail of a map of Europe in which each language region is labelled with the English meaning of its name for tic-tac-toe — 'fox and goose', 'Butter Cheese Eggs', 'three wins', 'drifter chess'"
thumbnail: /assets/data-stories/tictactoe-europe-names/thumbnail.png
thumbnail_alt: "European tic-tac-toe names map"
image:
  path: /assets/data-stories/tictactoe-europe-names/cover.png
  alt: "Map of Europe showing English glosses for tic-tac-toe names in each language region"
authors:
  - name: "David Curran"
    linkedin: "https://www.linkedin.com/in/david-curran-8ba5534/"
type: "story"
topics:
  - "language"
  - "culture"
  - "games"
tools:
  - "Python"
  - "JavaScript"
  - "SVG"
data_sources:
  - name: "Wiktionary — tic-tac-toe entries across languages"
    url: "https://en.wiktionary.org/wiki/tic-tac-toe"
    odmm_legal: "L4"
    odmm_legal_details: >
      CC BY-SA text, free to reuse with attribution. The single largest source here, supplying 11 of the 49 names. L4.
    odmm_technical: "T2"
    odmm_technical_details: >
      Dictionary entries as web pages. A machine-readable dump exists, but the names were
      read and transcribed by hand rather than parsed from it. T2.
  - name: "Wikipedia language editions (German, Basque, Croatian, Turkish, Bulgarian, Norwegian, English)"
    url: "https://en.wikipedia.org/wiki/Tic-tac-toe"
    odmm_legal: "L4"
    odmm_legal_details: "CC BY-SA text, free reuse with attribution. L4."
    odmm_technical: "T2"
    odmm_technical_details: >
      Encyclopaedic prose; the local name was transcribed by hand from each language
      edition. T2.
  - name: "Dictionary of the Scots Language (DSL)"
    url: "https://www.dsl.ac.uk/"
    odmm_legal: "L2"
    odmm_legal_details: >
      Free to consult online; copyright held by Scottish Language Dictionaries, with no open
      licence for reuse. Source of five regional Scots variants. L2.
    odmm_technical: "T2"
    odmm_technical_details: "Searchable web entries (HTML); no structured download offered. T2."
  - name: "Glosbe multilingual dictionary"
    url: "https://glosbe.com/"
    odmm_legal: "L2"
    odmm_legal_details: >
      Proprietary aggregator. Readable without charge, but the compiled entries carry no
      open licence. Five names. L2.
    odmm_technical: "T2"
    odmm_technical_details: "Web entries only; the public API is not open-licensed. T2."
  - name: "Cambridge Dictionary"
    url: "https://dictionary.cambridge.org/"
    odmm_legal: "L2"
    odmm_legal_details: >
      Cambridge University Press, all rights reserved. Free to read, not licensed for
      reuse. L2.
    odmm_technical: "T2"
    odmm_technical_details: "Web entries (HTML); no structured download. T2."
  - name: "National and reference dictionaries (Foclóir.ie, Collins, CNRTL, WordReference, dict.cc, DictZone, OpenRussian)"
    url: "https://www.focloir.ie/en/dictionary/ei/tic-tac-toe"
    odmm_legal: "L2"
    odmm_legal_details: >
      Each is free to consult and each reserves its rights; none carries an open licence.
      Used for one or two names apiece. L2.
    odmm_technical: "T2"
    odmm_technical_details: "Web entries (HTML); transcribed by hand. T2."
  - name: "Usage attestations — game sites, app listings and regional culture pages"
    url: "https://www.occitan-aveyron.fr/"
    odmm_legal: "L1"
    odmm_legal_details: >
      Commercial and community pages (app-store listings, itch.io, regional game and
      culture sites) with no licence statement at all. Cited as evidence that a name is
      used, not as lexicographic authority. L1.
    odmm_technical: "T1"
    odmm_technical_details: >
      Unstructured web pages, some of them storefront listings; no metadata, no download,
      and no guarantee of permanence. T1.
embed:
  kind: "iframe"
  src: "/assets/data-stories/tictactoe-europe-names/src/"
external_links:
  - label: "View the interactive map"
    url: "/assets/data-stories/tictactoe-europe-names/src/"
  - label: "Wikimedia Commons — Simplified Languages of Europe map.svg"
    url: "https://commons.wikimedia.org/wiki/File:Simplified_Languages_of_Europe_map.svg"
featured: true
license: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
---

## Overview

It is a game that we all played but who knew it had so many names?

This interactive map shows what European languages call tic-tac-toe — sometimes a plain
description of the game, sometimes an old metaphor, and sometimes just the sounds children
chant while they play. Hover or tab to any label to see the name in its own language, the
meaning group it falls into, and the sources it came from.

## Methodology

The names were compiled by hand into a single sourced table, one row per language or regional
variant. Each row records the language, the name as it is written locally, an English gloss,
a meaning group, and its citations; that table ships with the map as `data.json`, so every
label on the map can be traced back to where it came from. Most rows rest on dictionaries and
lexicographic databases. A handful of regional names are attested only by game sites or
app listings — those are marked in the sources and should be read as weaker evidence.

The base map is a derivative of the public-domain *Simplified Languages of Europe map* from
Wikimedia Commons. The original language-region outlines are kept and each region's label is
replaced with the English gloss of its tic-tac-toe name, with colour encoding the meaning
group. The interactive view is static HTML and JavaScript reading that same `data.json`.

French *morpion* is also the name of a different pencil game
([join five](https://en.wikipedia.org/wiki/Join_five), or *morpion solitaire*); this map
follows everyday use for tic-tac-toe.

Two caveats are worth stating plainly. Sorting names into meaning groups is a judgement call,
not a property of the data — *luffarschack* is grouped as a chess metaphor, but a case could
be made for reading it as a joke about vagrancy. And in several countries the game people
actually play is a five-in-a-row variant whose name carries over when it is played on a 3×3
grid, so some labels name the family of games rather than the 3×3 grid specifically.

## Findings

- **Three-in-a-row** is widespread (Spanish *tres en raya*, German *Drei gewinnt*, Italian *tris*); German also uses *Kreis und Kreuz* (circle and cross).
- **Chess metaphors** appear in several Germanic languages (Swedish *luffarschack*, Bavarian *Dodelschach*).
- **Animal and food names** turn up too (Irish *an madra rua agus an ghé*, Dutch *boter, kaas en eieren*).
- Regional variants are noted in the dataset where sources support them (e.g. Occitan *arrengats*, Orkney Scots *trip-trap-truisky*).
- The map is **not yet complete**. Thirty-one language regions carry an outline but no name
  recorded yet — among them Slovak, Maltese, Albanian, Macedonian, Breton, Cornish,
  Luxembourgish, West Frisian, Faroese and Northern Sami. They are left blank rather than
  guessed at.

## Takeaways

A childhood grid game turns out to be a compact map of how languages name the same thing
differently.

## References

- Wikimedia Commons: [Simplified Languages of Europe map.svg](https://commons.wikimedia.org/wiki/File:Simplified_Languages_of_Europe_map.svg)
- [Foclóir.ie — tic-tac-toe (Irish)](https://www.focloir.ie/en/dictionary/ei/tic-tac-toe)
- [Cambridge Dictionary — morpion (French)](https://dictionary.cambridge.org/dictionary/french-english/morpion)
- [Join five](https://en.wikipedia.org/wiki/Join_five) (also *morpion solitaire*)
- [Wiktionary — tic-tac-toe](https://en.wiktionary.org/wiki/tic-tac-toe)
- [Dictionary of the Scots Language](https://www.dsl.ac.uk/)
