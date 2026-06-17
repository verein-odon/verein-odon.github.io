---
layout: page
title: Support Us
nav_order: 7
lang: en
ref: supporters
permalink: /en/supporters/
last_updated: "2026-06-16 00:00"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>What Your Support Enables</h2>
      <p>
        Every contribution, large or small, helps ODON maintain and expand its Open Data infrastructure, fund education programmes, and support organisations that rely on Open Data to do good.
      </p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li>
          <span class="bullet"></span>
          <div>
            <b>Tools &amp; Concepts</b> — We create tools and frameworks like the <a href="/en/open-data/#odmm">Open Data Maturity Model (ODMM)</a> that make working with Open Data more accessible.
          </div>
        </li>
        <li>
          <span class="bullet"></span>
          <div>
            <b>Projects for Good</b> — We support projects that use Open Data to create positive societal impact.
          </div>
        </li>
        <li>
          <span class="bullet"></span>
          <div>
            <b>Education</b> — We build Open Data literacy across organisations and individuals.
          </div>
        </li>
        <li>
          <span class="bullet"></span>
          <div>
            <b>Internships</b> — We offer hands-on internships so people can learn practical data skills in a real-world setting.
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="section bg-gray">
  <div class="container">
    <div class="content-section">
      <h2>How to Support Us</h2>
      <div style="margin-top: 1.5rem;">
        <div style="display: flex; border-bottom: 2px solid var(--color-gray-200);">
          <button id="tab-sepa" onclick="showTab('sepa')"
            style="padding: 0.75rem 1.25rem; border: none; background: none; cursor: pointer; font-weight: 500; font-size: 0.9375rem; color: var(--color-blue-600); border-bottom: 2px solid var(--color-blue-600); margin-bottom: -2px;">
            Bank Transfer
          </button>
          <button id="tab-wise" onclick="showTab('wise')"
            style="padding: 0.75rem 1.25rem; border: none; background: none; cursor: pointer; font-weight: 500; font-size: 0.9375rem; color: var(--color-gray-500); border-bottom: 2px solid transparent; margin-bottom: -2px;">
            Wise
          </button>
        </div>
        <div id="tabpanel-sepa" style="padding: 1.25rem 0; display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: flex-start;">
          <div style="flex: 1; min-width: 14rem;">
            <p style="font-weight: 500; margin-bottom: 0.75rem;">EUR (SEPA)</p>
            <div class="table-container">
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr>
                      <td style="color: var(--color-gray-500); width: 40%;">Account holder</td>
                      <td>ODON</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">IBAN</td>
                      <td>BE34 9052 4840 5990</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">BIC / Swift</td>
                      <td>TRWIBEB1XXX</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">Bank</td>
                      <td>Wise</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">Reference</td>
                      <td>I am supporting Open Data!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div style="flex: 1; min-width: 14rem;">
            <p style="font-weight: 500; margin-bottom: 0.75rem;">GBP (United Kingdom)</p>
            <div class="table-container">
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr>
                      <td style="color: var(--color-gray-500); width: 40%;">Account holder</td>
                      <td>ODON</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">Account number</td>
                      <td>28949278</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">Sort code</td>
                      <td>23-08-01</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">IBAN</td>
                      <td>GB03 TRWI 2308 0128 9492 78</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">BIC / Swift</td>
                      <td>TRWIGB2LXXX</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">Bank</td>
                      <td>Wise</td>
                    </tr>
                    <tr>
                      <td style="color: var(--color-gray-500);">Reference</td>
                      <td>I am supporting Open Data!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="tabpanel-wise" style="display: none; padding: 1.25rem 0;">
          <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
            <div>
              <img src="/assets/images/wise-qr-code.png" alt="Scan to support via Wise" style="max-width: 200px; display: block;">
            </div>
            <div>
              <a href="https://wise.com/pay/business/odon" target="_blank" rel="noopener">wise.com/pay/business/odon</a>
            </div>
          </div>
        </div>
      </div>
      <script>
        function showTab(tab) {
          ['sepa', 'wise'].forEach(function(t) {
            var active = t === tab;
            document.getElementById('tab-' + t).style.color = active ? 'var(--color-blue-600)' : 'var(--color-gray-500)';
            document.getElementById('tab-' + t).style.borderBottom = active ? '2px solid var(--color-blue-600)' : '2px solid transparent';
            document.getElementById('tabpanel-' + t).style.display = active ? (t === 'sepa' ? 'flex' : 'block') : 'none';
          });
        }
      </script>
      <p style="margin-top: 1.5rem; color: var(--color-gray-500); font-style: italic;">
        &#9829; Your support makes Open Data accessible to everyone. Questions? <a href="/en/contact/">Get in touch</a>.
      </p>
    </div>
  </div>
</section>
