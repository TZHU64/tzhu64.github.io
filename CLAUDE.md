# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based academic personal website using the [al-folio](https://github.com/alshedivat/al-folio) theme. It is built with Ruby/Jekyll and deployed to GitHub Pages at `https://tzhu64.github.io`.

## Common Commands

- **Install dependencies:** `bundle install` (Ruby) and `npm install` (Node/Prettier)
- **Local development:** `bundle exec jekyll serve --livereload` (or `docker compose up` using the prebuilt image)
- **Build site:** `bundle exec jekyll build`
- **Format code:** `npx prettier . --write`
  - Prettier uses `@shopify/prettier-plugin-liquid` (configured in `.prettierrc`)
- **Production build (local):**
  ```bash
  export JEKYLL_ENV=production
  bundle exec jekyll build
  purgecss -c purgecss.config.js
  ```
- **Manual deploy:** `./bin/deploy` (builds, purges CSS, and force-pushes to `gh-pages` branch)

## Architecture

### Jekyll Structure

- **`_config.yml`**: Central configuration including site metadata, plugin settings, and third-party library CDN URLs with SRI hashes.
- **`_layouts/`**: Liquid templates. Key ones:
  - `about.liquid` — homepage/profile layout
  - `bib.liquid` — publication bibliography rendering (highly customized for badges, thumbnails, and author limits)
  - `cv.liquid` — CV layout consuming `_data/cv.yml`
  - `distill.liquid` — Distill-style article layout
  - `post.liquid` / `page.liquid` — standard content layouts
- **`_includes/`**: Reusable partials. Notable ones:
  - `scripts.liquid` — conditionally loads third-party and custom JS based on page frontmatter flags (e.g., `page.mermaid`, `page.chart`, `page.map`)
  - `head.liquid` / `header.liquid` / `footer.liquid` — core page structure
  - `metadata.liquid` — Open Graph and Schema.org meta tags
  - `figure.liquid`, `video.liquid`, `audio.liquid` — media shortcodes
- **`_pages/`**: Markdown source for site pages (`about.md`, `cv.md`, `projects.md`, `publications.md`, etc.)
- **`_data/cv.yml`**: Structured CV data rendered by `cv.liquid`
- **`_data/socials.yml`**: Social link definitions

### Custom Ruby Plugins (`_plugins/`)

The site relies on several custom Jekyll plugins that are not part of the standard al-folio gem:

- **`external-posts.rb`**: Fetches RSS feeds or individual URLs defined in `_config.yml` under `external_sources` and generates `_posts` documents dynamically at build time.
- **`google-scholar-citations.rb`** / **`inspirehep-citations.rb`**: Liquid tags that scrape live citation counts. They cache results per-build to avoid duplicate requests.
- **`download-3rd-party.rb`**: When `third_party_libraries.download` is `true` in `_config.yml`, this plugin downloads CDN assets locally.
- **`cache-bust.rb`**: Provides a `bust_file_cache` Liquid filter for cache-busting local asset URLs.
- **`details.rb`**: Generates per-publication detail pages from BibTeX entries.
- **`hide-custom-bibtex.rb`**: Filters internal BibTeX keywords from rendered output.

### Assets

- **`assets/js/`**: Custom site scripts. `theme.js` handles light/dark/system mode toggling and propagates the theme to loaded charting libraries (Mermaid, ECharts, Plotly, Vega-Lite).
- **`assets/js/search/`**: Client-side search implementation.
- **`assets/css/`** and **`_sass/`**: Stylesheets. Bootstrap and MDB are loaded via CDN; custom SCSS lives in `_sass/`.
- **`assets/img/`**: Source images. The `jekyll-imagemagick` plugin (enabled in `_config.yml`) generates responsive WebP variants at build time. ImageMagick must be installed on the build machine.

### Collections

- `news` — short updates/announcements
- `projects` — project portfolio entries
- `books` — reading list / book reviews

### Publications

Publications are sourced from `_bibliography/papers.bib` and rendered with `jekyll-scholar`. The `bib.liquid` layout controls how entries are displayed, including thumbnail support, author truncation, and Altmetric/Dimensions/Google Scholar/InspireHEP badges.

### Deployment

- **GitHub Actions** (`.github/workflows/deploy.yml`) builds and deploys the `_site` directory to GitHub Pages automatically on pushes to `main`.
- The deploy workflow installs ImageMagick and `nbconvert`, runs `bundle exec jekyll build`, then runs `purgecss` to remove unused CSS before publishing.
- **Prettier checks** run on PRs via `.github/workflows/prettier.yml`.

### Important Configuration Notes

- `include: ["_pages", "_scripts"]` in `_config.yml` ensures these underscored directories are included in the build.
- `terser:` and `jekyll-minifier:` blocks configure JS/CSS minification for production.
- `lazy_loading_images: true` adds `loading="lazy"` to images automatically.
- `_scripts/` contains JS snippets (e.g., `search.liquid.js`) that are embedded into pages via Liquid includes.
