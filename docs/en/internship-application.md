---
layout: page
title: Internship Application
lang: en
ref: internship-application
parent: internships
permalink: /en/internship-application/
redirect_from: /en/internship-registration/
in_nav: false
last_updated: "2026-10-03"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>Apply for an Internship</h2>
      <p>
        Send us an email to apply for an internship at ODON, using the address, subject, and template shown below. We will get back to you to discuss the best fit for your skills and goals. You're welcome to attach your CV.
      </p>
      <h3>What to include</h3>
      <p>The template asks for the points below. These suggestions help you answer them — pick whatever fits, or describe it in your own words.</p>
      {% capture internship_suggestions %}{% include internship-application-suggestions.md %}{% endcapture %}
      {{ internship_suggestions | markdownify }}
      <p style="margin-top: 1.5rem; color: var(--color-gray-500); font-style: italic;">
        &#9829; We aim to respond within a few business days.
      </p>
    </div>
  </div>
</section>

<section class="section bg-gray" style="border-top: 1px solid var(--color-gray-200);">
  <div class="container">
    <div class="content-section">
      {% include email_template.html subject="Internship Application" template="internship-application-template.md" download="/assets/downloads/internships/odon-internship-application-v1.0.md" %}
    </div>
  </div>
</section>
