---
title: "A May Record 250 Years in the Making"
slug: "record-temperature-in-england"
date: 2026-05-27
summary: >
  On 26 May 2026, Central England recorded its highest daily mean temperature for any May day
  in 254 years of measurement. This interactive chart places that 23.2°C reading against all
  7,900 May days in the HadCET series since 1772.
description: >
  On 26 May 2026, Central England recorded its highest daily mean temperature for any May day
  in 254 years of measurement. This interactive chart places that 23.2°C reading against all
  7,900 May days in the HadCET series since 1772.
cover_image: /assets/data-stories/record-temperature-in-england/cover.png
cover_image_alt: "Scatter plot of daily mean May temperatures in Central England from 1772 to 2026, with 26 May 2026 marked as record high at 23.2°C"
thumbnail: /assets/data-stories/record-temperature-in-england/thumbnail.png
thumbnail_alt: "HadCET May daily mean temperatures scatter plot — record 26 May 2026"
image:
  path: /assets/data-stories/record-temperature-in-england/cover.png
  alt: "Scatter plot of daily mean May temperatures in Central England from 1772 to 2026"
authors:
  - name: "David Curran"
    role: ""
type: "story"
topics:
  - "climate"
  - "environment"
  - "open-data"
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
  src: "/assets/data-stories/record-temperature-in-england/src/"
external_links:
  - label: "View the interactive chart"
    url: "/assets/data-stories/record-temperature-in-england/src/"
  - label: "HadCET data download"
    url: "https://www.metoffice.gov.uk/hadobs/hadcet/data/download.html"
featured: true
license: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
---

## Overview

On 26 May 2026, the Hadley Centre Central England Temperature (HadCET) series recorded a daily mean of 23.2°C — the highest ever measured for any May day in a dataset spanning 254 years. This chart places that reading in context: each dot represents one day in May, from 01 May 1772 to 26 May 2026. Only 3 of those 7,900 days have ever exceeded 21°C as a daily mean. The LOESS trend line traces the century-scale pattern across the full series.

## Methodology

Data was downloaded directly from the Met Office HadCET dataset (`meantemp_daily_totals.txt`), the longest instrumental temperature record in the world. All May readings (days 1–31, years 1772–2026) were extracted using Python. A LOESS smooth was fitted to the 7,900 data points to show the underlying trend. The interactive chart was built in JavaScript using D3.js, with Delaunay triangulation for efficient nearest-point detection on hover and click.

## Findings

- **26 May 2026**: 23.2°C — the warmest May day in 254 years of record.
- Only **3 of 7,900** May days since 1772 have exceeded 21°C as a daily mean.
- The coldest recorded May day in the series: **08 May 1861** at 3.0°C — a 20.2°C spread across the full record.
- The LOESS trend shows a modest but visible warming signal from around 1980 onward, consistent with the broader Central England temperature trend.

## Takeaways

Open climate data — and especially a dataset spanning over two centuries — makes it possible to contextualise a single extreme reading immediately and precisely. The HadCET series is public, machine-readable, and updated in near real-time by the Met Office. A record like 26 May 2026 can be verified, contextualised, and published within hours of its occurrence. That is what open data enables.
