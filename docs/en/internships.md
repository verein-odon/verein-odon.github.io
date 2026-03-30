---
layout: page
title: Internships
lang: en
ref: internships
permalink: /en/internships/
in_nav: false
last_updated: "2026-03-29 00:00"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>Current Internship Projects</h2>
      <p>
        All our internships are remote-friendly and supervised by experienced developers.
      </p>
      <p style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 0.75rem 1rem; border-radius: 0.25rem; margin-top: 1rem;">
        Work on <b>real Open Data projects with societal impact</b>, guided by ODON's team of developers and data engineers.
      </p>
      <div class="project-grid">
        <article class="project-card">
          <div class="pillar-tag tag-edu">Education</div>
          <h3>Open Data Documentation Engine</h3>
          <p>Help us build an automated documentation system that translates complex API schemas into easy-to-read guides for students and teachers.</p>
          <ul class="project-meta">
            <li><strong>Duration:</strong> 3–6 Months</li>
            <li><strong>Tech:</strong> Python, Markdown, Static Site Gens</li>
          </ul>
        </article>
        <article class="project-card">
          <div class="pillar-tag tag-story">Storytelling</div>
          <h3>NGO Impact Visualizer</h3>
          <p>Collaborate with a partner NGO to build a React-based dashboard that tells the story of their social impact using public datasets.</p>
          <ul class="project-meta">
            <li><strong>Duration:</strong> 3 Months</li>
            <li><strong>Tech:</strong> React, D3.js or Chart.js</li>
          </ul>
        </article>
        <article class="project-card">
          <div class="pillar-tag tag-trans">Transparency</div>
          <h3>Public API Infrastructure</h3>
          <p>Work on the core of ODON. Optimize our data ingestion pipelines and improve API performance for high-traffic public datasets.</p>
          <ul class="project-meta">
            <li><strong>Duration:</strong> 6 Months</li>
            <li><strong>Tech:</strong> Go, Docker, PostgreSQL</li>
          </ul>
        </article>
      </div>
      <p>
        <a href="/en/contact/" class="btn btn-primary">Apply or Get in Touch</a>
      </p>
      <p style="margin-top: 1.5rem; color: var(--color-gray-500); font-style: italic;">
        Interested in offering an internship project through ODON? <a href="/en/contact/">Get in touch</a>.
      </p>
    </div>
  </div>
</section>

<style>
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1.875rem;
    padding: 2rem 0;
  }

  .project-card {
    border: 1px solid #e5e7eb;
    padding: 1.875rem;
    border-radius: 0.75rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: #fff;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  .pillar-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 1.25rem;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .tag-edu   { background: #e3f2fd; color: #1976d2; }
  .tag-story { background: #f3e5f5; color: #7b1fa2; }
  .tag-trans { background: #e8f5e9; color: #2e7d32; }

  .project-meta {
    list-style: none;
    padding: 1.25rem 0 0;
    border-top: 1px solid #e5e7eb;
    margin-top: 1.25rem;
    font-size: 0.95rem;
  }
</style>
