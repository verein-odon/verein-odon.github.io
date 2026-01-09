---
layout: page
title: Services
lang: en
ref: services
permalink: /en/services/
---

<!-- START --- Membership Types -->
<section class="section bg-white">
    <div class="container">
        <div class="content-section">
            <h2>
                Our Services
            </h2>
            <p>
                If you are interested in working with us on these offerings, please send us an email to info@odon.at.
            </p>
        </div>
        <div class="membership-grid">
        <div class="membership-card">
            <!-- <div class="membership-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            </div> -->
            <h3>Data Engineering</h3>
            <!-- <p class="membership-subtitle">"Ordentliche Mitgliedschaft"</p> -->
            <ul>
                <li>Data collection and cleaning</li>
                <li>Data integration and pipelines</li>
                <li>Structuring Open Data for reuse</li>
            </ul>
            <!-- <a href="mailto:info@odon.at" class="btn btn-primary btn-full">
            <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="m3 7 9 6 9-6"></path>
            </svg>
            <span>Contact us for full membership</span>
            </a> -->
        </div>
        <div class="membership-card">
            <!-- <div class="membership-icon" style="background: linear-gradient(135deg, var(--color-indigo), var(--color-purple));">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
            </div> -->
            <h3>Data Storytelling</h3>
            <!-- <p class="membership-subtitle">"Außerordentliche Mitgliedschaft"</p> -->
            <ul>
                <li>Visualisations and dashboards</li>
                <li>Communicating insights clearly</li>
                <li>Making data understandable for non-experts</li>
            </ul>
            <!-- <a href="mailto:info@odon.at" class="btn btn-primary btn-full" style="background-color: var(--color-indigo);">
            <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="m3 7 9 6 9-6"></path>
            </svg>
            <span>Contact us for associate membership</span>
            </a> -->
        </div>
        </div>
    </div>
</section>
<!-- END --- Membership Types -->


<!-- START --- Intro section ----------------------->
<!-- <section class="section bg-gray">
    <div class="container">
        <div class="content-section">
            <h2>
                Selected Examples
            </h2>
            <p>
                We support organisations that want to use Open Data but lack resources or expertise.
            </p>
        </div>


        <div class="project-grid">
        <article class="project-card">
          <div class="pillar-tag tag-edu">Education</div>
          <h3>Open Data Documentation Engine</h3>
          <p>Help us build an automated documentation system that translates complex API schemas into easy-to-read guides for students and teachers.</p>
          <ul class="project-meta">
            <li><strong>Duration:</strong> 3-6 Months</li>
            <li><strong>Tech:</strong> Python, Markdown, Static Site Gens</li>
          </ul>
          <a href="#" class="btn-text">Apply for this project &rarr;</a>
        </article>

        <article class="project-card">
          <div class="pillar-tag tag-story">Storytelling</div>
          <h3>NGO Impact Visualizer</h3>
          <p>Collaborate with a partner NGO to build a React-based dashboard that tells the story of their social impact using public datasets.</p>
          <ul class="project-meta">
            <li><strong>Duration:</strong> 3 Months</li>
            <li><strong>Tech:</strong> React, D3.js or Chart.js</li>
          </ul>
          <a href="#" class="btn-text">Apply for this project &rarr;</a>
        </article>

        <article class="project-card">
          <div class="pillar-tag tag-trans">Transparency</div>
          <h3>Public API Infrastructure</h3>
          <p>Work on the core of ODON. Optimize our data ingestion pipelines and improve API performance for high-traffic public datasets.</p>
          <ul class="project-meta">
            <li><strong>Duration:</strong> 6 Months</li>
            <li><strong>Tech:</strong> Go, Docker, PostgreSQL</li>
          </ul>
          <a href="#" class="btn-text">Apply for this project &rarr;</a>
        </article>
     </div>

    </div>
</section> -->
<!-- END --- Intro section ----------------------->


<style>
    /* Hero Styles */
.internship-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 5%;
  background: #f8f9fa; /* Light grey/white base */
  gap: 40px;
}

.hero-content h1 {
  font-size: 3rem;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.25rem;
  max-width: 600px;
  line-height: 1.6;
}

/* Project Cards */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px 0;
}

.project-card {
  border: 1px solid #eee;
  padding: 30px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.pillar-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.tag-edu { background: #e3f2fd; color: #1976d2; } /* Blue for Education */
.tag-story { background: #f3e5f5; color: #7b1fa2; } /* Purple for Storytelling */
.tag-trans { background: #e8f5e9; color: #2e7d32; } /* Green for Transparency */

.project-meta {
  list-style: none;
  padding: 20px 0;
  border-top: 1px solid #eee;
  margin-top: 20px;
  font-size: 0.95rem;
}

.btn-primary {
  background: #1a1a1a;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}
</style>