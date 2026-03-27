---
layout: page
title: APIs
lang: en
ref: apis
permalink: /en/apis/
last_updated: "2026-03-27 18:00"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>Access Open Data via API</h2>
      <p>
        ODON provides programmatic access to curated open datasets through a simple token-based API. Each request uses a URL parameter to authenticate, making it straightforward to integrate into any application or data pipeline.
      </p>
      <p style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 0.75rem 1rem; border-radius: 0.25rem; margin-top: 1rem;">
        ODON's APIs are <b>free to use</b>. All underlying datasets are open data, free to access, and use.
      </p>
      <h3>How It Works</h3>
      <ul>
        <li>
          <span class="bullet" style="margin-top: 0;">1.</span>
          <span>Register for a free API token.</span>
        </li>
        <li>
          <span class="bullet" style="margin-top: 0;">2.</span>
          <span>Browse the <a href="/en/api-documentation/">API Documentation</a> to find a dataset and note its endpoint.</span>
        </li>
        <li>
          <span class="bullet" style="margin-top: 0;">3.</span>
          <span>Append your token to the URL and start querying.</span>
        </li>
      </ul>
      <pre><code>https://api-eu-2.odon.at/agricultural-land-sq-km/data?api-token=YOUR_TOKEN</code></pre>
      <p><small>All responses return JSON. URL paths use kebab-case; JSON keys use snake_case.</small></p>
      <p>
        <a href="/en/api-registration/" class="btn btn-primary">Get Your API Token</a>
        &nbsp;
        <a href="/en/api-documentation/" class="btn btn-primary">Browse API Documentation</a>
      </p>
    </div>
  </div>
</section>

<section class="section bg-gray">
  <div class="container">
    <div class="content-section">
      <h3>Notes</h3>
      <ul>
        <li>
          <span class="bullet">•</span>
          <span><b>Why registration is required</b><br>
          We operate these APIs within our financial means. A simple registration helps us prevent misuse and ensure fair access for everyone.</span>
        </li>
        <li>
          <span class="bullet">•</span>
          <span><b>Suggestions &amp; Feedback</b><br>
          We are always open to feedback and suggestions. If you would like to see a new data set added as an API, let us know — just send us an email to <a href="mailto:info@odon.at">info@odon.at</a>.</span>
        </li>
      </ul>
      <p style="margin-top: 1.5rem; color: var(--color-gray-500); font-style: italic;">
        &#9829; Like using our APIs? Consider making a <a href="/en/supporters/">donation</a> or becoming a <a href="/en/membership/">supporting member</a>.
      </p>
    </div>
  </div>
</section>
