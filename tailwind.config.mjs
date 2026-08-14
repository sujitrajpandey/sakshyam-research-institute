/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#344652', // Deep Slate from "Sr" and "SAKSHYAM"
        },
        teal: {
          600: '#459B9B', // Institute Teal from "RESEARCH INSTITUTE" banner
          300: '#88C5C5', // Light Aqua from globe logo segments
        },
        background: '#F8F9FA'
      },
      fontFamily: {
        // You can link these to Google Fonts in your layout
        sans: ['Inter', 'sans-serif'], 
        heading: ['Merriweather', 'serif'], 
      }
    },
  },
  plugins: [],
}
