---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
lang: en
ref: index
list_title: News
show_excerpts: true
---

<!-- START --- Intro section ----------------------->
<section class="section bg-white">
    <div class="container">
        <div class="content-section">
        <h2>
            Welcome to ODON
        </h2>
        <p>
            We build a platform that makes Open Data accessible, understandable, and usable for everyone. Whether you are a developer, researcher, journalist, student, or entrepreneur, our tools help you turn open datasets into meaningful insights and real-world applications.
        </p>
        <p> 
            By providing robust technical infrastructure and intuitive user interfaces, we lower the barriers to using Open Data and actively promote collaboration across communities and organizations. Our team brings together technical excellence and a strong commitment to the societal value of Open Data—working to ensure that data can spark innovation, strengthen transparency, and support impactful projects.<br>
        </p>
        <p>  
            Interested in working with us or learning more?
        </p>
        </div>
    </div>
</section>
<!-- END --- Intro section ----------------------->

<!-- What We Do Section -->
<section class="section bg-gray">
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

{% include people_carousel.html
   bg_color="white"
   title="People at ODON"
   intro="Meet three people behind ODON - this week Nooshin, Clemens and Wolfgang!"
   profile_label="Profile" %}










