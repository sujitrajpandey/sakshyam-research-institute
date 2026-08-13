# Sakshyam Research Institute website

Astro + Pages CMS website for Sakshyam Research Institute.

## Homepage design

The homepage now follows the approved visual direction:

- Hero headline: **Research that informs. Action that delivers. Change that includes.**
- Three flowing evidence/implementation/inclusion bands leading to **Inclusive Impact**.
- Logo-derived teal, blue-grey and white palette.
- Two hero CTAs: **Explore our research** and **Get in touch**.
- Immediately below the hero: **Evidence grounded in context** with the approved description and three cards:
  - Research — Academic & applied research
  - Policy — Evidence based policy
  - Strategy — Decision support for organizations
- Events, selected projects, latest insights and collaboration CTA follow below.

## Pages CMS

`.pages.yml` is configured for editable people, events, projects, services, insights and page content. The homepage's headline, What We Do heading/text/cards, CTA and metadata are editable in Pages CMS.

Event Upcoming/Past display is determined by the event date on the frontend; the legacy status field is optional for compatibility.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The environment used to prepare this package could not complete `npm install` because the npm registry request timed out, so the production build could not be executed here. A GitHub/Cloudflare build should run the normal dependency installation and Astro build.
