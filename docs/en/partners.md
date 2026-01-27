---
layout: page
title: Partners
lang: en
ref: partners
permalink: /en/partners/
in_nav: false
---

<section class="section bg-white">
  <div class="container">
    <h2>Our Partners & Collaborators</h2>
    <p>
      At ODON, we believe that transparency and innovation are best achieved through collaboration. We are proud to work alongside organizations that share our commitment to the Open Data.
    </p>
  </div>
</section>

<section class="section bg-gray">
  <div class="container">
    <div class="partner-table-wrapper">
      <table class="partner-table">
        <thead>
          <tr>
            <th>Partner Name</th>
            <th>Information</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>

            <tr>
                <td class="partner-name"><strong>WIFI Oberösterreich</strong></td>
                <td class="partner-desc">
                    WIFI (Wirtschaftsförderungsinstitut) is Austria's leading partner for vocational training and professional development. Our collaboration focuses on integrating Open Data competencies into professional education and facilitating specialized internships for the <a href="https://www.wifi-ooe.at/karriere/coding-academy" target="_blank">coding_academy</a>.
                </td>
                <td class="partner-url">
                    <a href="https://www.wifi.at/" target="_blank" class="partner-link">Visit Site</a>
                </td>
            </tr>

            <tr>
                <td class="partner-name"><strong>BG/BRG Wels Dr.-Schauer-Straße</strong></td>
                <td class="partner-desc">
                    As an "e-Education Expert" school, Schauergym partners with ODON to bridge the gap between secondary education and modern data literacy. We collaborate on specialized internships and educational projects that introduce students to the technical and societal value of Open Data.
                </td>
                <td class="partner-url">
                    <a href="https://schauergym.at/" target="_blank" class="partner-link">Visit Site</a>
                </td>
            </tr>


        </tbody>
      </table>
    </div>
  </div>
</section>



<section class="section bg-white">
  <div class="container">
    <h2>Become a partner</h2>
    <p>
        We are always looking for collaborators who share our passion for Open Data. If you would like to partner with ODON, please send an inquiry to <a href="mailto:info@odon.at">info@odon.at</a>
    </p>
  </div>
</section>

<style>
    /* --- Partner Section Styling --- */

.partner-section {
    padding: 40px 0 80px 0;
    background-color: #ffffff;
}

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

/* Logo specific styling */
.partner-logo-cell {
    width: 120px;
}

.partner-logo {
    max-width: 100px;
    max-height: 50px;
    height: auto;
    filter: grayscale(100%); /* Optional: makes logos professional/uniform */
    transition: filter 0.3s ease;
}

.partner-table tr:hover .partner-logo {
    filter: grayscale(0%); /* Color returns on hover */
}

.partner-name {
    white-space: nowrap;
    color: #333;
}

.partner-desc {
    min-width: 300px;
    line-height: 1.5;
}

.partner-link {
    color: #0055AA;
    text-decoration: none;
    font-weight: bold;
    white-space: nowrap;
}

.partner-link:hover {
    text-decoration: underline;
}

/* Mobile Tweaks */
@media (max-width: 768px) {
    .partner-table {
        font-size: 0.9rem;
    }
}
</style>