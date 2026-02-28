/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        beige: '#F5F0EB',
        ocre: '#C4956A',
        lin: '#D6CFC4',
        'vert-doux': '#A8B5A0',
        'blanc-casse': '#FDFBF8',
        'ocre-dark': '#B07E55',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
