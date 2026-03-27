---
layout: page
title: API & Data Documentation
lang: en
ref: api-documentation
permalink: /en/api-documentation/
in_nav: false
last_updated: "2026-03-27 18:00"
---

<section class="section bg-white">
  <div class="container">
    <div class="content-section">
      <h2>API Documentation</h2>
      <p>Using the API is easy and includes the following steps:</p>
      <ul>
        <li>
          <span class="bullet" style="margin-top: 0;">1.</span>
          <span>Make sure you have an API token. If you don't have one, <a href="/en/api-registration/">register here</a>.</span>
        </li>
        <li>
          <span class="bullet" style="margin-top: 0;">2.</span>
          <span>Choose a dataset from the list below and note its URL endpoint.</span>
        </li>
        <li>
          <span class="bullet" style="margin-top: 0;">3.</span>
          <span>Append your token to the URL and you're ready to query.</span>
        </li>
      </ul>
      <pre><code>https://api-eu-2.odon.at/agricultural-land-sq-km/data?api-token=YOUR_TOKEN</code></pre>
      <p><small>URL paths use kebab-case; JSON keys use snake_case.</small></p>
    </div>
  </div>
</section>

<section class="section bg-gray">
  <div class="container">
    <div class="content-section">
      <h2>Data Documentation</h2>
    </div>
    <div style="max-width: 96rem; margin: 0 auto;">
      <div class="api-search-wrapper">
        <label for="api-search" class="api-search-label">Search datasets</label>
        <div class="api-search-input-container">
          <span class="api-search-icon">🔍</span>
          <input
            type="text"
            id="api-search"
            class="api-search-input"
            placeholder="Type to filter by name, URL, or description..."
            autocomplete="off"
          />
          <button type="button" id="api-search-clear" class="api-search-clear" aria-label="Clear search">
            ✕
          </button>
        </div>
        <p class="api-search-hint">
          Showing <span id="api-count-visible"></span> of <span id="api-count-total"></span> APIs
        </p>
      </div>

      <table class="api-table" id="api-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Endpoint</th>
            <th>Description</th>
          </tr>
        </thead> 
        <tbody>
          {% for api in site.data.apis %}
          <tr>
            <td class="api-name">{{ api.name }}</td>
            <td class="api-url">
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <a href="{{ api.url }}" target="_blank" rel="noopener">EU-2</a>
                <button class="api-copy-btn" data-url="{{ api.url }}" title="Copy URL" aria-label="Copy URL">📋</button>
              </div>
            </td>
            <td class="api-description">
              <span class="api-desc-text">{{ api.description | truncatewords: 20 }}</span>
              <button class="api-desc-toggle" data-short="{{ api.description | truncatewords: 20 | escape }}" data-full="{{ api.description | escape }}">more</button>
            </td>
          </tr>
          {% endfor %}
        </tbody>
      </table>

      <p class="api-no-results" id="api-no-results" hidden>
        No APIs match your search. Try a different keyword.
      </p>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('api-search');
    const clearButton = document.getElementById('api-search-clear');
    const table = document.getElementById('api-table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const countVisibleEl = document.getElementById('api-count-visible');
    const countTotalEl = document.getElementById('api-count-total');
    const noResultsEl = document.getElementById('api-no-results');

    const totalCount = rows.length;
    countTotalEl.textContent = totalCount.toString();

    function normalize(text) {
      return text.toLowerCase();
    }

    function updateCountsAndNoResults(visibleCount) {
      countVisibleEl.textContent = visibleCount.toString();
      if (visibleCount === 0) {
        noResultsEl.hidden = false;
      } else {
        noResultsEl.hidden = true;
      }
    }

    function filterRows() {
      const query = normalize(searchInput.value.trim());
      let visibleCount = 0;

      if (!query) {
        // Show all rows when query is empty
        rows.forEach(row => {
          row.style.display = '';
        });
        updateCountsAndNoResults(totalCount);
        return;
      }

      rows.forEach(row => {
        const text = normalize(row.textContent || '');
        if (text.includes(query)) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      updateCountsAndNoResults(visibleCount);
    }

    // Debounce to avoid firing on every single keystroke too aggressively
    let debounceTimer;
    searchInput.addEventListener('input', function () {
      window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(filterRows, 100);
    });

    clearButton.addEventListener('click', function () {
      searchInput.value = '';
      searchInput.focus();
      filterRows();
    });

    // Initial counts
    updateCountsAndNoResults(totalCount);

    // Expand/collapse description
    document.querySelectorAll('.api-desc-toggle').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const span = btn.previousElementSibling;
        const isExpanded = btn.textContent.trim() === 'less';
        span.textContent = isExpanded ? btn.dataset.short : btn.dataset.full;
        btn.textContent = isExpanded ? 'more' : 'less';
      });
    });

    // Copy to clipboard
    document.querySelectorAll('.api-copy-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        navigator.clipboard.writeText(btn.getAttribute('data-url')).then(function() {
          btn.textContent = '✓';
          setTimeout(function() { btn.textContent = '📋'; }, 1500);
        });
      });
    });
  });
</script>

<style>
  .api-search-wrapper {
    max-width: 500px;
    margin: 1.5rem 0 1rem;
  }

  .api-search-label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 600;
    font-size: 0.95rem;
    color: #555;
  }

  .api-search-input-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .api-search-icon {
    position: absolute;
    left: 0.8rem;
    font-size: 0.9rem;
    pointer-events: none;
  }

  .api-search-input {
    width: 100%;
    padding: 0.6rem 2.2rem 0.6rem 2.1rem;
    border-radius: 999px;
    border: 1px solid #ccc;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
    background: #fafafa;
  }

  .api-search-input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    background: #fff;
  }

  .api-search-clear {
    position: absolute;
    right: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.85rem;
    opacity: 0.6;
    padding: 0.2rem;
  }

  .api-search-clear:hover {
    opacity: 1;
  }

  .api-search-hint {
    margin-top: 0.4rem;
    font-size: 0.85rem;
    color: #777;
  }

  .api-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    font-size: 0.95rem;
    background: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .api-table thead {
    background: #f3f4f6;
  }

  .api-table th,
  .api-table td {
    padding: 0.7rem 0.8rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    vertical-align: top;
  }

  .api-table th:nth-child(2),
  .api-table td:nth-child(2) {
    width: 7rem;
    white-space: nowrap;
  }

  .api-table th {
    font-weight: 600;
    font-size: 0.9rem;
    color: #374151;
  }

  .api-table tbody tr:nth-child(even) {
    background: #fafafa;
  }

  .api-table a {
    text-decoration: none;
    word-break: break-all;
  }

  .api-table a:hover {
    text-decoration: underline;
  }

  .api-desc-toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    color: #2563eb;
    padding: 0 0.2rem;
    margin-left: 0.2rem;
    vertical-align: baseline;
  }

  .api-desc-toggle:hover {
    text-decoration: underline;
  }

  .api-copy-btn {
    background: transparent;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.1rem 0.35rem;
    margin-left: 0.4rem;
    color: #6b7280;
    vertical-align: middle;
  }

  .api-copy-btn:hover {
    background: #f3f4f6;
    color: #374151;
  }

  .api-no-results {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #b91c1c;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    background: #fef2f2;
    border: 1px solid #fee2e2;
  }

  @media (max-width: 640px) {
    .api-table th:nth-child(2),
    .api-table td:nth-child(2) {
      word-break: break-all;
    }
  }
</style>