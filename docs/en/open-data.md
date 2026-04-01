---
layout: page
title: Open Data
lang: en
ref: opendata
permalink: /en/open-data/
last_updated: "2026-03-29 00:00"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>What is Open Data?</h2>
      <p>
        Although the term "Open Data" seems intuitive and self-explanatory, there is no single universally agreed-upon definition. In most cases the domain and field of application guides the definition. One can get a feeling for this when looking at the various definitions for Open Data that we compiled <a href="#definitions">here</a>.
      </p>
      <p>
        Though, in our daily work with data, we see two aspects regularly emerging:
      </p>
      <ul>
        <li>
          <span class="bullet"></span>
          <span><b>Legal Openness</b><br>
          Can I legally use and reuse this data?</span>
        </li>
        <li>
          <span class="bullet"></span>
          <span><b>Technical Openness</b><br>
          Can I actually access and use the data easily?</span>
        </li>
      </ul>
      <p>
        Since our work spans many fields, we needed a consistent approach that works independent of any domain-based definition. This led us to develop <b>ODON's Data Maturity Model (ODMM)</b>.
      </p>
      <p style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 0.75rem 1rem; border-radius: 0.25rem; margin-top: 1rem;">
        The ODMM assesses datasets along two dimensions — <b>Legal Openness</b> and <b>Technical Openness</b> — each with four levels, providing a clear, domain-independent classification.
      </p>
    </div>
  </div>
</section>

<section class="section bg-gray">
  <div class="container">
    <div class="content-section">
      <h2 id="odmm">ODON's Data Maturity Model (ODMM) <small style="font-size: 0.6em; font-weight: normal; color: var(--color-gray-500);">v1.2 &middot; 2026-03-29</small></h2>
      <p>
        The framework assesses data along two independent dimensions: <b>Legal Openness</b> and <b>Technical Openness</b>. Each dimension has four levels. A dataset is assigned the level whose indicators all apply — or, for the first level of each dimension, the level that applies when any restriction is present.
      </p>

      <h3>Legal Openness</h3>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Definition</th>
            <th>Indicators</th>
            <th>Classification rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>L1</b><br>Closed / Undefined</td>
            <td>No clear legal permission for reuse</td>
            <td>
              <ul>
                <li>No explicit license is provided</li>
                <li>Terms of use are missing or unclear</li>
                <li>Default copyright applies</li>
              </ul>
            </td>
            <td>If <em>any</em> restriction is present → L1</td>
          </tr>
          <tr>
            <td><b>L2</b><br>Restricted</td>
            <td>License exists but limits reuse significantly</td>
            <td>
              <ul>
                <li>A license is explicitly provided</li>
                <li>License is publicly accessible</li>
                <li>License contains restrictive clauses (e.g. no commercial use, no derivatives, usage limited to specific groups or purposes)</li>
              </ul>
            </td>
            <td>All indicators must apply</td>
          </tr>
          <tr>
            <td><b>L3</b><br>Open with Conditions</td>
            <td>Reusable with minimal obligations</td>
            <td>
              <ul>
                <li>License is clearly stated and accessible</li>
                <li>Allows commercial use and modification</li>
                <li>Only light obligations (e.g. attribution, share-alike)</li>
              </ul>
            </td>
            <td>All indicators must apply<br><br>Typical licenses: attribution-style licenses</td>
          </tr>
          <tr>
            <td><b>L4</b><br>Fully Open</td>
            <td>No legal barriers</td>
            <td>
              <ul>
                <li>Explicit open license or public domain dedication</li>
                <li>Allows commercial use, modification, and redistribution</li>
                <li>No mandatory obligations (or only trivial ones)</li>
              </ul>
            </td>
            <td>All indicators must apply<br><br>Typical licenses: public domain / CC0-like</td>
          </tr>
        </tbody>
      </table>

      <h3>Technical Openness</h3>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Definition</th>
            <th>Indicators</th>
            <th>Classification rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>T1</b><br>Not Usable</td>
            <td>Data cannot be effectively reused</td>
            <td>
              <ul>
                <li>Not machine-readable (e.g. scanned PDF, image)</li>
                <li>No structured format</li>
                <li>Cannot be extracted without significant effort</li>
              </ul>
            </td>
            <td>If <em>any</em> restriction is present → T1</td>
          </tr>
          <tr>
            <td><b>T2</b><br>Accessible but Limited</td>
            <td>Technically accessible, but with barriers</td>
            <td>
              <ul>
                <li>Machine-readable format exists</li>
                <li>Data can be downloaded or accessed</li>
                <li>One or more limitations: proprietary format (e.g. XLSX only), poor structure (merged cells, inconsistent schema), or no metadata / documentation</li>
              </ul>
            </td>
            <td>All indicators must apply</td>
          </tr>
          <tr>
            <td><b>T3</b><br>Structured &amp; Standardized</td>
            <td>Data is well-structured and usable</td>
            <td>
              <ul>
                <li>Non-proprietary, structured format (CSV, JSON, XML)</li>
                <li>Consistent schema and data structure</li>
                <li>Consistent encoding and formats</li>
                <li>Basic metadata available (field descriptions, update frequency)</li>
              </ul>
            </td>
            <td>All indicators must apply</td>
          </tr>
          <tr>
            <td><b>T4</b><br>Fully Open &amp; Interoperable</td>
            <td>Data is optimized for reuse and integration</td>
            <td>
              <ul>
                <li>Meets all T3 requirements</li>
                <li>Uses open standards (e.g. standard vocabularies, formats)</li>
                <li>Stable identifiers (IDs, URIs)</li>
                <li>Versioning or update tracking available</li>
                <li>Available via API and/or bulk download</li>
              </ul>
            </td>
            <td>All indicators must apply</td>
          </tr>
        </tbody>
      </table>

      <h3 id="odmm-version-history" style="margin-top: 2rem;">Version History</h3>
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>1.2</b></td>
            <td>2026-03-29</td>
            <td>Added clarifications to indicators and classification rules</td>
          </tr>
          <tr>
            <td>1.1</td>
            <td>2026-03-24</td>
            <td>Improved wording throughout</td>
          </tr>
          <tr>
            <td>1.0</td>
            <td>2026-03-23</td>
            <td>Overhauled the model from the ground up; introduced four levels per dimension</td>
          </tr>
          <tr>
            <td>0.2</td>
            <td>2025-08-15</td>
            <td>Corrected style and typos</td>
          </tr>
          <tr>
            <td>0.1</td>
            <td>2025-08-10</td>
            <td>Initial implementation of the ODMM</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div id="definitions"></div>
