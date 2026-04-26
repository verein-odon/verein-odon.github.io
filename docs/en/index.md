---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
lang: en
ref: index
list_title: Recent Announcements
show_excerpts: true
last_updated: "2025-03-10 14:30"
---


<section class="section bg-white">
  <div class="container">
    <div class="content-section">
    <h2 class="section-title">What We Do</h2>
    <div class="cards-grid">
            <div class="card card-apis">
                <div class="card-icon">
                    <img src="/assets/images/icons/apis.svg" alt="API visualization" loading="lazy">
                </div>
                <h3>APIs for Open Data</h3>
                <p class="membership-subtitle">For Developers and Researchers</p>
                <p class="card-text">We provide access to various Open Data datasets via our APIs.
                </p>
                <div class="card-counter-block">
                    <span class="card-counter-wrap"><span class="card-counter" data-target="1500" data-duration="6000">0</span><span class="card-counter-suffix">+</span></span>
                    <span class="card-counter-label">Number of datasets currently served</span>
                </div>
                <a href="/en/apis/" class="btn btn-primary">APIs</a>
            </div>
            <div class="card">
                <div class="card-icon">
                    <img src="/assets/images/icons/education.svg" alt="Data services" loading="lazy">
                </div>
                <h3>Education on Open Data</h3>
                <p class="membership-subtitle">For Students and Open Data Fans</p>
                <p class="card-text">We build the next generation of data specialists through:</p>
                <ul class="card-text-list">
                    <li>online education</li>
                    <li>internships</li>
                    <li>hackathons</li>
                </ul>
                <a href="/en/education/" class="btn btn-primary">Education</a>
            </div>
            <div class="card">
                <div class="card-icon">
                    <img src="/assets/images/icons/wrench.svg" alt="Data services" loading="lazy">
                </div>
                <h3>Data Services Around Open Data</h3>
                <p class="membership-subtitle">For Organisations and Institutions</p>
                <p class="card-text">From data engineering to storytelling, we help organisations turn raw data into insights and value.
                </p>
                <a href="/en/services/" class="btn btn-primary">Services</a>
            </div>
    </div>
    </div>
  </div>
</section>

<script>
(function () {
  var counterEl = document.querySelector('.card-counter[data-target]');
  if (!counterEl) return;
  var target = parseInt(counterEl.getAttribute('data-target'), 10) || 1500;
  var duration = parseInt(counterEl.getAttribute('data-duration'), 10) || 2000;
  var startTime = null;

  function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
  }

  function runCount(now) {
    if (!startTime) startTime = now;
    var elapsed = now - startTime;
    var progress = Math.min(elapsed / duration, 1);
    var eased = easeOutQuart(progress);
    var value = Math.floor(eased * target);
    counterEl.textContent = value.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(runCount);
    } else {
      counterEl.textContent = target.toLocaleString();
    }
  }

  function startCount() {
    if (counterEl.dataset.started) return;
    counterEl.dataset.started = '1';
    requestAnimationFrame(runCount);
  }

  if (typeof IntersectionObserver !== 'undefined') {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startCount();
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(counterEl);
  } else {
    startCount();
  }
})();
</script>

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
   intro=""
   profile_label="Profile" %}










