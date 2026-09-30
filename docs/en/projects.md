---
layout: page
title: "Projects"
lang: en
ref: projects
permalink: /en/projects/
in_nav: false
description: "ODON Projects are real-world implementations in data engineering, data storytelling, and education. Submit your project idea and start a conversation with us."
last_updated: "2026-09-24"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section" markdown="1">

# ODON Projects

ODON Projects are real-world implementations we take on in three core areas:

- **Data Engineering** — collecting, cleaning, and structuring data so it can actually be used.
- **Data Storytelling** — turning data into clear, engaging narratives, visualisations, and dashboards.
- **Education** — internships, workshops, and learning collaborations around open data.

If you have an idea that fits one of these areas, we'd like to hear about it. One example: [einfach visuell](/tools/einfach-visuell/), a free, in-browser tool for annotating screenshots — no account, no server, nothing leaves your browser.

## Our Requirements

Every project we take on must meet two project-specific conditions:

- The outcome must be **publicly accessible**.
- At least one dataset used must be rated **L3 or above** on our [Open Data Maturity Model](/en/open-data/#odmm) — meaning it is openly licensed and reusable.

Beyond that, what we will and won't take on is governed by our [Code of Conduct](/en/code-of-conduct/). In short: we judge a project by how data is used and whether the work is honest — not by who is behind it. Please give it a read before submitting.

## How It Works

Submitting an idea is the start of a conversation, not a commitment. Once you send your idea, we'll get back to you to discuss what you have in mind, whether it fits our mission, and what shape an implementation could take.

Whether we can implement a project depends on available resources and fit with our mission. We review submissions as they come in and will get back to you with an honest assessment.

## Cost

Most projects are implemented under a service agreement. Some projects may be implemented free of charge — this depends on the project, the resources available, and the openness of the outcome. We'll discuss this when we reply.

## Submit Your Idea

Send us your idea by email, using the address, subject, and template shown below. The template asks four short questions: the project type, a description, a reply-to address (optional), and your consent.

- **Write email** — opens your mail app with the template already filled in.
- **Copy template** — copy the text and paste it into an email.
- **Download (.md)** — the template as a Markdown file (works well as context for AI tools).

</div>
</div>
</section>

{% capture proposal_template %}{% include projects-proposal-template.md %}{% endcapture %}
<section class="section bg-gray" style="border-top: 1px solid var(--color-gray-200);">
  <div class="container">
    <div class="content-section">
      <div class="proposal-actions">
        <a class="btn btn-primary" href="mailto:info@odon.at?subject=Project%20Proposal&amp;body={{ proposal_template | strip | url_encode | replace: '+', '%20' }}">Write email</a>
        <button class="btn btn-secondary" type="button" id="proposal-copy">Copy template</button>
        <a class="btn btn-secondary" href="/assets/downloads/projects/odon-projects-submission-form-v2.0.md" download>Download (.md)</a>
      </div>
      <div class="proposal-email">
        <dl class="proposal-email-header">
          <div class="proposal-email-field">
            <dt>To</dt>
            <dd>info@odon.at</dd>
          </div>
          <div class="proposal-email-field">
            <dt>Subject</dt>
            <dd>Project Proposal</dd>
          </div>
        </dl>
        <pre class="proposal-template"><code id="proposal-template-text">{{ proposal_template | strip | escape }}</code></pre>
      </div>
    </div>
  </div>
</section>

<script>
  (function () {
    var btn = document.getElementById('proposal-copy');
    var code = document.getElementById('proposal-template-text');
    if (!btn || !code) return;

    function selectTemplate() {
      var range = document.createRange();
      range.selectNodeContents(code);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }

    btn.addEventListener('click', function () {
      if (!navigator.clipboard) { selectTemplate(); return; }
      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = 'Copied ✓';
        setTimeout(function () { btn.textContent = 'Copy template'; }, 1500);
      }, selectTemplate);
    });
  })();
</script>
