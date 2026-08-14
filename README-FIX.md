# Sakshyam Research Institute — build and CMS fix

This version deliberately keeps People, Projects and Insights as Markdown files with YAML frontmatter. The Astro collections are therefore `type: content`, while Pages CMS uses the supported `yaml-frontmatter` format.

Important: replace the repository contents with this package rather than merging the new files over the old repository. In particular, the old malformed `src/content/people/*.md` files must be overwritten.

Key fixes:
- Pages CMS `format: md` changed to the supported `format: yaml-frontmatter` for People, Projects and Insights.
- Media root changed to `public/images` / `/images`, allowing existing People images and newly uploaded images to use the same media schema.
- Existing People Markdown entries contain valid frontmatter for Astro.
- Home hero uses the Evidence → Implementation → Inclusion visual treatment and modernized layout.
