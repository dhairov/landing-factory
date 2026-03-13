# DevPartners Landing Factory

Infrastructure for generating **personalized landing pages for account-based marketing campaigns**.

Stack:

- Astro
- Netlify
- Cloudflare (DNS / routing)
- AI-assisted content generation (Manus)

The system allows generating **multiple personalized landing pages using reusable templates and structured data**.

---

# Architecture Overview

Landing pages are generated using the following model:

```text
Template + Company Data + Assets
```

**Templates** define page structure and layout.  
**Company data** defines personalized content.  
**Assets** contain images and visual materials.

Routing is handled via **dynamic slug pages**.

---

# Project Structure

```text
src/

components/        reusable landing sections
layouts/           base landing layouts
pages/

[slug].astro       dynamic landing rendering
index.astro
thank-you.astro

content/           landing content data

public/

assets/            images and static assets
_redirects         redirect configuration

netlify/

functions/         backend logic (form events)
```

---

# Core Landing Components

Landing pages are assembled from reusable components:

```text
Hero
Problem
Solution
Proof
CTA
FAQ
Form
Analytics
```

These components together form landing templates.

---

# Creating a New Landing

To create a new landing page:

1. Create a landing data file
2. Attach company images
3. Generate a slug
4. Deploy preview
5. Verify layout and form

Detailed instructions are located in:

```text
LANDING_CREATION_GUIDE.md
```

---

# Forms and Analytics

Lead forms are processed using **Netlify Forms**.

Form submission events are handled via:

```text
netlify/functions/submission-created.ts
```

Analytics tracking is implemented using:

```text
src/components/Analytics.astro
```

Full setup documentation:

```text
FORMS_AND_ANALYTICS_GUIDE.md
```

---

# Development

Install dependencies:

```text
npm install
```

Run development server:

```text
npm run dev
```

Build production bundle:

```text
npm run build
```

Preview production build locally:

```text
npm run preview
```

---

# Deployment

Deployment is handled automatically by **Netlify**.

Each commit triggers a new build and deploy.

Production domain is managed via **Cloudflare DNS**.

---

# Important Notes

This repository is a **landing generation system**, not a single static website.

Never:

- duplicate templates
- create standalone HTML pages
- bypass the template system

All landing pages should be created as **template-driven instances**.
