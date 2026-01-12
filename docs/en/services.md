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
                We support organisations that want to use Open Data but lack resources or expertise.<br>
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

        <div class="content-section">
            <p> 
                <br>
                If you are interested in our services, please send us an email to info@odon.at.
            </p>
        </div>
    </div>
</section>
<!-- END --- Membership Types -->

<style>
    /* Examples Showcase Section */
.examples-showcase {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 80rem;
  margin: 0 auto;
}

.example-showcase-card {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 768px) {
  .example-showcase-card {
    grid-template-columns: 1fr 1fr;
  }
  
  .example-showcase-card:nth-child(even) .example-showcase-image {
    order: 2;
  }
  
  .example-showcase-card:nth-child(even) .example-showcase-content {
    order: 1;
  }
}

.example-showcase-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: transform 0.3s;
}

.example-showcase-image:hover {
  transform: scale(1.02);
}

.example-showcase-image svg {
  width: 100%;
  height: auto;
  display: block;
}

.example-showcase-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.example-showcase-title {
  font-size: 1.5rem;
  color: var(--color-gray-900);
  line-height: 1.3;
}

@media (min-width: 768px) {
  .example-showcase-title {
    font-size: 1.75rem;
  }
}
</style>


<!-- START --- Intro section ----------------------->
<section class="section bg-gray">
    <div class="container">
        <div class="content-section">
            <h2>
                Open Data Storytelling Examples
            </h2>
            
            <div class="examples-showcase">
        
        <!-- Example 1: Bike Share -->
        <div class="example-showcase-card">
          <div class="example-showcase-image">
            <img src="/assets/images/examples/bike/bike_3.png" alt="Project Screenshot 1">
          </div>
          <div class="example-showcase-content">
            <h3 class="example-showcase-title">Bike Share &amp; Sustainable Mobility</h3>
            <p class="example-showcase-subtitle">Visualizing open mobility data to support smarter, greener cities</p>
            <p class="example-showcase-description">
              This project transforms open transportation and environmental data into a clear visual narrative about bike sharing. By combining maps, timelines, and comparative charts, the visualization highlights how bike share systems can reduce emissions and reshape urban mobility.
            </p>
            <!-- <p class="example-showcase-methods">
              <strong>Tools &amp; methods:</strong><br>
              Data analysis and visualization using open datasets, translated into an accessible information design format.
            </p> -->
          </div>
        </div>

        <!-- Example 1: Bike Share -->
        <div class="example-showcase-card">
          <div class="example-showcase-image">
            <img src="/assets/images/examples/sf-tenderloin/map_2.png" alt="Project Screenshot 1">
          </div>
          <div class="example-showcase-content">
            <h3 class="example-showcase-title">Street Safety & Public Space Impact</h3>
            <p class="example-showcase-subtitle">Visualizing open mobility data to support smarter, greener cities</p>
            <p class="example-showcase-description">
              This infographic uses open mobility and safety data to show the real-world impact of street design decisions. By visualizing collisions, trends, and outcomes over time, the project supports transparent communication between policymakers, stakeholders, and the public.
            </p>
            <!-- <p class="example-showcase-methods">
              <strong>Tools &amp; methods:</strong><br>
              Data analysis and visualization using open datasets, translated into an accessible information design format.
            </p> -->
          </div>
        </div>

      </div>

        </div>


    </div>
</section>
<!-- END --- Intro section ----------------------->