<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>List of Definitions and Sources</h2>
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
            <td><a href="https://opendefinition.org/" target="_blank" rel="noopener">Open Knowledge Foundation<br>Open Definition</a></td>
            <td>"Open data and open content can be freely used, modified, and shared by anyone for any purpose."</td>
          </tr>
          <tr>
            <td><a href="https://data.europa.eu/en/publications/open-data" target="_blank" rel="noopener">European Commission<br>data.europa.eu</a></td>
            <td>"Open data is data that anyone can access, use or share. Open data must be available online in an open format, accompanied by an open licence that allows the data to be re-used freely by anyone for any purpose."</td>
          </tr>
          <tr>
            <td><a href="https://data.worldbank.org/open-data" target="_blank" rel="noopener">World Bank</a></td>
            <td>"Open data refers to data that can be freely used, re-used and redistributed by anyone – subject only, at most, to the requirement to attribute and share alike."</td>
          </tr>
          <tr>
            <td><a href="https://www.oecd.org/en/topics/open-government-data.html" target="_blank" rel="noopener">OECD</a></td>
            <td>"Open government data refers to data produced or commissioned by government or government-controlled entities which can be freely used, reused and redistributed by anyone."</td>
          </tr>
          <tr>
            <td><a href="https://opendatahandbook.org/guide/en/what-is-open-data/" target="_blank" rel="noopener">Open Data Handbook<br>(OKF)</a></td>
            <td>"Open data is data that can be freely used, re-used and redistributed by anyone – subject only, at most, to the requirement to attribute and share alike."</td>
          </tr>
          <tr>
            <td><a href="https://opendatacharter.net/principles/" target="_blank" rel="noopener">International Open Data Charter</a></td>
            <td>"Digital data that is made available with the technical and legal characteristics necessary for it to be freely used, reused, and redistributed by anyone, anytime, anywhere."</td>
          </tr>
          <tr>
            <td><a href="https://en.wikipedia.org/wiki/Open_data" target="_blank" rel="noopener">Wikipedia</a></td>
            <td>"Open data is data that is openly accessible, exploitable, editable and shared by anyone for any purpose, even commercially."</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top: 1.5rem; color: var(--color-gray-500); font-style: italic;">
        &#9829; Want to work with Open Data yourself? Browse our <a href="/en/apis/">APIs</a> or explore our <a href="/en/services/">services</a>.
      </p>
    </div>
  </div>
</section>
