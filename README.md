# DevPartners Landing Factory

Infrastructure for creating and publishing **offer landing pages** on **staging.devpartners.ru** with a reusable fixed structure and variable visual/content layers.

## What This Repository Does

This repository is the **single source of truth** for DevPartners landing pages that are published on the staging domain before any later transfer to other platforms or domains.

A landing in this project is **not a custom one-off page**. It is an instance of a **stable landing framework** where only the following layers should change from project to project:

| Layer | Can change | Must stay stable |
|---|---|---|
| Copy | Headlines, body text, CTA text, microcopy | Section order and component logic |
| Visual style | Colors, gradients, cards, spacing accents, typography tuning | General page anatomy |
| Images | Hero, section visuals, backgrounds, CTA image | Semantic role of each visual block |
| Routing | Public offer alias | Canonical internal landing slug structure |

## Fixed Landing Structure

All new landings should follow the same base structure. The structure is fixed; only **styles, images, and text** are adapted per landing.

```text
1. Hero
2. Trigger / insight blocks
3. Qualifier block
4. Comparison / positioning block
5. Journey / process block
6. Evolution / life-stage block
7. Final CTA with form
8. Thank-you flow and analytics hooks
```

This rule exists to keep the system maintainable, comparable across campaigns, and easy to iterate.

## Routing Model

Each landing has two URLs:

| URL type | Example | Purpose |
|---|---|---|
| Internal canonical route | `/745-kvartal/` | Real Astro page slug inside the project |
| Public offer route | `/offer-745` | Human-facing campaign route on `staging.devpartners.ru` |

The **canonical page** is implemented as an Astro page, while the **public offer route** is declared in `public/_redirects` and rewrites to the canonical page.

### Rule

For every new landing, always create:

1. a canonical page route in `src/pages/`
2. a public staging alias in `public/_redirects`

Example:

```text
src/pages/745-kvartal.astro
public/_redirects:
/offer-745 /745-kvartal/ 200
```

As a result, the landing is available at:

```text
https://staging.devpartners.ru/offer-745
```

## Project Structure

```text
src/
  components/        reusable landing sections and helpers
  layouts/           shared layouts
  pages/             Astro pages
    745-kvartal.astro
    [slug].astro
    index.astro
    thank-you.astro

public/
  assets/            images and static assets
  _redirects         public staging aliases and rewrites

netlify/
  functions/         backend logic for forms and submission events
```

## Standard Workflow for a New Landing

| Step | Required action |
|---|---|
| 1 | Create or duplicate a canonical landing page in `src/pages/{slug}.astro` |
| 2 | Keep the fixed section structure |
| 3 | Replace only content, images, and styling layers |
| 4 | Put assets into `public/assets/{slug}/` |
| 5 | Add a public alias to `public/_redirects` using `/offer-...` format |
| 6 | Run `npm run build` |
| 7 | Push to `main` and verify the page on `staging.devpartners.ru` |

## Publishing Rule for staging.devpartners.ru

Publication to the staging domain is considered complete only when **both** conditions are met:

| Requirement | Definition |
|---|---|
| Canonical route works | `https://staging.devpartners.ru/{slug}/` returns the landing |
| Public offer route works | `https://staging.devpartners.ru/offer-{name}` opens the same landing |

The preferred campaign URL for sharing is the **public offer route**, not the internal slug.

## Forms and Analytics

Every landing should preserve the shared lead-capture mechanics:

| Element | Requirement |
|---|---|
| Form handling | Netlify Forms |
| Anti-spam | Honeypot |
| Attribution | Hidden UTM fields |
| Tracking | CTA click and form submission events |
| Post-submit | Thank-you or success flow |

Implementation details are documented in `FORMS_AND_ANALYTICS_GUIDE.md`.

## Additional Documentation

| File | Purpose |
|---|---|
| `LANDING_CREATION_GUIDE.md` | Detailed landing creation workflow |
| `FORMS_AND_ANALYTICS_GUIDE.md` | Form and analytics implementation rules |
| `public/_redirects` | Public staging aliases |
| `netlify.toml` | Build and deploy configuration |

## Development Commands

```text
npm install
npm run dev
npm run build
npm run preview
```

## Non-Negotiable Rules

| Do | Do not |
|---|---|
| Reuse the fixed landing structure | Invent a new section order for each landing |
| Change copy, images, and visual style | Break routing conventions |
| Publish via canonical page + public offer alias | Share internal slugs as the main campaign URL |
| Verify on `staging.devpartners.ru` after push | Treat each landing as an unrelated standalone site |
