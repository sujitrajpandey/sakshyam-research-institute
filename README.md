# Sakshyam Research Institute — CMS-enabled website

This version uses **Astro + GitHub + Cloudflare Pages + Pages CMS**.

Pages CMS is a free, open-source GitHub-based CMS. It edits the content and media directly in the repository; Cloudflare Pages then rebuilds the static Astro site from those changes.

## What you can edit without touching code

- Homepage text, buttons, hero image, feature cards, principles, and CTA
- Site name, logo, contact details, social links
- People: add/edit/remove profiles and photos
- Projects: add/edit/remove projects, status, images, summaries and full descriptions
- Insights: add/edit/remove articles, dates, images and rich text
- Publications: add/edit/remove reports and upload PDFs
- Research areas
- Services
- About and Contact page content

## What remains code-managed

The visual design, navigation structure, typography, layout, animations and templates remain in Astro/CSS. This is intentional: editors can safely change content without accidentally breaking the website design.

## Deploy

Build command: `npm run build`

Output directory: `dist`

Framework: Astro

Site: `https://sakshyamresearch.org`

## Use Pages CMS

1. Push this repository to GitHub.
2. Open the Pages CMS hosted app: https://app.pagescms.org
3. Sign in with GitHub.
4. Install the Pages CMS GitHub App on the `sakshyam-research-institute` repository.
5. Open the repository in Pages CMS.
6. The `.pages.yml` file defines the editor interface.
7. Edit content and click Save. Pages CMS writes the change back to GitHub.
8. Cloudflare Pages detects the GitHub change and deploys the new version.

No database is required for the website itself.

## Free stack

- Astro — static site generator
- GitHub — repository and content source of truth
- Cloudflare Pages — hosting/deployment
- Pages CMS — content/media editing

Pages CMS is free and open source; its hosted app uses GitHub as the source of truth.


## CMS-managed branding

The `Site settings` section in Pages CMS controls the site's global branding. You can change the header logo, footer logo, browser favicon, brand symbol, logo width, and the complete site-wide color palette without editing Astro/CSS code.

### Branding fields

- Main/header logo
- Footer logo
- Brand symbol
- Browser favicon
- Header logo width
- Primary color
- Dark primary/footer color
- Accent color
- Light accent color
- Pale accent background
- Soft page background
- Main text color
- Secondary text color
- Border color
- Text color for dark backgrounds

Colors use six-digit HEX values such as `#36454F`. Changes made in Pages CMS are committed to GitHub; Cloudflare Pages then rebuilds the site automatically.

### Branding workflow

1. Open Pages CMS and select **Site settings**.
2. Replace the logo or favicon, or change a HEX color.
3. Save/commit the change.
4. GitHub receives the commit.
5. Cloudflare Pages automatically rebuilds and publishes the site.
