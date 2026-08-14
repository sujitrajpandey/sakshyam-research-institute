import { z, defineCollection } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hero_image: z.string().optional(),
  }),
});

const peopleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['Researchers', 'Management', 'Advisors']),
    photo: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
    status: z.enum(['Upcoming', 'Past']),
    rsvp_link: z.string().optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'people': peopleCollection,
  'events': eventsCollection,
};
