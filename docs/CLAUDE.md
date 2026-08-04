# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Serve

All commands must be run from the `docs/` directory:

```bash
bundle exec jekyll serve        # local dev server at http://localhost:4000
bundle exec jekyll build        # one-off build to _site/
bundle exec jekyll serve --incremental  # faster rebuilds during active editing
```

Ruby 3.3.6 (pinned in `.ruby-version`).

`_config.yml` changes require a full server restart — Jekyll does not hot-reload it.

The site uses the `github-pages` gem (not a pinned Jekyll version), so it tracks GitHub Pages' Jekyll. To upgrade: `bundle update github-pages`.

The site deploys to GitHub Pages on push to `main`. No CI/CD pipeline — GitHub Pages builds automatically. Anything committed under `docs/` and not listed in `exclude:` is published.

**Never add `_layouts` / `_includes` / `_sass` to an `include:` list in `_config.yml`.** Jekyll finds them automatically; listing them makes Jekyll copy the raw Liquid templates into `_site/`, where they are served publicly as unrendered source (e.g. `odon.at/_includes/head.html`). Repo docs and scratch space (`CLAUDE.md`, `tmp/`) are kept out of the build via `exclude:`.

## Repository Layout

```
docs/                   Jekyll source root (working directory)
  en/                   English content pages
  de/                   German content pages (partial — not all EN pages have a DE counterpart)
  en/data-stories/      Data-story gallery page (filterable index over the collection)
  _data_stories/        Data Stories collection → /en/data-stories/<slug>/ (the main content type)
  _data/                YAML data files (apis.yaml ~1 MB, heros.yaml, people.yaml)
  _includes/            Reusable partials
  _layouts/             default → page / home / post / data_story
  _posts/en/            English blog posts (YYYY-MM-DD-slug.md)
  _posts/de/            German blog posts (currently empty)
  _drafts/              Unpublished posts — not built, not deployed
  _sass/                Sass partials (minima.scss + minima/ theme overrides)
  assets/main.scss      Single compiled stylesheet (all custom CSS lives here)
  assets/data-stories/  Per-story covers, thumbnails, and self-contained src/ bundles
  assets/downloads/     Downloadable documents (ODMM, project submission form)
  _config.yml           Site config (title, url, banner, collections, defaults, GA4 ID)
  404.html              Custom error page
  sitemap.xml           Hand-written template (loops site.pages, emits hreflang alternates)
  robots.txt            Allow-all + sitemap pointer
  CNAME                 Custom domain (odon.at)
```

## Bilingual System

Content pages carry these front matter fields for the language system to work:

```yaml
title: APIs      # required for nav ordering and sitemap inclusion
lang: en         # "en" or "de"
ref:  apis       # shared key that links EN and DE versions of the same page
permalink: /en/apis/
```

- **Navigation** is auto-built from all pages where `lang == page.lang` and `in_nav != false`. Pages are sorted alphabetically by `title`. Add `in_nav: false` to exclude a page from the nav (e.g. internships, api-registration, contact).
- **Language switcher** (`_includes/language_switcher.html`) uses `page.ref` to find the counterpart page in the other language. A `ref` with no counterpart means the switcher has nothing to link to — keep `ref` values identical across EN/DE.
- **Hero sections** are driven by `_data/heros.yaml`, keyed by `page.ref` then `page.lang`. A page whose `ref` has no entry renders without a hero.
- `permalink` is omitted on `en/index.md` and `de/index.md` (they use `layout: home` and resolve to `/en/` and `/de/`). The root `index.md` is a meta-refresh redirect to `/en/`.
- `last_updated: "YYYY-MM-DD HH:MM"` and `version:` are optional front matter fields; `_includes/page-meta.html` renders a meta bar on `layout: page` when either is present.

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

## Data Stories

The primary content type. Each story is one markdown file in `_data_stories/`, published at `/en/data-stories/<slug>/` via the collection config in `_config.yml`. `layout: data_story` and `lang: en` are applied by `defaults:`, so individual files don't set them.

`_layouts/data_story.html` validates front matter at build time and renders a visible warning block on the page for any missing required field:

`title`, `summary`, `cover_image`, `authors`, `type`, `topics`, `data_sources`

Other commonly used fields: `slug`, `date`, `description`, `cover_image_alt`, `thumbnail`, `thumbnail_alt`, `thumbnail_position`, `image.path`/`image.alt` (Open Graph), `tools`, `note`, `gallery` (max 10 items, each `src`/`alt`/`caption`), `embed.kind: iframe` + `embed.src`, `external_links`, `featured`, `license`/`license_url`, `published: false` to withhold a story.

Each entry in `data_sources` carries ODMM ratings — `odmm_legal` (L1–L4), `odmm_technical` (T1–T4), plus `*_details` prose explaining the rating. `_includes/odmm-badge.html` renders the badge pair and links to `/en/open-data/#odmm`.

Interactive stories ship as a self-contained bundle under `assets/data-stories/<slug>/src/` (own HTML/CSS/JS/data) and are surfaced via `embed.src` pointing at that directory. Because they are referenced as a directory rather than by filename, individual files inside `src/` will not show up in a path-based grep — do not treat them as unused.

The gallery at `en/data-stories/index.html` sorts `site.data_stories` by `date` descending and builds its type/topic/year filters by mapping over the collection, so a new story appears automatically with no index edit.

## Data-Driven Components

- **API table** (`en/api-documentation.md`) — rendered from `_data/apis.yaml`. Each entry has exactly three keys: `name`, `url`, `description`. The description cell shows `truncatewords: 20` with a "more" toggle whose `data-short`/`data-full` attributes are `| escape`d.
- **Data stories teaser** — `{% include data-stories-teaser.html %}` on `en/index.md`; accepts `title`, `intro`, `bg_color`, `more_url`, `more_label`.
- **People carousel** — `{% include people_carousel.html %}` on `en/index.md`; accepts `bg_color`, `title`, `intro`, `profile_label`. Driven by `_data/people.yaml`; shows at most the first three uncommented entries. Images resolve against `assets/images/people/`.

## Analytics & Consent

GA4 (`google_analytics` in `_config.yml`) loads only when `JEKYLL_ENV=production` **and** the visitor opts in via the banner in `_includes/google-analytics.html`, which implements Google Consent Mode v2. The choice is stored in `localStorage` under `odon_analytics_consent` and can be changed from the Privacy Policy page (section 5).

The banner deliberately uses `prefs-bar` / `prefs-btn` class names rather than `cookie-*`: cookie-notice filter lists (EasyList Cookie, Fanboy's Annoyances, and Brave — which blocks consent notices by default) cosmetically hide `cookie-*` elements, so visitors would never see the prompt and GA would never load. Do not rename these.

## Site-Wide Banner

Controlled in `_config.yml` under the `banner:` key:

```yaml
banner:
  enabled: true
  id: "some-unique-id"   # change to force returning visitors to see it again (stored in localStorage)
  message: "Banner text here"
  url: ""                # optional link; leave empty for no link
  url_label: "Learn more"
```

## Embedded Forms

Google Forms are embedded as full-page iframes:

```html
<iframe src="https://docs.google.com/forms/…/viewform?embedded=true"
  style="width: 100%; height: 900px; border: none; display: block;"
  marginheight="0" marginwidth="0">Loading…</iframe>
```

Use `{% include google_form.html src="…" height="900px" %}`. For forms that are the sole content of a page (e.g. `api-registration.md`), use `height: calc(100vh - 6rem)` to fill the viewport.
