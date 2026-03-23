---
layout: page
title: Open Data
lang: en
ref: opendata
permalink: /en/open-data/
last_updated: "2025-03-23 08:30"
---

<!-- START --- Intro section ----------------------->
<section class="section bg-white">
    <div class="container">
        <div class="content-section">
            <h2>
                What is Open Data?
            </h2>
            <p>
                 Although the term "Open Data" seems intuitive and self-explanatory, there is no single universally agreed-upon definition. In most cases the domain and field of application guides the definition. (We compiled a list of definitions from popular sources, which can be found further down.)
            </p>
            <p>
                In our daily work with data, we see two aspects regularly emerging:
            </p>
            <ol>
                <li>
                    <b>Legal Openness</b><br>
                    Can I legally use and reuse this data?
                </li>
                <li>
                    <b>Technical Openness</b><br>
                    Can I actually access and use the data easily?
                </li>
            </ol>
            <p>
                Since our work is not limited to one field, we needed a way to be able to handle data in a consistent way that works independent of a domain-based definition or field and we came up with <b>ODON's Data Maturity Framework</b>, that you can also see applied in ODON's Data Catalog. 
            </p>
        </div>
    </div>
</section>

<!-- START - ODON's Data Maturity Framework -->
<section class="section bg-gray">
    <div class="container">
        <div class="content-section">
            <h2>
                ODON's Data Maturity Framework
            </h2>
            <p>
                ODON's Data Maturity Framework (ODMF) assesses data openness across two dimensions: legal and technical. This framework helps evaluate how open data is for reuse, independent of domain-specific definitions.
            </p>
            <h3>Legal Openness Levels</h3>
            <table>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Definition</th>
                        <th>Indicators</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>L1 - Closed/Undefined</td>
                        <td>No clear legal permission for reuse</td>
                        <td>
                            <ul>
                                <li>Restriction: No explicit license is provided</li>
                                <li>Restriction: Terms of use are missing or unclear</li>
                                <li>Restriction: Default copyright applies</li>
                            </ul>
                            <p>If any restriction is present, the data is L1.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>L2 - Restricted</td>
                        <td>License exists but limits reuse significantly</td>
                        <td>
                            <ul>
                                <li>A license is explicitly provided</li>
                                <li>License is publicly accessible</li>
                                <li>Restriction: License contains restrictive clauses, such as:
                                    <ul>
                                        <li>No commercial use</li>
                                        <li>No derivatives</li>
                                        <li>Usage limited to specific groups or purposes</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>All indicators must apply for this level.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>L3 - Open with Conditions</td>
                        <td>Reusable with minimal obligations</td>
                        <td>
                            <ul>
                                <li>License is clearly stated and accessible</li>
                                <li>License allows:
                                    <ul>
                                        <li>Commercial use</li>
                                        <li>Modification</li>
                                    </ul>
                                </li>
                                <li>Only light obligations, such as:
                                    <ul>
                                        <li>Attribution</li>
                                        <li>Share-alike (optional, depending on strictness)</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>All indicators must apply for this level.</p>
                            <p>Typical licenses: Attribution-style licenses</p>
                        </td>
                    </tr>
                    <tr>
                        <td>L4 - Fully Open</td>
                        <td>No legal barriers</td>
                        <td>
                            <ul>
                                <li>Explicit open license or public domain dedication</li>
                                <li>Allows:
                                    <ul>
                                        <li>Commercial use</li>
                                        <li>Modification</li>
                                        <li>Redistribution</li>
                                    </ul>
                                </li>
                                <li>No mandatory obligations (or only trivial ones like attribution optional)</li>
                            </ul>
                            <p>All indicators must apply for this level.</p>
                            <p>Typical licenses: Public domain / CC0-like</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>Technical Openness Levels</h3>
            <table>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Definition</th>
                        <th>Indicators</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>T1 - Not Usable</td>
                        <td>Data cannot be effectively reused</td>
                        <td>
                            <ul>
                                <li>Restriction: Not machine-readable (e.g., scanned PDF, image)</li>
                                <li>Restriction: No structured format</li>
                                <li>Restriction: Cannot be extracted without significant effort</li>
                            </ul>
                            <p>If any restriction is present, the data is T1.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>T2 - Accessible but Limited</td>
                        <td>Technically accessible, but with barriers</td>
                        <td>
                            <ul>
                                <li>Machine-readable format exists</li>
                                <li>Data can be downloaded or accessed</li>
                                <li>Restriction: One or more limitations:
                                    <ul>
                                        <li>Proprietary format (e.g., XLSX only)</li>
                                        <li>Poor structure (merged cells, inconsistent schema)</li>
                                        <li>No metadata or documentation</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>All indicators must apply for this level.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>T3 - Structured & Standardized</td>
                        <td>Data is well-structured and usable</td>
                        <td>
                            <ul>
                                <li>Non-proprietary, structured format (CSV, JSON, XML)</li>
                                <li>Consistent schema and data structure</li>
                                <li>Encoding and formats are consistent</li>
                                <li>Basic metadata available:
                                    <ul>
                                        <li>Field descriptions</li>
                                        <li>Update frequency</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>All indicators must apply for this level.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>T4 - Fully Open & Interoperable</td>
                        <td>Data is optimized for reuse and integration</td>
                        <td>
                            <ul>
                                <li>Meets all T3 requirements</li>
                                <li>Uses open standards (e.g., standard vocabularies, formats)</li>
                                <li>Stable identifiers (IDs, URIs)</li>
                                <li>Versioning or update tracking available</li>
                                <li>Available via:
                                    <ul>
                                        <li>API and/or bulk download</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>All indicators must apply for this level.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
