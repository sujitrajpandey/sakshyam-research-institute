import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = { title: z.string() };
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({ name: z.string(), category: z.enum(['Researchers','Management','Advisors']), position: z.string().optional(), photo: z.string().optional(), shortBio: z.string().optional(), expertise: z.array(z.string()).optional(), education: z.array(z.string()).optional(), linkedin: z.string().optional(), email: z.string().optional(), order: z.number().optional(), active: z.boolean().default(true) })
});
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({ title:z.string(), date:z.coerce.date(), endDate:z.coerce.date().optional(), time:z.string().optional(), location:z.string().optional(), status:z.enum(['Upcoming','Past']).optional(), image:z.string().optional(), summary:z.string(), rsvpEnabled:z.boolean().default(false), rsvpUrl:z.string().optional(), registrationDeadline:z.coerce.date().optional(), featured:z.boolean().default(false) })
});
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({ title:z.string(), status:z.enum(['Ongoing','Completed','Upcoming']).optional(), year:z.string().optional(), client:z.string().optional(), location:z.string().optional(), image:z.string().optional(), summary:z.string(), themes:z.array(z.string()).optional(), researchers:z.array(z.string()).optional(), outputs:z.array(z.string()).optional(), featured:z.boolean().default(false) })
});
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({ title:z.string(), number:z.string().optional(), summary:z.string(), capabilities:z.array(z.string()).optional(), image:z.string().optional(), order:z.number().optional() })
});
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({ title:z.string(), type:z.enum(['Research Note','Policy Brief','Article','Report','Blog']), date:z.coerce.date(), author:z.array(z.string()).optional(), image:z.string().optional(), excerpt:z.string(), pdf:z.string().optional(), project:z.string().optional(), tags:z.array(z.string()).optional(), featured:z.boolean().default(false) })
});
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title:z.string(), pageType:z.enum(['home','about']).default('about'), eyebrow:z.string().optional(), heroTitle:z.string().optional(), heroText:z.string().optional(), whatWeDoTitle:z.string().optional(), whatWeDoText:z.string().optional(), whatWeDoCards:z.array(z.object({number:z.string(),title:z.string(),text:z.string()})).optional(), body:z.string().optional(), pillars:z.array(z.object({number:z.string(),title:z.string(),text:z.string()})).optional(), ctaTitle:z.string().optional(), ctaText:z.string().optional(), ctaLabel:z.string().optional(), ctaUrl:z.string().optional(), metaDescription:z.string().optional() })
});
export const collections = { people, events, projects, services, insights, pages };
