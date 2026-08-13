# Sakshyam Research Institute website

Astro + Pages CMS website for Sakshyam Research Institute.

## Final homepage design

- Hero follows the approved reference composition: **Research that informs. Action that delivers. Change that includes.**
- Three flowing Evidence / Implementation / Inclusion bands lead to **Inclusive Impact**.
- Hero and homepage copy are editable in Pages CMS.
- Immediately below the hero: **Evidence grounded in context** with the approved description and three cards:
  - Research — Academic & applied research
  - Policy — Evidence based policy
  - Strategy — Decision support for organizations
- Events, selected projects, latest insights and collaboration CTA follow below.

## CMS

`.pages.yml` is the single source of truth for the Pages CMS configuration. It provides editable:

- Site settings
- All five principal pages
- People, with category assignment: Researchers / Management / Advisors
- Events, including images, descriptions and RSVP
- Projects
- Services
- Insights and PDFs
- Rich-text bodies
- Images and documents

Upcoming/Past event display is calculated from the event date, so editors do not have to maintain a separate status field.

## Deployment

Cloudflare Pages should use:

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Pages CMS commits content changes to the configured GitHub branch; Cloudflare Pages then rebuilds the site from those commits.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The preparation environment used for this package could not complete dependency installation because the npm registry request timed out. The source package has therefore been subjected to a static preflight audit (YAML/frontmatter, CMS configuration, content schema consistency, missing references, and source-level route checks), but a local Astro production build could not be executed here.
