# Landing Factory — Creating New Landing Pages

This guide explains how to create new landing pages in the Landing Factory system.

## Overview

Each landing page is defined by a single **content file** in Markdown format. The system automatically generates a live page from this file, making it easy to create and publish landing pages without writing any code.

## How It Works

1.  **Create a content file** in `src/content/landings/` directory
2.  **Define your landing data** in the file's frontmatter (YAML)
3.  **Commit to GitHub**
4.  **Netlify automatically deploys** your new landing page
5.  **Preview before publishing** using Netlify's Deploy Previews

## Step-by-Step Guide

### 1. Create a New Content File

Create a new file in `src/content/landings/` with a descriptive name. Use lowercase and hyphens for the filename.

**Example:** `src/content/landings/my-company.md`

### 2. Define the Landing Page Structure

Every landing file must include a frontmatter section (YAML between `---` markers) with the following required fields:

```yaml
---
slug: my-company
company: My Company Name
headline: Your main headline here
subtitle: Supporting subtitle or tagline
cta: Call-to-action button text
---
```

### 3. Add Optional Content Sections

You can enhance your landing with structured data for different sections:

#### Problems Section
```yaml
problems:
  - title: Problem 1
    description: Description of the first problem
  - title: Problem 2
    description: Description of the second problem
```

#### Benefits/Solution Section
```yaml
benefits:
  - title: Benefit 1
    description: Description of the first benefit
  - title: Benefit 2
    description: Description of the second benefit
```

#### Case Studies / Proof Section
```yaml
caseStudies:
  - company: Client Company A
    challenge: What challenge they faced
    result: What results they achieved
  - company: Client Company B
    challenge: What challenge they faced
    result: What results they achieved
```

#### FAQ Section
```yaml
faqs:
  - question: First frequently asked question?
    answer: Answer to the first question
  - question: Second frequently asked question?
    answer: Answer to the second question
```

### 4. Add Body Content (Optional)

After the frontmatter (the `---` section), you can add additional Markdown content that will be rendered at the bottom of the page:

```markdown
---
slug: my-company
company: My Company
headline: Main Headline
subtitle: Subtitle
cta: Get Started
---

## Additional Section

This is additional content that appears after all the structured sections.

You can use **bold**, *italic*, and other Markdown formatting here.
```

## Complete Example

Here's a complete example of a landing page file:

```markdown
---
slug: saas-startup
company: SaaS Startup Inc
headline: Automate your workflow in minutes
subtitle: The easiest way to streamline your business processes
cta: Start Free Trial
problems:
  - title: Manual Processes Waste Time
    description: Your team spends hours on repetitive tasks that could be automated
  - title: Errors and Inconsistencies
    description: Manual work leads to mistakes that cost money and reputation
  - title: Difficult to Scale
    description: As you grow, manual processes become impossible to manage
benefits:
  - title: Save 20 Hours Per Week
    description: Automation handles repetitive tasks automatically
  - title: 99.9% Accuracy
    description: Eliminate human error with intelligent automation
  - title: Scale Effortlessly
    description: Handle 10x more work without hiring more staff
caseStudies:
  - company: Tech Company A
    challenge: Processing 1000+ orders daily manually
    result: Reduced processing time by 90% and cut errors to near zero
  - company: Enterprise B
    challenge: Inconsistent data entry across departments
    result: Standardized all processes and improved data quality by 95%
faqs:
  - question: How long does setup take?
    answer: Most customers are up and running within 24 hours. Our team provides full onboarding support.
  - question: Can we integrate with our existing tools?
    answer: Yes, we support 200+ integrations with popular business tools.
  - question: What about security?
    answer: We use enterprise-grade encryption and comply with SOC 2, GDPR, and HIPAA standards.
---

## Why Choose Us?

We've helped over 5,000 companies automate their workflows and save millions in operational costs.

Our platform is trusted by companies of all sizes, from startups to Fortune 500 enterprises.
```

## Naming Convention

Use the following naming convention for your landing files:

- **Lowercase only**
- **Hyphens instead of spaces** (e.g., `my-company.md`, not `My Company.md`)
- **Descriptive names** (e.g., `pzs-ceo.md`, `enterprise-solution.md`)

The `slug` field in the frontmatter determines the URL. For example:
- File: `src/content/landings/pzs-ceo.md`
- URL: `https://staging.devpartners.ru/pzs-ceo`

## Publishing Workflow

1.  **Create or edit** a landing file in `src/content/landings/`
2.  **Commit to GitHub** with a descriptive message (e.g., `feat: Add new landing for PZS CEO`)
3.  **Netlify creates a Deploy Preview** automatically (visible in the GitHub pull request)
4.  **Review the preview** to ensure everything looks correct
5.  **Merge to main** when ready
6.  **Netlify deploys to production** automatically

## Redirects

If you need to redirect old URLs to new landing pages, edit the `public/_redirects` file:

```
/old-landing /new-landing 301
/offer-pzs-ceo /pzs-ceo 302
```

## Tips for Best Results

- **Keep headlines concise** (5-10 words)
- **Use clear, benefit-focused language** in subtitles
- **Limit problems to 3-5** for better readability
- **Include 2-4 case studies** for credibility
- **Write FAQs that answer real customer questions**
- **Test your landing** in the Deploy Preview before publishing

## Need Help?

If you encounter any issues or need assistance, please refer to the main project documentation or contact the development team.
