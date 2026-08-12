import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/people' }),
  schema: z.object({ name: z.string(), role: z.string(), photo: z.string(), order: z.number().default(99), bio: z.string() })
});
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({ title: z.string(), category: z.string(), status: z.string(), featured: z.boolean().default(false), image: z.string().optional(), summary: z.string(), order: z.number().default(99) })
});
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/insights' }),
  schema: z.object({ title: z.string(), type: z.string(), date: z.string(), featured: z.boolean().default(false), image: z.string().optional(), summary: z.string(), author: z.string() })
});
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/publications' }),
  schema: z.object({ title: z.string(), type: z.string(), date: z.string(), file: z.string().optional(), description: z.string() })
});
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z.object({ title: z.string(), hero_title: z.string(), description: z.string(), slug: z.string() })
});
const researchAreas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/research-areas' }),
  schema: z.object({ title: z.string(), description: z.string(), order: z.number().default(99) })
});
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/services' }),
  schema: z.object({ title: z.string(), description: z.string(), order: z.number().default(99) })
});
const site = defineCollection({
  loader: glob({ pattern: 'site.yml', base: './content' }),
  schema: z.object({
    site_title: z.string(), short_name: z.string(), logo: z.string(), symbol: z.string(), tagline: z.string(), description: z.string(),
    email: z.string(), phone_primary: z.string(), phone_secondary: z.string(), address: z.string(), website: z.string(), linkedin: z.string(), facebook: z.string().optional(),
    footer_logo: z.string().optional(), favicon: z.string().optional(), logo_width: z.number().default(155),
    colors: z.object({
      primary: z.string(), primary_dark: z.string(), accent: z.string(), accent_light: z.string(),
      surface: z.string(), background: z.string(), text: z.string(), muted: z.string(), border: z.string(), light_text: z.string()
    })
  })
});
const homepage = defineCollection({
  loader: glob({ pattern: 'homepage.yml', base: './content' }),
  schema: z.object({
    hero_kicker: z.string(), hero_title: z.string(), hero_text: z.string(), hero_image: z.string().optional(),
    hero_primary_label: z.string(), hero_primary_url: z.string(), hero_secondary_label: z.string(), hero_secondary_url: z.string(),
    hero_art_title: z.string(), hero_art_text: z.string(), intro_kicker: z.string(), intro_title: z.string(), intro_text: z.string(),
    features: z.array(z.object({tag:z.string(),title:z.string(),text:z.string(),link_label:z.string(),link_url:z.string()})),
    current_research_kicker: z.string(), current_research_title: z.string(), current_research_text: z.string(),
    values: z.array(z.object({title:z.string(),text:z.string()})),
    cta_kicker: z.string(), cta_title: z.string(), cta_text: z.string(), cta_label: z.string(), cta_url: z.string()
  })
});
export const collections = { people, projects, insights, publications, pages, researchAreas, services, site, homepage };
