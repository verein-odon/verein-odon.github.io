---
title: "Street Safety & Public Space Impact"
slug: "street-safety"
date: 2026-03-12
summary: >
  Exploring how street design decisions shape safety in public space, drawing on open
  mobility and safety datasets to reveal patterns in collisions and outcomes over time.
description: >
  Exploring how street design decisions shape safety in public space, drawing on open
  mobility and safety datasets to reveal patterns in collisions and outcomes over time.
cover_image: /assets/data-stories/street-safety/cover.webp
cover_image_alt: "Map visualisation of collision patterns and street design features"
thumbnail: /assets/data-stories/street-safety/thumbnail.webp
thumbnail_alt: "Street safety story thumbnail"
image:
  path: /assets/data-stories/street-safety/cover.webp
  alt: "Map visualisation of collision patterns and street design features"
authors:
  - name: "Clemens"
    role: "Board Member"
type: "visualisation"
topics:
  - "safety"
  - "mobility"
  - "urbanism"
tools:
  - "Python"
  - "Mapbox"
data_sources:
  - name: "Open Street Safety Dataset"  # TODO: replace with actual dataset URL
    url: ""
    odmm_legal: "L3"    # TODO: verify ODMM ratings
    odmm_technical: "T3"
  - name: "Street Design & Infrastructure Data"  # TODO: replace with actual dataset URL
    url: ""
    odmm_legal: "L2"    # TODO: verify ODMM ratings
    odmm_technical: "T2"
embed:
  kind: "none"
featured: false
---

<!-- TODO: add actual image files to /assets/data-stories/street-safety/ -->

## Overview

<!-- TODO: write narrative -->

This visualisation explores how street design decisions shape safety outcomes in public space. Using open mobility and collision datasets, it maps patterns across time and geography — revealing where design choices correlate with higher collision rates and worse outcomes.

## Methodology

<!-- TODO: expand methodology section -->

Collision records were matched to street segments using spatial joins. Street design features — lane widths, speed limits, pedestrian infrastructure — were sourced from open infrastructure datasets and linked to collision outcomes using Python. The resulting map was built with Mapbox.

## Findings

<!-- TODO: add key findings and insights -->

Streets with narrower lanes and lower speed limits show consistently better safety outcomes, independent of traffic volume — supporting the evidence base for slower, narrower street design.

## Takeaways

<!-- TODO: add final takeaways -->

Open safety datasets provide compelling evidence for street design reform. Visualising the data in context makes the argument concrete and accessible to a non-specialist audience.
