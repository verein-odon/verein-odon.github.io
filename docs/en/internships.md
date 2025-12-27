---
layout: page
title: Internships
lang: en
ref: internships
permalink: /en/internships/
in_nav: false
---

<section id="projects" class="project-container">
  <div class="section-header">
    <h2>Current Internship Projects</h2>
    <p>All our internships are paid, remote-friendly, and supervised by experienced developers.</p>
  </div>

  <div class="project-grid">
    <article class="project-card">
      <div class="pillar-tag tag-edu">Education</div>
      <h3>Open Data Documentation Engine</h3>
      <p>Help us build an automated documentation system that translates complex API schemas into easy-to-read guides for students and teachers.</p>
      <ul class="project-meta">
        <li><strong>Duration:</strong> 3-6 Months</li>
        <li><strong>Tech:</strong> Python, Markdown, Static Site Gens</li>
        <li><strong>Payment:</strong> Competitive monthly stipend</li>
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
        <li><strong>Payment:</strong> Competitive monthly stipend</li>
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
        <li><strong>Payment:</strong> Competitive monthly stipend</li>
      </ul>
      <a href="#" class="btn-text">Apply for this project &rarr;</a>
    </article>
  </div>
</section>

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