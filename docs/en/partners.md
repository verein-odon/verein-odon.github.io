---
layout: page
title: Partners
lang: en
ref: partners
permalink: /en/partners/
in_nav: false
---

<section class="section bg-gray">
  <div class="container">
    <h2>Our Partners & Collaborators</h2>
    {% comment %}
        <p>
        </p>
    {% endcomment %}
    <div class="partner-table-wrapper">
        <table class="partner-table">
            {% comment %} 
            <thead>
                <tr>
                    <th>Partner Name</th>
                    <th>Information</th>
                </tr>
            </thead>
            {% endcomment %}
            <tbody>

                <tr>
                    <td><strong><a href="https://www.wifi-ooe.at/" target="_blank">WIFI Oberösterreich</a></strong></td>
                    <td>
                        WIFI (Wirtschaftsförderungsinstitut) is Austria's leading partner for vocational training and professional development. Our collaboration focuses on integrating Open Data competencies into professional education and facilitating specialized internships for the <a href="https://www.wifi-ooe.at/karriere/coding-academy" target="_blank">coding_academy</a>.
                    </td>
                </tr>

                <tr>
                    <td><strong><a href="https://schauergym.at/" target="_blank">BG/BRG Wels</a></strong></td>
                    <td>
                        As an "e-Education Expert" school, BG/BRG Wels partners with ODON to bridge the gap between education and modern data literacy. We collaborate on specialized internships and educational projects that introduce students to the technical and societal value of Open Data.
                    </td>
                </tr>

            </tbody>
        </table>
        </div>
  </div>
</section>

<section class="section bg-white">
  <div class="container">
    <h2>Become a Partner</h2>
    <p>
        We are always looking for collaborators who share our passion for Open Data. If you would like to partner with ODON, please send an inquiry to <a href="mailto:info@odon.at">info@odon.at</a>
    </p>
  </div>
</section>

<style>
/* Scrollable wrapper for mobile responsiveness */
.partner-table-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.partner-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-family: inherit; /* Uses your site's font */
    background-color: #ffffff;
}

.partner-table thead th {
    text-align: left;
    background-color: #f8f9fa;
    color: #333;
    padding: 15px;
    border-bottom: 3px solid #0055AA; /* ODON Blue */
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.partner-table td {
    padding: 20px 15px;
    border-bottom: 1px solid #eee;
    vertical-align: middle;
    color: #555;
}

.partner-table tr:hover .partner-logo {
    filter: grayscale(0%); /* Color returns on hover */
}


/* Mobile Tweaks */
@media (max-width: 768px) {
    .partner-table {
        font-size: 0.9rem;
    }
}
</style>