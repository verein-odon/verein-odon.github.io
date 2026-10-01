---
layout: page
title: API Registration
lang: en
ref: api-registration
parent: apis
permalink: /en/api-registration/
in_nav: false
sitemap: false
last_updated: "2026-10-01"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>Request an API Token</h2>
      <p>
        Thank you for your interest in the ODON API. To get your API token, send us a short email using the address, subject, and template shown below. It helps us keep the service stable and reach out when there are important updates.
      </p>
      <ul>
        <li>
          <span class="bullet"></span>
          <span><b>Write email</b> — opens your mail app with the template already filled in.</span>
        </li>
        <li>
          <span class="bullet"></span>
          <span><b>Copy template</b> — copy the text and paste it into an email.</span>
        </li>
        <li>
          <span class="bullet"></span>
          <span><b>Download (.md)</b> — the template as a Markdown file.</span>
        </li>
      </ul>
      {% capture api_disclaimer %}{% include api-disclaimer.md %}{% endcapture %}
      <div id="disclaimer" style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 0.75rem 1rem; border-radius: 0.25rem; margin-top: 1rem;">
        <p style="margin-bottom: 0.5rem;"><b>Disclaimer</b></p>
        {{ api_disclaimer | markdownify }}
      </div>
    </div>
  </div>
</section>

<section class="section bg-gray" style="border-top: 1px solid var(--color-gray-200);">
  <div class="container">
    <div class="content-section">
      {% include email_template.html subject="API Token Request" template="api-token-request-template.md" download="/assets/downloads/api/odon-api-token-request-v1.0.md" %}
    </div>
  </div>
</section>
