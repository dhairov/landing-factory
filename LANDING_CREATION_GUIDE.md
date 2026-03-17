# Landing Factory — Creating New Landing Pages

This guide defines the **standard process** for creating and publishing new DevPartners landing pages on **staging.devpartners.ru**.

## Core Principle

A landing page in this repository is created from a **fixed structural framework**. From one landing to another, the following parts may change:

| Layer | What changes |
|---|---|
| Copy | Headlines, subheads, descriptive text, CTA wording |
| Visual style | Color palette, gradients, card treatment, spacing accents |
| Images | Hero image, section images, background photos, CTA visual |
| Offer alias | Public-facing `/offer-*` route |

The following parts should remain stable:

| Stable element | Rule |
|---|---|
| Section order | Keep the same landing anatomy |
| Section semantics | Each block keeps its role in the conversion narrative |
| Form logic | Netlify form, honeypot, UTM fields, submission tracking |
| Publishing model | Canonical slug + public offer alias on staging.devpartners.ru |

## Fixed Landing Anatomy

Every landing should follow the same base composition:

```text
1. Hero
2. Trigger / insight section
3. Qualifier section
4. Comparison / positioning section
5. Journey / process section
6. Evolution / life-stage section
7. Final CTA with form
8. Thank-you / post-submit path
```

This means that new landings should be treated as **variations of one stable template system**, not as fully independent site concepts.

## URL and Publishing Model

Every landing must have two coordinated routes.

| Route type | Example | Purpose |
|---|---|---|
| Canonical internal route | `/745-kvartal/` | Actual Astro page |
| Public staging route | `/offer-745` | Shareable campaign URL |

The canonical route is implemented as a page in `src/pages/`. The public route is implemented in `public/_redirects` as a rewrite to the canonical route.

### Required Rule

For each new landing:

```text
1. Create src/pages/{slug}.astro
2. Put assets into public/assets/{slug}/
3. Add a rewrite in public/_redirects
```

Example:

```text
src/pages/745-kvartal.astro
public/assets/745-kvartal/*
public/_redirects:
/offer-745 /745-kvartal/ 200
```

Public URL:

```text
https://staging.devpartners.ru/offer-745
```

## Step-by-Step Workflow

### 1. Create the Canonical Landing Page

Create a new Astro page in `src/pages/`.

**Example:**

```text
src/pages/offer-name.astro
```

Use lowercase and hyphens in the filename.

### 2. Reuse the Stable Structure

Build the new landing by keeping the same fixed structure. Do not redesign the information architecture from scratch.

Instead, adapt:

- headings
- paragraphs
- CTA wording
- imagery
- color treatment
- section styling

### 3. Add Assets

Store all landing-specific images in:

```text
public/assets/{slug}/
```

Example:

```text
public/assets/745-kvartal/hero_hero.webp
public/assets/745-kvartal/aha1_silence.webp
public/assets/745-kvartal/footer_cta.webp
```

### 4. Add the Public Offer Alias

Open `public/_redirects` and add a rewrite from the campaign route to the canonical page.

```text
/offer-745 /745-kvartal/ 200
```

Use **200 rewrite**, not a temporary redirect, when the goal is to serve the same landing under the public route.

### 5. Preserve Shared Form Logic

Every landing must keep the shared form mechanics:

| Element | Must be present |
|---|---|
| Netlify form attributes | Yes |
| Honeypot field | Yes |
| Hidden UTM fields | Yes |
| Landing slug/form identification | Yes |
| Submit tracking | Yes |

If the form layout changes visually, the capture logic still must remain intact.

### 6. Build and Verify

Before pushing, run:

```text
npm run build
```

Then verify both URLs:

```text
https://staging.devpartners.ru/{slug}/
https://staging.devpartners.ru/offer-{name}
```

### 7. Publish

Push the changes to `main`. Publication is considered finished only after the landing opens correctly on the **public offer route** on `staging.devpartners.ru`.

## Recommended Naming Convention

| Element | Convention |
|---|---|
| Canonical slug | lowercase-hyphenated |
| Public alias | `/offer-{campaign}` |
| Asset folder | same as canonical slug |
| Image filenames | semantic, lowercase, underscored or hyphenated |

Examples:

```text
src/pages/745-kvartal.astro
public/assets/745-kvartal/
/offer-745
```

## Routing Examples

```text
/offer-745 /745-kvartal/ 200
/offer-pzs-ceo /pzs-ceo/ 200
/offer-pzs-owner /pzs-owner/ 200
```

## Completion Checklist

| Check | Required |
|---|---|
| Canonical Astro page created | Yes |
| Assets stored in landing-specific folder | Yes |
| Fixed structure preserved | Yes |
| Copy/style/images adapted | Yes |
| Public offer alias added to `_redirects` | Yes |
| Build passes | Yes |
| `staging.devpartners.ru/offer-*` opens the landing | Yes |

## Important Rule

> New DevPartners landings are not separate mini-sites. They are standardized offer pages built from one stable structure, with variation only in **copy, visuals, and styling**, and published on **staging.devpartners.ru** via a public `/offer-*` alias.
