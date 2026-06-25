---
title: "How Do You Get There?"
slug: "how-to-get-there"
date: 2026-06-25
summary: >
  Amsterdam to Vienna. Three modes. One service blueprint. The hidden system that
  explains why planes win — even when trains emit 14× less CO₂.
description: >
  Amsterdam to Vienna. Three modes. One service blueprint. The hidden system that
  explains why planes win — even when trains emit 14× less CO₂.
cover_image: /assets/data-stories/how-to-get-there/cover.png
cover_image_alt: "Animated scene of a plane, night train, and coach travelling simultaneously with a live journey clock showing CO₂ and time comparisons"
thumbnail: /assets/data-stories/how-to-get-there/thumbnail.png
thumbnail_alt: "How Do You Get There? — Amsterdam to Vienna transport comparison"
thumbnail_position: "left center"
image:
  path: /assets/data-stories/how-to-get-there/cover.png
  alt: "Animated transport scene comparing plane, night train, and coach on the Amsterdam–Vienna route"
authors:
  - name: "Samreen Khan"
type: "story"
featured: false
topics:
  - "mobility"
  - "sustainability"
  - "environment"
tools:
  - "HTML/CSS/JavaScript"
  - "Canvas API"
  - "Chart.js"
  - "Python/Playwright"
data_sources:
  - name: "Eurostat — Air Passenger Transport Statistics 2024 (avia_paoc, avia_paoa)"
    url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Air_passenger_transport_statistics"
    odmm_legal: "L4"
    odmm_legal_details: >
      EU open data, free reuse with attribution. L4.
    odmm_technical: "T4"
    odmm_technical_details: >
      Full API access available in SDMX, CSV, and TSV formats. T4.
  - name: "European Environment Agency — Sustainability of Europe's Mobility Systems 2024"
    url: "https://www.eea.europa.eu/en/analysis/indicators/greenhouse-gas-emissions-from-transport"
    odmm_legal: "L3"
    odmm_legal_details: >
      EEA publications are freely accessible and reusable for educational and non-commercial purposes; no blanket open licence. L3.
    odmm_technical: "T3"
    odmm_technical_details: >
      Summaries available in report form; raw underlying data quality varies by member state. T3.
  - name: "Greenpeace — Low-cost flights up to 26× cheaper than trains: 142-route study (2025)"
    url: "https://www.greenpeace.org/eu-unit/issues/climate-energy/47717/low-cost-flights-up-to-26-times-cheaper-than-trains/"
    odmm_legal: "L2"
    odmm_legal_details: >
      Summary publicly accessible; underlying fare data not released. No open licence. L2.
    odmm_technical: "T2"
    odmm_technical_details: >
      Published as a PDF/web report; no structured data export provided. T2.
  - name: "Greenpeace UK — Cheap Pollution: why flying in the UK is too affordable (112-route study, 2023)"
    url: "https://www.greenpeace.org.uk/news/cheap-pollution-means-taking-the-train-to-europe-is-four-times-the-cost-of-flying-report/"
    odmm_legal: "L2"
    odmm_legal_details: >
      Report freely accessible online; no open licence. L2.
    odmm_technical: "T2"
    odmm_technical_details: >
      PDF/web only; no structured data export. T2.
  - name: "NS International / ÖBB — Nightjet Amsterdam–Vienna new-generation launch (May 2025)"
    url: "https://www.nsinternational.com/"
    odmm_legal: "L3"
    odmm_legal_details: >
      Press releases freely accessible; no explicit open licence stated. L3.
    odmm_technical: "T3"
    odmm_technical_details: >
      Figures from press releases; no structured dataset provided. T3.
  - name: "rail.cc — Nightjet NJ40421 Amsterdam–Vienna timetable and fares (2025)"
    url: "https://rail.cc/night-train/amsterdam-vienna-oebb-nightjet-nj40421/629"
    odmm_legal: "L2"
    odmm_legal_details: >
      Timetable is publicly available; pricing is dynamic and unarchived. No open licence. L2.
    odmm_technical: "T2"
    odmm_technical_details: >
      Human-readable only; no machine-readable export. T2.
  - name: "Flightright — Train vs Plane CO₂ comparison (2024)"
    url: "https://www.flightright.com/blog/train-vs-plane"
    odmm_legal: "L3"
    odmm_legal_details: >
      Methodology described on a publicly accessible page; proprietary models underlie the estimates. L3.
    odmm_technical: "T3"
    odmm_technical_details: >
      Per-route web content; not available as a structured download. T3.
  - name: "EUROCONTROL — European Aviation Overview, January 2025"
    url: "https://www.eurocontrol.int/publication/eurocontrol-aviation-outlook-2050"
    odmm_legal: "L4"
    odmm_legal_details: >
      Freely accessible publication. L4.
    odmm_technical: "T3"
    odmm_technical_details: >
      PDF/web summaries freely available; detailed STATFOR data requires institutional access. T3.
  - name: "TIME Magazine / Transport & Environment — Why train travel costs more than flying in Europe (2024)"
    url: "https://time.com/6108578/why-flying-is-more-expensive-than-taking-the-train/"
    odmm_legal: "L2"
    odmm_legal_details: >
      Published in a commercial magazine. No open licence; article is readable online but not licensed for reuse. L2.
    odmm_technical: "T3"
    odmm_technical_details: >
      No structured data download; fare comparisons compiled manually. T3.
  - name: "Man in Seat 61 — Nightjet guide"
    url: "https://www.seat61.com/trains-and-routes/nightjet.htm"
    odmm_legal: "L2"
    odmm_legal_details: >
      Independent travel guide website. No open licence stated; freely readable but not licensed for reuse. L2.
    odmm_technical: "T2"
    odmm_technical_details: >
      HTML web page; timetable and fare information presented as prose with no structured data download. T2.
  - name: "EcoPassenger — CO₂ calculator (2024)"
    url: "https://www.ecopassenger.org/"
    odmm_legal: "L3"
    odmm_legal_details: >
      Free to use for individual queries; methodology published. No blanket open licence on outputs. L3.
    odmm_technical: "T3"
    odmm_technical_details: >
      Per-journey web tool; no bulk data download available. T3.