<!-- END - ODON's Data Maturity Framework -->


{% include quote_section.html quote="“Open Data is data that can be freely used, processed, modified, and shared by anyone.”" author="Open Definition" bg="bg-gray" %}

<section class="section bg-white">
    <div class="container">
        <div class="content-section">
            <p>
                This definition comes from the <a href="https://opendefinition.org/" target="_blank" rel="noopener">Open Definition</a>. In practice, Open Data enables much more, including:
            </p>
            <ul>
                <li>
                    <span class="bullet">•</span>
                    <span><b>Transparent governance</b><br>
                        Open Data makes public information openly accessible. When data on budgets, infrastructure, demographics, or environmental indicators is published openly, citizens, journalists, and organisations can see how decisions are made and how public resources are used.<br>
                        Transparency builds trust and allows people to verify information independently and engage more actively in public discourse.<br>
                        <i>Example</i>: A city publishes its budget as Open Data. Citizens and NGOs analyse how funds are allocated across education, transport, and social services, and raise informed questions in public discussions.</span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span><b>Evidence-based decisions</b><br>
                        Open Data enables decisions grounded in facts rather than assumptions. By combining openly available datasets with domain knowledge, organisations and policymakers can evaluate options, measure outcomes, and adjust strategies based on real-world evidence.<br>
                        As a result, policies become more effective and resource allocation improves.<br>
                        <i>Example</i>: A regional authority uses Open Data on traffic flows, population density, and air quality to decide where to introduce traffic-calming measures, leading to targeted and measurable improvements.</span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span><b>Innovation across sectors</b><br>
                        Open Data acts as a catalyst for innovation by lowering barriers to access information. Startups, researchers, non-profits, and established organisations can build new services, products, and insights on top of shared datasets.<br>
                        Because the same data can be reused in many contexts, innovation extends beyond technology into healthcare, education, mobility, and the public sector.<br>
                        <i>Example</i>: A startup combines Open Data on public transport and weather to build an app that helps commuters plan more reliable routes; researchers use the same data to study mobility patterns and improve urban planning.</span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span><b>Collaboration and learning</b><br>
                        Open Data creates a shared foundation of information. When data is openly available, people from different disciplines can work together and build upon existing knowledge instead of starting from scratch.<br>
                        In turn, this supports education, cross-sector collaboration, and continuous learning.<br>
                        <i>Example</i>: Students, researchers, and developers use the same Open Data APIs in courses, hackathons, and research projects; insights and tools from one context are reused and improved in another.</span>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- END --- Intro section ----------------------->

<!-- START - Characteristics Section -->
<section class="section bg-gray">
    <div class="container">
        <div class="content-section">
            <h2>
                Key Characteristics of Open Data
            </h2>
        </div>
        <div class="characteristics-grid">
        <div class="characteristic-card">
            <div class="characteristic-header">
            <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </div>
            <div>
                <h3>Machine-Readability</h3>
            </div>
            </div>
            <p>Open Data should be provided in formats that can be easily read and processed by computers. This facilitates the analysis and integration of the data into a wide variety of applications.</p>
        </div>
        <div class="characteristic-card">
            <div class="characteristic-header">
            <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <div>
                <h3>Transparency</h3>
            </div>
            </div>
            <p>The publication of Open Data promotes transparency, especially for public administration data — strengthening public trust and traceability of decisions, as described in the section on transparent governance above.</p>
        </div>
        <div class="characteristic-card">
            <div class="characteristic-header">
            <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
            <div>
                <h3>Licensing</h3>
            </div>
            </div>
            <p>Open Data is published under an open license that allows use, redistribution, and modification. Clear, open licenses such as Creative Commons (e.g. CC BY, CC0) make it easy for others to know what they are allowed to do with the data.</p>
        </div>
        <div class="characteristic-card">
            <div class="characteristic-header">
            <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            </div>
            <div>
                <h3>Reusability &amp; Value Creation</h3>
            </div>
            </div>
            <p>Open Data can be reused in many contexts, enabling innovation and the development of new applications, services, or business models. Companies and organisations can use it to improve services, streamline processes, or tap into new markets.</p>
        </div>
        </div>
    </div>
