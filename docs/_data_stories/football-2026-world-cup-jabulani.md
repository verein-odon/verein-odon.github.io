---
title: "The 2026 World Cup Football is Much Better Than the 2010 One"
slug: "football-2026-world-cup-jabulani"
date: 2026-06-11
summary: >
  Pope John Paul II once said "out of all the unimportant things, football is the most important."
  The 2010 World Cup ball was one of the most complained-about in history — short seams meant unpredictable
  flight, low goals. The 2026 ball looks similar on paper but is aerodynamically far better.
  Here is why seam depth, width, and panel texture matter more than seam length alone.
description: >
  The 2010 Jabulani had unusually short and shallow seams, causing it to reach its drag-crisis
  speed within normal playing range. The 2026 Trionda also has short seams but compensates with
  deeper grooves and a textured surface, resulting in the lowest measured critical speed of any
  World Cup ball. Wind-tunnel data from Goff, Hong, Leung & Asai (2026) support the comparison.
cover_image: /assets/data-stories/football-2026-world-cup-jabulani/cover.png
cover_image_alt: "Scatter plot of drag-crisis critical speed for World Cup balls 2004–2026, with Jabulani 2010 highlighted as outlier in red and Trionda 2026 in green"
thumbnail: /assets/data-stories/football-2026-world-cup-jabulani/thumbnail.png
thumbnail_alt: "Critical speed of World Cup footballs 2004–2026"
image:
  path: /assets/data-stories/football-2026-world-cup-jabulani/cover.png
  alt: "Drag-crisis critical speed for World Cup footballs 2004–2026"
authors:
  - name: "David Curran"
    linkedin: "https://www.linkedin.com/in/david-curran-8ba5534/"
type: "story"
featured: false
topics:
  - "sports"
  - "science"
tools:
  - "Python"
  - "matplotlib"
data_sources:
  - name: "Goff, Hong, Leung & Asai (2026) — Trionda: Enhanced Surface Roughness Relative to Previous FIFA World Cup Match Balls. Applied Sciences 16(6), 2808."
    url: "https://doi.org/10.3390/app16062808"
    odmm_legal: "L4"
    odmm_legal_details: >
      Published in MDPI Applied Sciences under Creative Commons Attribution 4.0 International (CC BY 4.0) — free reuse with attribution. L4.
    odmm_technical: "T2"
    odmm_technical_details: >
      Wind-tunnel measurements presented as figures and tables within the paper; no separate machine-readable data download provided. T2.
  - name: "Wikipedia, FIFA World Cup statistics"
    url: "https://en.wikipedia.org/wiki/FIFA_World_Cup_statistics"
    odmm_legal: "L4"
    odmm_legal_details: "CC BY-SA text, free reuse with attribution. L4."
    odmm_technical: "T2"
    odmm_technical_details: "Encyclopaedic prose and tables on a web page; no machine-readable export provided. T2."
external_links:
  - label: "Primary source paper (MDPI Applied Sciences 2026)"
    url: "https://doi.org/10.3390/app16062808"
  - label: "Wikipedia: Adidas Jabulani"
    url: "https://en.wikipedia.org/wiki/Adidas_Jabulani"
  - label: "Wikipedia: Adidas Trionda"
    url: "https://en.wikipedia.org/wiki/Adidas_Trionda"
  - label: "The mathematics of football (Princeton University Press)"
    url: "https://press.princeton.edu/books/hardcover/9780691263120/the-football"
  - label: "How aerodynamics affect football (Plus Maths)"
    url: "https://plus.maths.org/fly-walks-round-football"
license: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
---

> "Out of all the unimportant things, football is the most important." — Pope John Paul II

## Overview

In 2010, the South African World Cup used [the Jabulani](https://en.wikipedia.org/wiki/Adidas_Jabulani) — one of the most criticised match balls in the tournament's history. It was too smooth, with far less seam than any previous ball, and the manufacturing technology of the time was not ready for that step.

![Jabulani — the 2010 World Cup ball](/assets/data-stories/football-2026-world-cup-jabulani/jabulani.jpg)
*Jabulani: eight thermally bonded panels, unusually short and shallow seams. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Adidas_Jabulani_Official_World_Cup_2010_(4158450149).jpg)*

The seams on the Jabulani measured just 1.98 m in total length, 2.2 mm wide, and only 0.5 mm deep — the narrowest and shallowest of any measured World Cup ball.

![Same short seams, completely different ball](/assets/data-stories/football-2026-world-cup-jabulani/seam_tufte.png)

