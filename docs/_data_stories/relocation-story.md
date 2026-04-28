---
title: "Relocation Is an Integration Problem"
slug: "relocation-story"
date: 2026-04-27
summary: >
  Original poll data and four NL-specific studies reveal that daily life integration
  and social belonging — not paperwork or housing — are the hardest parts of relocating.
  Using the Netherlands as a focal case, this story maps relocation as a five-phase UX
  journey and shows where design exists and where it stops.
description: >
  Original poll data and four NL-specific studies reveal that daily life integration
  and social belonging — not paperwork or housing — are the hardest parts of relocating.
  Using the Netherlands as a focal case, this story maps relocation as a five-phase UX
  journey and shows where design exists and where it stops.
cover_image: /assets/data-stories/relocation-story/thumbnail.png
cover_image_alt: "Visual journey map of the five phases of relocation, highlighting the integration gap"
thumbnail: /assets/data-stories/relocation-story/thumbnail.png
thumbnail_alt: "Relocation story thumbnail"
image:
  path: /assets/data-stories/relocation-story/thumbnail.png
  alt: "Visual journey map of the five phases of relocation, highlighting the integration gap"
authors:
  - name: "Samreen Khan"
    role: ""
type: "story"
topics:
  - "migration"
  - "social"
  - "housing"
tools:
  - "Python"
  - "HTML"
data_sources:
  - name: "LinkedIn poll data — Samreen Khan (primary research, April 2026)"
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7446503442971353088/"
    odmm_legal: "L1"
    odmm_legal_details: >
      Shared publicly on LinkedIn with no restrictions — L1.
    odmm_technical: "T1"
    odmm_technical_details: >
      Unstructured poll responses requiring manual collection and structuring — T1.
  - name: "CBS Statistics Netherlands — Loneliness by personal characteristics, incl. migration background (2023)"
    url: "https://www.cbs.nl/nl-nl/cijfers/detail/85766NED"
    odmm_legal: "L4"
    odmm_legal_details: >
      Published under CC BY 4.0 — L4.
    odmm_technical: "T4"
    odmm_technical_details: >
      Structured tabular data via CBS StatLine with direct download and full documentation — T4.
embed:
  kind: "iframe"
  src: "/assets/data-stories/relocation-story/src/"
external_links:
  - label: "View the interactive story"
    url: "/assets/data-stories/relocation-story/src/"
featured: true
---

## Overview

This data story challenges the assumption that paperwork and housing are the hardest parts of relocating. Original poll data and four NL-specific studies point consistently to daily life integration and social belonging as the real gap — the part of the relocation journey that remains largely undesigned.

The Netherlands serves as the focal case: a country that excels on work opportunities and infrastructure, yet ranks 44th of 53 in ease of making friends (InterNations Expat Insider 2024). The story frames this as a UX failure, mapping relocation as a five-phase journey to show where design exists and where it stops.

## Methodology

Three LinkedIn polls (n=17, global, April 2026) were conducted as indicative primary research — hypothesis-generating rather than statistically representative. Results were cross-validated against four NL-specific studies: CBS Statistics Netherlands (2023), InterNations Expat Insider 2024 (n=12,000+), Eurostat EU-SILC (2024), and ABF Research (2025).

Relocation was mapped as a five-phase UX journey; design coverage was assessed at each phase to identify where support systems exist and where they are absent. Visualisations were built using Python (Pillow) and published as a self-contained responsive HTML page.

## Findings

- **64%** of poll respondents named daily life and social setup as the hardest part of relocating — ahead of housing (23%), paperwork (5%), and finances (5%).
- In the Netherlands, **50% of expats struggle to make local friends** versus 36% globally; **20% feel very lonely** versus 9% of Dutch nationals — despite similar rates of social contact.
- Only **11% of expats have predominantly Dutch friends** after years of residence; **43% socialise exclusively with other expats**.
- Non-EU citizens face housing cost overburden at **18.8% versus 7.6% for Dutch nationals** — one of Europe's largest gaps (Eurostat 2024).

## Takeaways

Relocation is an integration problem, not a process problem. Systems address arrival well; the transition to belonging remains largely undesigned.

The Netherlands data reveals a structural gap, not a personal failure: migrants have frequent social contact yet rarely achieve depth of connection with locals. Open datasets on migration, loneliness, and urban services offer material for stories that go beyond logistics into lived experience. The gap is clear — and that makes it designable.

## References

- InterNations Expat Insider 2024 — global expat survey, n=12,000+
- Eurostat EU-SILC 2024 — housing cost overburden by migrant status
- ABF Research 2025 — housing market analysis, Netherlands
