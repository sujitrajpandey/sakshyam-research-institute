/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        teal: {
          DEFAULT: 'var(--color-teal)',
          deep: 'var(--color-teal-deep)',
          mid: 'var(--color-teal-mid)',
          light: 'var(--color-teal-light)',
        },
        cream: 'var(--color-bg)',
        'cream-soft': 'var(--color-bg-soft)',
        line: 'var(--color-line)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      maxWidth: {
        wrap: '1240px',
      },
    },
  },
  plugins: [],
};
