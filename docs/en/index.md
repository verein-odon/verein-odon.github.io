---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
lang: en
ref: index
list_title: News
show_excerpts: true
last_updated: "2025-02-13 14:30"
---


<!-- What We Do Section -->
<section class="section bg-white">
    <div class="container">
        <div class="content-section">
            <h2>
                What We Do
            </h2>
        </div>
        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">
                    <img src="/assets/images/icons/data-services.svg" alt="Data services" loading="lazy">
                </div>
                <h3>Data Services Around Open Data</h3>
                <p class="membership-subtitle">For Organisations and Institutions</p>
                <p class="card-text">From data engineering to storytelling, we help organisations turn raw data into insights and value.
                </p>
            </div>
            <div class="card">
                <div class="card-icon">
                    <img src="/assets/images/icons/apis.svg" alt="API visualization" loading="lazy">
                </div>
                <h3>APIs for Open Data</h3>
                <p class="membership-subtitle">For Developers and Researchers</p>
                <p class="card-text">We provide a wealth of access to various public datasets via modern APIs.
                </p>
                <!-- <a href="/en/apis" class="btn btn-primary btn-full" style="background-color: var(--color-indigo);">Explore our APIs</a> -->
            </div>
            <div class="card">
                <div class="card-icon">
                    <img src="/assets/images/icons/education.svg" alt="Data services" loading="lazy">
                </div>
                <h3>Education on Open Data</h3>
                <p class="membership-subtitle">For Students</p>
                <p class="card-text">We build the next generation of data specialists through internships and webinars.</p>
                <!-- <a href="/en/education" class="btn btn-primary btn-full" style="background-color: var(--color-indigo);">Discover new Knowledge</a> -->
            </div>
        </div>
    </div>
</section>

{% include storytelling_feature.html
   title="Data Storytelling Example"
   intro="A closer look at how we turn Open Data into clear, engaging narratives."
   featured_id="burnout"
   bg_color="gray"
   more_url="/en/services/#examples"
   more_label="View more stories" %}

{% include people_carousel.html
   bg_color="white"
   title="People at ODON"
   intro="Meet three people behind ODON - this week Nooshin, Clemens and Wolfgang!"
   profile_label="Profile" %}