embed:
  kind: "iframe"
  src: "/assets/data-stories/how-to-get-there/src/"
external_links:
  - label: "View the interactive story"
    url: "/assets/data-stories/how-to-get-there/src/"
license: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
---

## Overview

This data story examines why aviation dominates European medium-haul travel — not because it is inherently better, but because the pricing and booking system was built to favour it.

Using the Amsterdam → Vienna route as a focal case (930 km — close enough for multiple modes to be genuinely viable), the story maps three options — flight, ÖBB Nightjet, and coach — through a service blueprint that reveals what the booking page hides: aviation fuel tax exemptions dating to 1944, fragmented cross-border rail ticketing, and the absence of any cross-modal aggregator at scale.

The story frames this as a UX problem with a known solution set, drawing on official data from Eurostat, the European Environment Agency, and Greenpeace's 142-route analysis. An animated transport scene shows all three vehicles travelling simultaneously with a live journey clock. An interactive mode selector lets readers explore the full service blueprint — user actions, provider actions, hidden infrastructure, pain points, CO₂, and true door-to-door time — for each mode.

## Methodology

No primary data was collected. All figures are drawn from official and peer-reviewed sources published between 2023 and 2025.

The Amsterdam → Vienna route was selected as the focal case because it sits at the threshold where multiple transport modes are genuinely competitive — making the trade-offs concrete and directly comparable.

A service blueprint was constructed for each of the three modes, mapping six layers: user actions, provider actions, supporting infrastructure, hidden system factors (tax treatment, subsidy structure, ticketing architecture), pain points, and real door-to-door time. CO₂ figures are per-passenger estimates from EEA, EcoPassenger, and Flightright, based on the Dutch and Austrian electricity mix for rail traction.

Visualisations were built as a self-contained responsive HTML page with an animated canvas transport scene (vanilla JS, requestAnimationFrame loop), an interactive mode selector, a Chart.js bar chart of EU air passenger growth 2022–2024, and a semantic accessible table as the comparative service blueprint.

## Findings

- On **61% of 142 cross-border European routes**, flying is cheaper than the equivalent train — not due to operational efficiency, but because aviation fuel carries zero EU fuel excise duty while rail pays full energy tax. On UK–Europe routes, the gap averages **4× cheaper by plane**. (Greenpeace 2024)
- The Amsterdam → Vienna Nightjet emits approximately **6 kg CO₂ per passenger**, versus **87 kg by flight** — a factor of **14.5×** — while arriving city-centre to city-centre and replacing a hotel night. (EEA / EcoPassenger / Flightright)
- EU air passengers reached **1.1 billion in 2024** — up **8.3% year-on-year**. Every EU country recorded growth. Aviation's intra-EU modal share in passenger-km has grown from 5.3% (1995) to 9.6% (2019). (Eurostat / EEA 2024)
- On **44 of 109 cross-border European rail routes**, passengers cannot purchase a through-ticket in a single transaction — a structural barrier that persists independently of price. (Greenpeace 2024)
- **750,000+ passengers** have taken the ÖBB Nightjet between the Netherlands and Austria since its 2021 launch. The new-generation train (from May 2025) features private mini-cabins, Wi-Fi, and 520-passenger capacity — demonstrating viable demand when the product is designed well. (NS International 2025)
- Amsterdam Schiphol handled **67 million passengers in 2024**, the second busiest EU airport after Paris CDG. (Eurostat 2024)

## Takeaways

The gap between flight and train on European routes is not natural — it is designed. Every structural advantage aviation holds (zero kerosene tax, no VAT on international tickets, subsidised airports, no cross-modal comparison on booking platforms) reflects policy choices that can be changed.

The booking experience is a UX problem as much as a policy problem. There is no Skyscanner equivalent for European cross-border rail. Google Flights shows carbon comparisons between flights, but not between flights and trains. That gap is a design brief.

The Nightjet data demonstrates what happens when rail competes on product quality as well as price: 750,000 passengers on a single route in four years, with market share on some overnight routes reaching 30%. The infrastructure exists. The demand exists. The remaining gap is one of policy clarity and booking system design.
