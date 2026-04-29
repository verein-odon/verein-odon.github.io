---
title: "Working-from-Home Life & Burnout"
slug: "wfh-burnout"
date: 2026-04-20
summary: >
  A data story exploring the relationship between remote work conditions and burnout,
  based on a dataset of 1,600 survey responses — with findings that challenge common assumptions.
description: >
  A data story exploring the relationship between remote work conditions and burnout,
  based on a dataset of 1,600 survey responses — with findings that challenge common assumptions.
cover_image: /assets/data-stories/wfh-burnout/cover.webp
cover_image_alt: "Visualisation of burnout indicators across remote work conditions"
thumbnail: /assets/data-stories/wfh-burnout/thumbnail.webp
thumbnail_alt: "Working-from-home burnout story thumbnail"
image:
  path: /assets/data-stories/wfh-burnout/cover.webp
  alt: "Visualisation of burnout indicators across remote work conditions"
authors:
  - name: "Nooshin Orouji"
    role: "Creative Lead @ ODON"
type: "story"
topics:
  - "health"
  - "labour"
tools:
  - "Python"
  - "D3.js"
data_sources:
  - name: "Work From Home Employee Burnout Dataset"  # TODO: replace with actual dataset URL and source
    url: "https://www.kaggle.com/datasets/sonalshinde123/work-from-home-employee-burnout-dataset"
    odmm_legal: "L3"
    odmm_legal_details: >
      Published on Kaggle under a custom dataset licence that permits non-commercial
      use with attribution. Redistribution and commercial use require separate
      permission — placing it at L3 (open with conditions).
    odmm_technical: "T3"
    odmm_technical_details: >
      Provided as a single structured CSV file downloadable directly from Kaggle.
      Well-formed tabular format, no specialist tooling required — T3.
embed:
  kind: "iframe"
  src: "/assets/data-stories/wfh-burnout/src/"
external_links:
  - label: "View the interactive story"
    url: "/assets/data-stories/wfh-burnout/src/"
featured: true
#license: "CC BY 4.0"
#license_url: "https://creativecommons.org/licenses/by/4.0/"
---

## Overview

This data story explores the reasons behind burnout in the context of remote and hybrid work. Drawing on a dataset with 1,600 samples, it tests common assumptions about what drives burnout — and surfaces patterns that may surprise you.

## Methodology

<!-- TODO: expand methodology section -->

Survey data was cleaned and structured using Python. Relationships between work conditions, autonomy, social factors, and reported burnout were explored through a series of interactive visualisations built with D3.js.

## Findings

Contrary to a common narrative, the physical environment of remote work was less strongly linked to burnout than task completion.

## Takeaways

Open datasets on workplace conditions offer rich material for data stories that go beyond surface-level correlations — and challenge received wisdom about how we work.
