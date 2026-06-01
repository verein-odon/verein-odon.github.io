---
title: "Blaming the Neighbours: what Europe called Syphilis"
slug: "what-europe-called-syphilis"
date: 2026-06-01
summary: >
  When syphilis swept Europe after the 1495 Naples outbreak, no nation would own it — each
  named the disease after a neighbour or enemy. This interactive map traces who blamed whom,
  with every arrow coloured by the name a population actually used.
description: >
  When syphilis swept Europe after the 1495 Naples outbreak, no nation would own it — each
  named the disease after a neighbour or enemy. This interactive map traces who blamed whom,
  with every arrow coloured by the name a population actually used.
cover_image: /assets/data-stories/what-europe-called-syphilis/cover.png
cover_image_alt: "Map of Europe with curved arrows pointing from each country to the nation it blamed for syphilis, coloured by the name used"
thumbnail: /assets/data-stories/what-europe-called-syphilis/thumbnail.png
thumbnail_alt: "Arrow map of European syphilis blame-names"
image:
  path: /assets/data-stories/what-europe-called-syphilis/cover.png
  alt: "Map of Europe with curved arrows showing which country each nation blamed for syphilis"
authors:
  - name: "David Curran"
    linkedin: "https://www.linkedin.com/in/david-curran-8ba5534/"
type: "story"
topics:
  - "medicine"
  - "history"
tools:
  - name: "TopoJSON (Natural Earth)"
    url: "https://github.com/topojson/world-atlas"
  - "JavaScript"
  - "D3.js"
data_sources:
  - name: "Tampa et al., 'Brief History of Syphilis', J Med Life (2014)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3956094/"
    odmm_legal: "L4"
    odmm_legal_details: >
      Open-access peer-reviewed article (PMC). Free to read and quote with attribution. L4.
    odmm_technical: "T2"
    odmm_technical_details: >
      Narrative prose; the naming relationships were transcribed by hand into a structured
      table rather than parsed from a machine-readable file. T2.
  - name: "Wikipedia / Wiktionary, 'History of syphilis' & 'syphilis'"
    url: "https://en.wikipedia.org/wiki/History_of_syphilis"
    odmm_legal: "L4"
    odmm_legal_details: "CC BY-SA text, free reuse with attribution. L4."
    odmm_technical: "T2"
    odmm_technical_details: "Encyclopaedic prose; relationships transcribed by hand. T2."
  - name: "JMVH, 'Syphilis – Its early history and Treatment until Penicillin'"
    url: "https://jmvh.org/article/syphilis-its-early-history-and-treatment-until-penicillin-and-the-debate-on-its-origins/"
    odmm_legal: "L4"
    odmm_legal_details: >
      Published under Creative Commons Attribution 4.0 International (CC BY 4.0) — free reuse with attribution. L4.
    odmm_technical: "T2"
    odmm_technical_details: >
      Available as a web article (HTML); no structured or machine-readable download provided. T2.
  - name: "History Today, 'Pox and Paranoia in Renaissance Europe' (Cummins, 1988)"
    url: "https://www.historytoday.com/archive/pox-and-paranoia-renaissance-europe"
    odmm_legal: "L2"
    odmm_legal_details: >
      Published in a commercial magazine (1988). Copyright has not expired (UK/EU: life + 70 years).
      No open licence stated; article is readable on the website but not licensed for reuse. L2.
    odmm_technical: "T2"
    odmm_technical_details: >
      Available as a web article (HTML); no structured or machine-readable download provided. T2.
  - name: "Surgeons' Hall Museums, 'The attempt to exile syphilis sufferers to an island near Edinburgh'"
    url: "https://surgeonshallmuseums.wordpress.com/2026/02/13/the-attempt-to-exile-syphilis-sufferers-to-an-island-near-edinburgh/"
    odmm_legal: "L2"
    odmm_legal_details: >
      Museum blog post. No open licence stated; copyright held by the institution. Readable online but not licensed for reuse. L2.
    odmm_technical: "T1"
    odmm_technical_details: >
      Informal blog post (WordPress); no structured format, metadata, or download available. T1.
  - name: "Vesmír, 'Syfilis v Čechách' (1996)"
    url: "https://vesmir.cz/cz/casopis/archiv-casopisu/1996/cislo-2/syfilis-cechach.html"
    odmm_legal: "L2"
    odmm_legal_details: >
      Published in a Czech scientific magazine (1996). Copyright has not expired; no open licence stated.
      Article is readable in the online archive but not licensed for reuse. L2.
    odmm_technical: "T2"
    odmm_technical_details: >
      Available as a web article (HTML) in the magazine's online archive; no structured download provided. T2.
embed:
  kind: "iframe"
  src: "/assets/data-stories/what-europe-called-syphilis/src/"
external_links:
  - label: "View the interactive map"
    url: "/assets/data-stories/what-europe-called-syphilis/src/"
  - label: "Brief History of Syphilis (PMC)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3956094/"
featured: false
license: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
---

## Overview

The first recorded European outbreak of syphilis struck Naples in 1495, among the army of Charles VIII of France. From that moment the disease became a diplomatic weapon: no population would admit it had started at home, so each named it after a neighbour, a rival, or an invading army. The result is a near-complete map of early-modern European grudges. This interactive map draws an arrow from every population to the country it blamed, with the arrow's colour encoding the *name* they used — so "the French disease" (used by a dozen nations) reads as a single colour fanning in toward France.

## Methodology

The naming relationships were compiled by hand from medical-history and lexicographic sources (listed below) into a single sourced table, then encoded as a directed graph. Each edge stores the blamer, the blamed party, the exact name used (with the vernacular term), and a citation. The map is built in JavaScript with D3.js: countries are placed at real `[lon, lat]` anchors on a Mercator projection over a Natural Earth basemap (world-atlas TopoJSON), and blame is drawn as quadratic-bézier arrows whose curvature uses a fixed handedness — so reciprocal pairs (France ↔ Italy, France ↔ Spain) bow to opposite sides instead of overlapping. Clicking a legend colour isolates one name. The data table beneath the map is generated from the same edge data.

## Findings

- **"The French disease" dominates** — Italy, Germany, England, Ireland, Spain, Sweden, Poland, Malta, Croatia, Bohemia, Portugal and Scotland all blamed France.
- **Blame was reciprocal** — France pointed back at Naples ("Neapolitan disease") and also at Spain ("Spanish disease").
- **Poland blamed three ways** — Germany, France, and (per several sources) the Ottoman Turks.
- **Croatia blamed itself** — the *Škrljevo* and *Župa* diseases are named after Croatian places, not a foreign country.
- **No intra-Nordic blame** is recorded, and the Baltics coined no distinct name of their own.
- Contested or omitted: the French "British disease" (a likely misattribution) and the Irish *gallbholgach* ("foreign pox," we Irish seem to have missed an opportunity to blame this on the English).

- The data table also has some non European blame someone else examples. 

## Takeaways

The naming of syphilis is a centuries-old case study in how societies displace blame for a stigmatised threat onto outsiders.  The same impulse to name a disease after "them" recurs in later epidemics.

