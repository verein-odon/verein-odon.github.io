---
layout: page
title: Services
nav_order: 4
lang: en
ref: services
permalink: /en/services/
last_updated: "2026-03-29 00:00"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>Our Services</h2>
      <p>
        We support organisations that want to use Open Data but lack the resources or expertise to do so effectively.
      </p>
      <p style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 0.75rem 1rem; border-radius: 0.25rem; margin-top: 1rem;">
        Services are available to <b>non-profits and public interest organisations</b> at reduced or no cost — funded through membership and donations.
      </p>
      <div class="cards-grid">
        <div class="card">
          <h3>Data Engineering</h3>
          <ul>
            <li>
              <span class="bullet"></span>
              <span><b>Data collection and cleaning</b><br>
              Gather raw data from public sources and transform it into structured, usable formats.</span>
            </li>
            <li>
              <span class="bullet"></span>
              <span><b>Data integration and pipelines</b><br>
              Connect multiple data sources and automate workflows for reliable, up-to-date data.</span>
            </li>
            <li>
              <span class="bullet"></span>
              <span><b>Structuring Open Data for reuse</b><br>
              Organise and document datasets so they are easy to access, understand, and build upon.</span>
            </li>
          </ul>
        </div>
        <div class="card">
          <h3>Data Storytelling</h3>
          <ul>
            <li>
              <span class="bullet"></span>
              <span><b>Visualisations and dashboards</b><br>
              Turn data into clear charts, maps, and interactive dashboards that communicate your story.</span>
            </li>
            <li>
              <span class="bullet"></span>
              <span><b>Communicating insights clearly</b><br>
              Translate complex findings into plain language narratives for any audience.</span>
            </li>
            <li>
              <span class="bullet"></span>
              <span><b>Making data understandable for non-experts</b><br>
              Design accessible outputs that anyone can read, explore, and act on.</span>
            </li>
          </ul>
        </div>
      </div>
      <p style="margin-top: 1.5rem; color: var(--color-gray-500); font-style: italic;">
        &#9829; Interested in our services? <a href="/en/contact/">Get in touch</a> — we are happy to discuss how we can help.
      </p>
    </div>
  </div>
</section>


<style>
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .card {
    align-items: flex-start;
    text-align: left;
  }
</style>

{% include data-services-grid.html title="Examples of Data Services" bg="bg-gray" link_label="View the example" %}