</section>
<!-- END - Characteristics Section -->

<!-- START - ODON's Role section -->
<section class="section bg-white">
    <div class="container">
        <div class="content-section">
            <h2>
                ODON’s Role in Open Data
            </h2>
            <p>Open Data is an enabler of transparency, better decisions, innovation, and knowledge sharing — values that lie at the heart of ODON’s work.</p>
            <p>ODON contributes to this Open Data ecosystem in three main ways:</p>
            <ul>
                <li>
                    <span class="bullet">•</span>
                    <span><b>Data Services</b> — Supporting organisations in using Open Data for evidence-based decisions. <a href="/{{ page.lang }}/services/">Learn more</a></span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span><b>APIs</b> — Making Open Data accessible and machine-readable to support innovation across sectors. <a href="/{{ page.lang }}/apis/">Learn more</a></span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span><b>Education</b> — Educating people about Open Data to promote collaboration and learning. <a href="/{{ page.lang }}/education/">Learn more</a></span>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- END - ODON's Role section -->

<!-- START - Research & papers -->
<section class="section bg-gray">
    <div class="container">
        <div class="content-section">
            <h2>
                Research &amp; papers on Open Data
            </h2>
            <p>
                For readers who want to go deeper into Open Data, the following academic papers provide useful overviews and case studies on how Open (Government) Data is used, what impact it has, and which challenges remain.
            </p>
            <ul>
                <li>
                    <span class="bullet">•</span>
                    <span>
                        <b><a href="https://pubmed.ncbi.nlm.nih.gov/36158525/" target="_blank" rel="noopener">Open government data: A systematic literature review of empirical research</a></b><br>
                        <i>Bernd W. Wirtz, Jan C. Weyerer, Marcel Becker, Wilhelm M. Müller (2022)</i><br>
                        A comprehensive review of 169 empirical studies on Open Government Data, organising the field into an Antecedents–Decisions–Outcomes framework and identifying key research gaps.
                    </span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span>
                        <b><a href="https://content.iospress.com/articles/information-polity/ip160012" target="_blank" rel="noopener">Utilization of open government data: A systematic literature review of types, conditions, effects and users</a></b><br>
                        <i>Igbal Safarov, Albert Meijer, Stephan Grimmelikhuijsen (2017)</i><br>
                        Summarises how Open Government Data is actually used in practice, which factors enable or hinder reuse, and what kinds of effects different user groups experience.
                    </span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span>
                        <b><a href="https://doi.org/10.1109/ACCESS.2024.3414282" target="_blank" rel="noopener">Identifying the Evolution of Open Government Data Initiatives and Their User Engagement</a></b><br>
                        <i>Abdul Aziz, Dagoberto José Herrera-Murillo, Javier Nogueras-Iso, Javier Lacasta, Francisco J. Lopez-Pellicer (2024)</i><br>
                        Proposes a methodology to analyse the maturity and user engagement of Open Data portals over time, using social media signals from 27 European Open Government Data initiatives.
                    </span>
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- END - Research & papers -->

<!-- START - Learn more -->
<section class="section bg-white">
    <div class="container">
        <div class="content-section">
            <h2>
                Learn more
            </h2>
            <ul>
                <li><a href="https://opendefinition.org/" target="_blank" rel="noopener">Open Definition</a> — The standard for “open” in relation to data and content</li>
                <li><a href="/{{ page.lang }}/api-documentation/">API Documentation</a> — How to use ODON’s Open Data APIs</li>
            </ul>
        </div>
    </div>
</section>
<!-- END - Learn more -->

<!-- START - List of Definitions and Sources -->
<section class="section bg-gray">
    <div class="container">
        <div class="content-section">
            <h2>
                List of Definitions and Sources
            </h2>
            <p>
                Here you can find some of the definitions that exist on Open Data. For your convenience, we added also the source.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>blah</td>
                        <td>source</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
<!-- END - List of Definitions and Sources -->
