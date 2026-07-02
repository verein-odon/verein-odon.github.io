---
title: "England Kept Breaking Temperature Records in June 2026"
slug: "record-june-temperature-in-england"
date: 2026-07-01
summary: >
  May broke records in England — Central England's warmest May day in 254 years came on
  26 May 2026. But June was record-breaking by huge margins across many temperature records:
  daily mean, maximum, and minimum all rewrote the books in late June. Three interactive
  charts place that heatwave against every previous June in HadCET since 1772.
description: >
  May broke records in England — Central England's warmest May day in 254 years came on
  26 May 2026. But June was record-breaking by huge margins across many temperature records:
  daily mean, maximum, and minimum all rewrote the books in late June. Three interactive
  charts place that heatwave against every previous June in HadCET since 1772.
cover_image: /assets/data-stories/record-june-temperature-in-england/cover.png
cover_image_alt: "Scatter plot of daily mean June temperatures in Central England from 1772 to 2026, with 26 June 2026 marked as record high at 26.5°C"
thumbnail: /assets/data-stories/record-june-temperature-in-england/thumbnail.png
thumbnail_alt: "HadCET June daily mean temperatures scatter plot"
image:
  path: /assets/data-stories/record-june-temperature-in-england/cover.png
  alt: "Scatter plot of daily mean June temperatures in Central England from 1772 to 2026, with 26 June 2026 marked as record high"
authors:
  - name: "David Curran"
    linkedin: "https://www.linkedin.com/in/david-curran-8ba5534/"
type: "story"
topics:
  - "climate"
  - "environment"
tools:
  - "Python"
  - "JavaScript"
  - "D3.js"
data_sources:
  - name: "Met Office HadCET — daily mean temperature totals (Central England, 1772–present)"
    url: "https://www.metoffice.gov.uk/hadobs/hadcet/data/download.html"
    odmm_legal: "L4"
    odmm_legal_details: >
      Published under the Open Government Licence (OGL v3) — free reuse with attribution. L4.
    odmm_technical: "T4"
    odmm_technical_details: >
      Plain-text file (meantemp_daily_totals.txt) available at a stable direct URL with no
      registration required. Column format documented on the download page. T4.
embed:
  kind: "iframe"
  src: "/assets/data-stories/record-june-temperature-in-england/src/"
external_links:
  - label: "View the interactive chart"
    url: "/assets/data-stories/record-june-temperature-in-england/src/"
  - label: "May 2026 record analysis"
    url: "https://odon.at/en/data-stories/record-temperature-in-england/"
  - label: "HadCET data download"
    url: "https://www.metoffice.gov.uk/hadobs/hadcet/data/download.html"
featured: true
license: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
---

## Overview

[May broke records in England](https://odon.at/en/data-stories/record-temperature-in-england/) — on **26 May 2026**, Central England recorded its warmest May day in 254 years of HadCET measurement, a daily mean of **23.2°C**. Only three May days in that entire series have ever exceeded 21°C.

June was record-breaking by huge margins across many temperature records. Late in the month, a heatwave rewrote the books for daily **mean**, **maximum**, and **minimum** — often on consecutive days. On **26 June 2026**, HadCET recorded a daily mean of **26.5°C**, a daily maximum of **32.8°C**, and a daily minimum of **20.1°C** — each a new June record, the warmest June night beating the previous 1941 mark by **2.8°C**.

The interactive page shows three charts for every June day from 01 June 1772 through 30 June 2026.

## Methodology

Data was downloaded directly from the [Met Office HadCET dataset](https://www.metoffice.gov.uk/hadobs/hadcet/data/download.html). All June readings (days 1–30, years 1772–2026) were extracted for mean, min, and max series using Python. A LOESS smooth was fitted to annual June means for each measure. The interactive charts were built in JavaScript using D3.js, with Delaunay triangulation for nearest-point detection on hover and click.

## Findings

- **Daily mean:** All 4 June days above 24°C in 254 years were in June 2026 (23–26 June: 24.1, 24.3, 25.0, 26.5°C).
- **Daily maximum:** 4 of the 5 hottest June days on record were in June 2026; the series record is **26 June 2026 at 32.8°C**, exceeding the 1976 heatwave peak of 30.3°C.
- **Daily minimum:** The warmest June night on record was **26 June 2026 at 20.1°C** — **2.8°C** above the previous record from **22 June 1941** (17.3°C).
- The coldest recorded June daily mean in the series: **19 June 1795** at 7.3°C.

## Takeaways

When a 254-year open climate record is updated in near real time, an entire heatwave can be verified and contextualised as it happens — against every previous June day, across mean, max, and min. That is what HadCET and open data enable.
