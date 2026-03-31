# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Serve

All commands must be run from the `docs/` directory:

```bash
bundle exec jekyll serve        # local dev server at http://localhost:4000
bundle exec jekyll build        # one-off build to _site/
bundle exec jekyll serve --incremental  # faster rebuilds during active editing
```

The site deploys to GitHub Pages on push to `main`. No CI/CD pipeline — GitHub Pages builds automatically.

## Repository Layout

```
docs/                   Jekyll source root (working directory)
  en/                   English content pages
  de/                   German content pages (partial — not all EN pages have a DE counterpart)
  _data/                YAML data files (apis.yaml, heros.yaml, people.yaml, storytelling.yaml)
  _includes/            Reusable partials
  _layouts/             default → page / home / post
  _posts/en/            English blog posts
  _posts/de/            German blog posts
  assets/main.scss      Single compiled stylesheet (all CSS lives here)
  _config.yml           Site config (title, url, version, OG image defaults)
```

## Bilingual System

Every content page requires three front matter fields for the language system to work:

```yaml
lang: en          # "en" or "de"
ref:  apis        # shared key that links EN and DE versions of the same page
permalink: /en/apis/
```

- **Navigation** is auto-built from all pages where `lang == page.lang` and `in_nav != false`. Pages are sorted alphabetically by `title`. Add `in_nav: false` to exclude a page from the nav (e.g. internships, api-registration, contact).
- **Language switcher** (`_includes/language_switcher.html`) uses `page.ref` to find the counterpart page in the other language.
- **Hero sections** are driven by `_data/heros.yaml`, keyed by `page.ref` and `page.lang`.

## Page Structure Conventions

All content pages follow the pattern established in `en/apis.md` and `en/education.md`:

- Sections alternate `bg-white` / `bg-gray` (`var(--color-gray-50)` = `#f9fafb`)
- Blue callout box: `style="background: #eff6ff; border-left: 3px solid #2563eb; padding: 0.75rem 1rem; border-radius: 0.25rem; margin-top: 1rem;"`
- Grey "coming soon" callout: `style="background: #f9fafb; border-left: 3px solid #d1d5db; ..."`
- Italic closing line: `style="margin-top: 1.5rem; color: var(--color-gray-500); font-style: italic;"` — typically starts with `&#9829;`
- Bullet lists use `<span class="bullet"></span>` (empty — CSS renders a 6×6px blue circle). For numbered steps use `<span class="bullet bullet-num">1.</span>`.
- All "get in touch" / contact links point to `/en/contact/` (not `mailto:`). The `mailto:` link is reserved for the contact page itself.
- 2-space indentation throughout HTML in markdown files.

## Key CSS Patterns

Defined in `assets/main.scss`:

- `.content-section` — constrains text to `max-width: 64rem`; use inside `.container` (max-width 1280px)
- `.section` — `padding: 2rem 0 4em 0`
- `.header` — `position: sticky; top: 0; height: 4rem` — accounts for 4rem overlap when placing content near page top
- `[id] { scroll-margin-top: 5rem }` — applied globally for anchor links

## Data-Driven Components

- **API table** (`en/api-documentation.md`) — rendered from `_data/apis.yaml`. Each entry: `id`, `title`, `description`, `endpoint`, `docs_url`. Uses `| escape` on all user-facing string outputs to prevent HTML injection from description text.
- **Storytelling grid** — rendered via `{% include data-services-grid.html %}`, driven by `_data/storytelling.yaml`.
- **People carousel** — driven by `_data/people.yaml`.

## Embedded Forms

Google Forms are embedded as full-page iframes:

```html
<iframe src="https://docs.google.com/forms/…/viewform?embedded=true"
  style="width: 100%; height: 900px; border: none; display: block;"
  marginheight="0" marginwidth="0">Loading…</iframe>
```

For forms that are the sole content of a page (e.g. `api-registration.md`), use `height: calc(100vh - 6rem)` to fill the viewport.
