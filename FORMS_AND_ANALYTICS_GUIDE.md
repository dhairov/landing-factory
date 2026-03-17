# Forms and Analytics Setup Guide

This guide explains the standard form and analytics rules for DevPartners landing pages published on **staging.devpartners.ru**.

## Scope

This repository uses a **fixed landing structure**. Form behavior should remain stable across all landing pages even when copy, visual design, and images change.

| Layer | May change | Must remain stable |
|---|---|---|
| Form styling | Colors, spacing, card treatment, label presentation | Submission logic |
| Form copy | Headline, helper text, CTA button text | Field purpose and tracking |
| Landing visuals | Backgrounds, supporting images, section composition | Attribution and lead capture |

## Standard Form Rules

Every landing page must include a lead form that preserves the same data and tracking model.

| Element | Requirement |
|---|---|
| Form transport | Netlify Forms |
| Form identity | Unique form name tied to landing slug |
| Anti-spam | Honeypot field |
| Attribution | Hidden UTM fields |
| Tracking | CTA click and form submission events |
| Routing context | Landing slug or landing identifier |

## Required Fields

By default, each landing form should support the following fields:

| Field | Purpose |
|---|---|
| Name | How to address the lead |
| Phone or messenger | Fast contact channel |
| Email | Alternative contact channel |
| Message / request details | Qualification context |
| UTM parameters | Attribution |
| Landing slug | Submission source |

The exact visual layout may change, but the capture model should stay intact.

## How Forms Work

1. The landing form is embedded directly into the Astro page.
2. The form submits through **Netlify Forms**.
3. Hidden fields capture UTM parameters and landing context.
4. Submission events are tracked for analytics.
5. Leads appear in the Netlify Forms dashboard.

## Viewing Form Submissions

1. Log in to Netlify.
2. Open the relevant site.
3. Go to **Forms**.
4. Review submissions together with landing source and UTM context.

## Public URL Context

Every landing is expected to open on a public campaign URL on the staging domain.

| Route type | Example |
|---|---|
| Canonical landing route | `https://staging.devpartners.ru/745-kvartal/` |
| Public campaign route | `https://staging.devpartners.ru/offer-745` |

The preferred URL for sharing and campaign usage is the **public offer alias**.

## UTM Tracking

The system captures the following UTM fields when present in the URL:

| Parameter | Meaning |
|---|---|
| `utm_source` | Traffic source |
| `utm_medium` | Traffic channel |
| `utm_campaign` | Campaign name |
| `utm_content` | Creative or content variant |
| `utm_term` | Search term or audience term |

Example:

```text
https://staging.devpartners.ru/offer-745?utm_source=google&utm_medium=cpc&utm_campaign=offer_745_launch
```

## Tracking Events

Each landing should preserve three analytics actions:

| Event | Trigger |
|---|---|
| Page view | Visitor opens the landing |
| CTA click | Visitor clicks a key CTA |
| Form submission | Visitor submits the lead form |

## Form Customization Rule

You may change the **visual arrangement** of fields, including moving from multiple columns to a vertical stack, but you should not break:

- field naming
- submission destination
- honeypot logic
- UTM capture
- landing source identification
- submit analytics

## Testing on staging.devpartners.ru

Before considering a landing ready, verify the form on the staging domain.

| Check | Requirement |
|---|---|
| Form renders correctly | Yes |
| Fields align visually | Yes |
| Submission succeeds | Yes |
| Hidden attribution fields remain present | Yes |
| Public offer route works | Yes |

## Best Practice

> A DevPartners landing may change in tone, design, imagery, and CTA wording, but its lead-capture logic must remain stable, measurable, and publishable through the public `staging.devpartners.ru/offer-*` route.
