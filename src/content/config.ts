import { z, defineCollection } from 'astro:content';

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    site_title: z.string(),
    logo: z.string(), // Will map to Full Logo.png
    favicon: z.string(), // Will map to favicon.png
    base_font_size: z.string(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const peopleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['Researchers', 'Management', 'Advisors']),
    photo: z.string(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    status: z.enum(['Upcoming', 'Past']),
    rsvp_link: z.string().optional(),
  }),
});

export const collections = {
  'settings': settingsCollection,
  'pages': pagesCollection,
  'people': peopleCollection,
  'events': eventsCollection,
};
