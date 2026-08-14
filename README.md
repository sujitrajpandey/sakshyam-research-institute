# Sakshyam Research Institute — Website

Built with **Astro** + **Tailwind CSS**, content managed through **Pages CMS**, hosted for free on **Cloudflare Pages** with the source on **GitHub**.

Every piece of visible content — logo, colors, fonts/font size, page copy, team members, projects, insights, and events — is editable from Pages CMS. Nothing requires touching code for day-to-day updates.

---

## 1. Push this to GitHub

If you're replacing your existing preliminary-site repo:

```bash
cd sakshyam-website
git init
git add .
git commit -m "Professional site rebuild"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main --force
```

(Use `--force` only if you're intentionally overwriting the old preliminary content in that repo. If you'd rather keep history, push to a new repo instead and just repoint Cloudflare Pages at it in step 3.)

If this is a brand-new repo, create it empty on GitHub first (no README/license), then run the same commands without `--force`.

## 2. Connect Pages CMS

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Install the Pages CMS GitHub App on your account/org, granting it access to this repository.
3. Open the repository in Pages CMS — it will detect the `.pages.yml` file already included at the repo root and load all the editable sections automatically:
   - ⚙️ Site Settings (logo, favicon, colors, fonts, font size, contact info)
   - 🏠 Home Page, 📄 About Page
   - 🛠️ Services, 👥 People, 📊 Projects, 💡 Insights, 📅 Events
4. Edit anything, hit save — Pages CMS commits directly to GitHub.

## 3. Connect Cloudflare Pages

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this repo.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Deploy. Every commit (including ones made through Pages CMS) triggers an automatic rebuild.
4. Under **Custom domains**, attach `sakshyamresearch.org.np` (and `www` if used) — same as your preliminary site, just repoint it at this new Pages project if it's separate from the old one.

Once connected, the full loop is: **edit in Pages CMS → commit to GitHub → Cloudflare rebuilds → live site updates**, usually within a minute or two.

---

## What you can edit from Pages CMS

- **Logo & favicon** — swap the image file used in the header, footer, and browser tab.
- **Colors** — nine hex values (ink, teal shades, backgrounds, borders) driving every color on the site. Defaults were sampled directly from your logo.
- **Fonts & font size** — pick heading/body fonts from a curated list, plus a numeric base font size and a heading-size multiplier. Changing these reflows the *entire* site.
- **Every page's text** — Home, About, Services are structured section-by-section (headings, subheadings, buttons, links).
- **People** — add/edit/remove team members. Each person gets a **Category** dropdown (Researcher / Management / Advisor) that controls which section of the People page they appear in, a photo, short bio (card), full bio (profile page), expertise tags, and a display order.
- **Projects** — title, status (Ongoing/Completed), year, summary, geographic focus, cover image, and a full rich-text description.
- **Insights** — title, category (Research Note / Policy Brief / Article / Report / Blog), date, summary, cover image, and full rich-text body. The Insights page filter bar is generated automatically from whatever categories you use.
- **Events** (homepage, below "What we do") — title, Upcoming/Past type, date, location, image, description. **Upcoming** events show an RSVP button; **Past** ones don't. The RSVP link field accepts anything — a `mailto:` link (the default), a Google Form, Eventbrite, Luma, etc.

## Content status

Structure and copy were migrated from what was already live on `sakshyamresearch.org.np` (your preliminary site). That site's own placeholder notes flagged that real team bios/photos, full project write-ups, and full insight articles still needed to be added — I carried that same placeholder content forward so nothing is lost, but you'll want to replace via Pages CMS:

- Team photos (currently generated initials avatars) and full bios for your 5 known team members
- Any Advisors (none were listed yet — that section will just say "Advisor profiles will be added soon" until you add one)
- Full project and insight article bodies (currently short placeholder paragraphs)

## Local development (optional)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```
