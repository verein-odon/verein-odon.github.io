---
layout: page
title: APIs
lang: de
ref: api
permalink: /de/apis/
---

Der Zweck von ODON ist es, die Nutzung, Bereitstellung und Veröffentlichung offener Daten zu fördern. Ein Weg, dies zu erreichen, besteht darin, APIs für offene Daten bereitzustellen. Im Folgenden findet ihr eine Übersicht über alle von uns zur Verfügung gestellten APIs.

Da wir diese APIs im Rahmen unserer finanziellen Möglichkeiten betreiben und Missbrauch verhindern möchten, ist eine einfache Registrierung erforderlich. Nach der Anmeldung erhaltet ihr ein URL-Token, mit dem ihr jede unserer APIs für eine festgelegte Anzahl von Anfragen ohne weitere Einschränkungen nutzen könnt.  Dazu schreibt ihr bitte eine Email an [info@odon.at](mailto:info@odon.at).

Solltet ihr mehr Anfragen benötigen, könnt ihr euch als außerordentliches Mitglied registrieren, um eine höhere Anfragerate zu erhalten.

Für Wünsche und Anregungen zu neuen APIs sind wir immer offen, bitte schickt uns eine Email an [info@odon.at](mailto:info@odon.at) oder kontaktiert einen von unseren Mitgliedern.

<div class="api-search-wrapper">
  <label for="api-search" class="api-search-label">Filter APIs</label>
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
        <a href="{{ api.url }}" target="_blank" rel="noopener">api-eu-2</a>
      </td>
      <td class="api-description">{{ api.description }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<p class="api-no-results" id="api-no-results" hidden>
  No APIs match your search. Try a different keyword.
</p>

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