The 2026 ball, [the Trionda](https://en.wikipedia.org/wiki/Adidas_Trionda), also has short seams — 2.50 m. But its seams are deeper and wider, and the panel surface itself is textured with pronounced grooves. The result is a very different ball aerodynamically, as the data shows.

## The physics of a kicked ball

When you kick a football really fast, a thin layer of air wraps around it and reduces drag — the same principle behind the dimples on a golf ball. A small amount of surface roughness can actually make the ball travel further by delaying the point at which that smooth air layer breaks down.

At a certain speed, that air buffer detaches from the ball and full drag kicks in. This is called the **critical speed** or drag-crisis speed. The lower the critical speed, the earlier the transition happens — and crucially, the more likely it is to happen *below* normal playing speeds, where the ball's flight is already stable and predictable.

The Jabulani's critical speed was approximately 22–27 m/s depending on orientation — firmly within the range of a hard kick. When a ball reached 25 m/s it would decelerate sharply and unpredictably. [The Trionda's critical speed is just 11.9 m/s](https://doi.org/10.3390/app16062808) so it will rarely reach this high drag high wobble state before it reaches a player.

The chart below, taken directly from the wind-tunnel paper, shows the drag coefficient for all five balls across the full speed range. The Jabulani (orange) stays high until around 23 m/s before dropping — that delayed crisis is the problem. Every other ball drops early and then plateaus.

![Drag coefficient vs speed for five World Cup balls — from Goff et al. 2026](/assets/data-stories/football-2026-world-cup-jabulani/drag.png)
*Drag coefficient (C_D) vs speed for Trionda, Al Rihla, Telstar 18, Brazuca, and Jabulani. Orientation B. Source: [Goff, Hong, Leung & Asai (2026)](https://doi.org/10.3390/app16062808), Fig. 7. CC BY 4.0.*

![This year's World Cup football is much better than the 2010 one](/assets/data-stories/football-2026-world-cup-jabulani/critspeed_tufte.png)

## Seam geometry: what actually controls stability

Seam length is not the only factor. The width and depth of each seam determine how effectively it trips the boundary layer into turbulence. Jabulani's seams were not just short — they were shallow (0.5 mm) and narrow (2.2 mm). Every ball since has been deeper and wider.

![Jabulani's seams were uniquely shallow and narrow — every ball since has been deeper](/assets/data-stories/football-2026-world-cup-jabulani/seamwd_tufte.png)

The [Trionda](https://news.adidas.com/innovations/adidas-unveils--trionda----the-official-match-ball-of-the-fifa-world-cup26-/s/27042e3a-12ba-482d-8839-8a96e056b33e) also has three pronounced grooves on each panel surface — up to 9 mm wide and 1.3 mm deep — effectively adding roughness across the entire ball surface, not just at the seam edges. Jabulani's panels were smooth glassy plastic between the seams. Trionda's are not.

## Did it affect the game?

Goalkeepers at the 2010 World Cup were vocal about the Jabulani: they described it as unpredictable and beach-ball-like, with flight paths that seemed to change direction without warning. 
But the effects that unnerved goalkeepers probably helped reduce goals in total. The number of goals at that tournament was one of the lowest on record.

![Faster, more predictable balls mean more goals?](/assets/data-stories/football-2026-world-cup-jabulani/goals_tufte.png)

A thousand things affect a football match — tactics, weather, refereeing, the quality of the squads — and goals per game have trended gradually downward since the 1950s regardless of ball design. But an unpredictable ball that slows sharply in mid-flight is unlikely to have helped players get into a shot taking position.

## References

This post was prompted by [a book on the mathematics of football](https://press.princeton.edu/books/hardcover/9780691263120/the-football) and [this article on ball aerodynamics](https://plus.maths.org/fly-walks-round-football). The aerodynamic data comes from a series of wind-tunnel papers by Goff, Hong, and Asai at the University of Tsukuba.

- Goff, J. E., Hong, S., Leung, R., & Asai, T. (2026). Trionda: Enhanced surface roughness relative to previous FIFA World Cup match balls. *Applied Sciences*, *16*(6), 2808. <https://doi.org/10.3390/app16062808>
- Goff, J. E., Asai, T., & Hong, S. (2014). A comparison of Jabulani and Brazuca no-spin aerodynamics. *Proceedings of the Institution of Mechanical Engineers, Part P*, *228*(3), 188–194. <https://doi.org/10.1177/1754337114526173>
- Goff, J. E., Hong, S., & Asai, T. (2018). Aerodynamic and surface comparisons between Telstar 18 and Brazuca. *Proceedings of the Institution of Mechanical Engineers, Part P*, *232*(4), 342–348. <https://doi.org/10.1177/1754337118765560>
- Goff, J. E., Hong, S., & Asai, T. (2022). Aerodynamic comparisons between Al Rihla and recent World Cup soccer balls. *Proceedings of the Institution of Mechanical Engineers, Part P*, *239*(4), 403–411. <https://doi.org/10.1177/17543371221116868>
- Wikipedia contributors. (2026). *FIFA World Cup statistics*. <https://en.wikipedia.org/wiki/FIFA_World_Cup_statistics>
