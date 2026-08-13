import { defineCollection, z } from 'astro:content';

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    site_title: z.string(),
    tagline: z.string(),
    logo: z.string(),
    logo_mark: z.string(),
    favicon: z.string().optional(),
    email: z.string(),
    linkedin_url: z.string().optional(),
    location_text: z.string(),
    copyright_text: z.string(),
    footer_blurb: z.string(),
    work_with_us_label: z.string(),
    work_with_us_url: z.string(),
    colors: z.object({
      ink: z.string(),
      ink_soft: z.string(),
      teal_deep: z.string(),
      teal: z.string(),
      teal_mid: z.string(),
      teal_light: z.string(),
      bg: z.string(),
      bg_soft: z.string(),
      line: z.string(),
    }),
    typography: z.object({
      heading_font: z.string(),
      body_font: z.string(),
      base_font_size: z.number(),
      heading_scale: z.number(),
      body_line_height: z.number(),
    }),
  }),
});

const home = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      eyebrow: z.string().optional(),
      heading: z.string(),
      subheading: z.string(),
      image: z.string(),
      primary_button_label: z.string(),
      primary_button_url: z.string(),
      secondary_button_label: z.string(),
      secondary_button_url: z.string(),
    }),
    what_we_do: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      description: z.string(),
      pillars: z.array(
        z.object({
          number: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    events_section: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      description: z.string(),
    }),
    projects_section: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      description: z.string(),
      button_label: z.string(),
    }),
    insights_section: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      description: z.string(),
      button_label: z.string(),
    }),
    cta: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      description: z.string(),
      button_label: z.string(),
      button_url: z.string(),
    }),
  }),
});

const about = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      subheading: z.string(),
    }),
    purpose: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
    }),
    how_we_work: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
    }),
    contact: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      email: z.string(),
    }),
  }),
});

const services = defineCollection({
  type: 'data',
  schema: z.object({
    number: z.string(),
    title: z.string(),
    summary: z.string(),
    bullets: z.array(z.string()),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    category: z.enum(['researcher', 'management', 'advisor']),
    photo: z.string().optional(),
    short_bio: z.string(),
    expertise: z.array(z.string()).default([]),
    linkedin_url: z.string().optional(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['ongoing', 'completed']),
    year: z.string(),
    summary: z.string(),
    geographic_focus: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Research Note', 'Policy Brief', 'Article', 'Report', 'Blog']),
    date: z.date(),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const events = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    type: z.enum(['upcoming', 'past']),
    date: z.string(),
    location: z.string(),
    description: z.string(),
    image: z.string().optional(),
    rsvp_label: z.string().optional(),
    rsvp_url: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  settings,
  home,
  about,
  services,
  people,
  projects,
  insights,
  events,
};
