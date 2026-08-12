# Sakshyam Research Institute — Pages CMS

This repository is configured for Pages CMS.

IMPORTANT: `.pages.yml` is a hidden file because its name begins with a dot. It MUST remain at the root of this repository:

    .pages.yml
    package.json
    astro.config.mjs
    content/
    public/
    src/

Do not put `.pages.yml` inside another folder.

On macOS Finder, press **Command + Shift + .** to show hidden files if you need to see `.pages.yml`.

## CMS content areas

- Site settings — logos, favicon, branding, colors, contact information
- Homepage
- People
- Projects
- Insights
- Publications
- Research areas
- Services
- Site pages

## Deployment

Cloudflare Pages:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

Pages CMS reads `.pages.yml` from the repository root. The official documentation describes `.pages.yml` as the single source of truth for the repository configuration.
