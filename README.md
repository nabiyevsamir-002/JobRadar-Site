# JobRadar AZ — public website

[Live site](https://jobradaraz.com) · Azerbaijani and Russian

![JobRadar AZ preview](og.png)

JobRadar AZ helps people in Azerbaijan discover vacancies from multiple job boards and Telegram groups in one place. Visitors can browse by category, open vacancy detail pages and follow links to the original listings.

## Case study

**Problem.** Job seekers in Azerbaijan have to check several boards and Telegram groups to find relevant openings. Repeated listings and scattered sources make discovery slower.

**Solution.** I built JobRadar AZ as a searchable AZ/RU website backed by a separate private collection and publishing pipeline. Visitors can browse by role or field, open a vacancy page and continue to the original source. The related Telegram bot sends interest-based alerts.

**Technical decisions.** The pipeline generates static pages for GitHub Pages, keeping the public site fast and simple to deploy. Vacancy pages retain original-source links; the ingestion logic and credentials remain private. The public repository contains the rendered product and its refresh history, not the private bot implementation.

**Result and evidence.** The [live site](https://jobradaraz.com) currently shows a searchable vacancy catalogue, category pages and source links. On 3 October 2026 its homepage displayed 3 job-site sources, 24 fields and 600 active vacancies; these are a dated snapshot of the site, not cumulative performance metrics. A live homepage screenshot is below.

### Live homepage — 3 October 2026

![JobRadar AZ live homepage, 3 October 2026](https://github.com/user-attachments/assets/42f97428-e4c2-4b7c-84bc-a86800f1e2bb)


## What this repository contains

This repository holds the **published static website**: generated HTML pages, CSS, JavaScript, images, a blog, sitemap and PWA assets. The ru/ directory contains Russian-language pages; vakansiya/ contains vacancy detail pages. The site is served through GitHub Pages with the custom domain above.

The collection, filtering, notification and publishing bot is maintained in a **separate private repository**. Its source code and deployment credentials are not included here. New site files are generated and published by that pipeline; the commit history shows recurring site refreshes. This distinction matters when reviewing the project: the public repository demonstrates the delivered website, while the full ingestion system is private.

## How it works

1. The private pipeline collects vacancy information from supported sources and filters irrelevant entries.
2. It generates Azerbaijani and Russian pages and publishes the static output here.
3. Users browse the site and visit the original vacancy source to apply. The related Telegram bot can send alerts matched to users' interests.

This is an actively developed project. The live site is the best place to check the current content and user experience.

## Explore locally

Because this repository is the generated site, no build step is required for a basic preview. Run python3 -m http.server 8000, then open http://localhost:8000. Some links and site features may expect the production domain.

## Project links

- [Live website](https://jobradaraz.com)
- [GitHub profile and other AI projects](https://github.com/nabiyevsamir-002)
