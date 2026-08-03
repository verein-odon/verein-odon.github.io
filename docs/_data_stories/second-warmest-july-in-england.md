---
title: "England's Second-Warmest July in 255 Years"
slug: "second-warmest-july-in-england"
date: 2026-08-03
summary: >
  After a record-breaking June, July 2026 did not rewrite daily HadCET England extremes — but
  as a whole month it ranked second-warmest since 1772, behind only 2006. Three interactive
  charts place every July day against the full Central England series. Click around on them
  and see how temperatures have differed over time. One thing about this July is it never got
  cold: the coldest mean temperature all month was on the 19th at 16.4°C — the warmest
  coldest July day in the 250 years of data.
description: >
  After a record-breaking June, July 2026 did not rewrite daily HadCET England extremes — but
  as a whole month it ranked second-warmest since 1772, behind only 2006. Three interactive
  charts place every July day against the full Central England series. Click around on them
  and see how temperatures have differed over time. One thing about this July is it never got
  cold: the coldest mean temperature all month was on the 19th at 16.4°C — the warmest
  coldest July day in the 250 years of data.
cover_image: /assets/data-stories/second-warmest-july-in-england/cover.png
cover_image_alt: "Scatter plot of daily mean July temperatures in Central England from 1772 to 2026, with July 2026 ranking second-warmest by monthly mean"
thumbnail: /assets/data-stories/second-warmest-july-in-england/thumbnail.png
thumbnail_alt: "HadCET July daily mean temperatures scatter plot"
image:
  path: /assets/data-stories/second-warmest-july-in-england/cover.png
  alt: "Scatter plot of daily mean July temperatures in Central England from 1772 to 2026"
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
  src: "/assets/data-stories/second-warmest-july-in-england/src/"
external_links:
  - label: "View the interactive chart"
    url: "/assets/data-stories/second-warmest-july-in-england/src/"
  - label: "June 2026 record analysis"
    url: "https://odon.at/en/data-stories/record-june-temperature-in-england/"
  - label: "May 2026 record analysis"
    url: "https://odon.at/en/data-stories/record-temperature-in-england/"
  - label: "HadCET data download"
    url: "https://www.metoffice.gov.uk/hadobs/hadcet/data/download.html"
featured: true
license: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
---

## Overview

After a [record-breaking June](https://odon.at/en/data-stories/record-june-temperature-in-england/), July 2026 did not rewrite daily HadCET England extremes — but as a whole month it ranked second-warmest since 1772, behind only 2006. Three interactive charts place every July day against the full Central England series. Click around on them and see how temperatures have differed over time.

One thing about this July is it never got cold. The coldest mean temperature all month was on the 19th at **16.4°C**. That's the warmest coldest July day in the 250 years of data.

## Methodology

Data was downloaded directly from the [Met Office HadCET dataset](https://www.metoffice.gov.uk/hadobs/hadcet/data/download.html). All July readings (days 1–31, years 1772–2026) were extracted for mean, min, and max series using Python. A LOESS smooth was fitted to annual July means for each measure. The interactive charts were built in JavaScript using D3.js, with Delaunay triangulation for nearest-point detection on hover and click.

## Findings

- **Monthly mean:** July 2026 ranked **2nd of 255** Julys (19.5°C), behind only 2006 (19.8°C).
- **Daily mean:** Peak day was **10 July 2026 at 23.7°C** (16th warmest July day on record); five days exceeded 22°C, including a 6–12 July window averaging 22.3°C.
- **Daily maximum:** **10 July 2026 at 32.4°C** ranks 8th among hottest July days; the series record remains **19 July 2022 at 37.3°C**.
- **Daily minimum:** Warmest 2026 July night was **12 July at 16.2°C**; the series warm-night record is **20 July 2016 at 19.6°C**.
- The coldest recorded July daily mean in the series: **20 July 1836** at 8.7°C.

## Takeaways

Open climate data lets you separate two different kinds of extremity: a single-day spike that rewrites the books, and a month that never tops the daily list but still ranks near the top of 255 years when averaged. July 2026 was the second kind — and HadCET makes that distinction checkable within hours of the month closing.
