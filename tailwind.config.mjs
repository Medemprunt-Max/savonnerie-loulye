/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],

  theme: {
    extend: {
      colors: {
        // Palette Savonnerie Loulye
        beige:      { DEFAULT: '#F5F0EB', dark: '#E8DFD5' },
        ocre:       { DEFAULT: '#C4956A', light: '#D4AD8A', dark: '#A87B52' },
        lin:        { DEFAULT: '#D6CFC4', dark: '#C4BAA9' },
        'vert-doux':{ DEFAULT: '#A8B5A0', light: '#BCC7B5', dark: '#8FA085' },
        'blanc-casse': '#FDFBF8',
        brand: {
          50:  '#FDFBF8',
          100: '#F5F0EB',
          200: '#E8DFD5',
          300: '#D6CFC4',
          400: '#C4956A',
          500: '#A87B52',
          600: '#8B6342',
          700: '#5C3D28',
          800: '#3D2718',
          900: '#2A1A10',
        },
        accent: {
          DEFAULT: '#C4956A',
          50:  '#FBF5EF',
          100: '#F5E6D6',
          200: '#E8CBAB',
          300: '#D4AD8A',
          400: '#C4956A',
          500: '#A87B52',
          600: '#8B6342',
          700: '#6E4D33',
        },
        green: {
          DEFAULT: '#A8B5A0',
          50:  '#F2F5F0',
          100: '#E1E8DD',
          200: '#BCC7B5',
          300: '#A8B5A0',
          400: '#8FA085',
          500: '#728A67',
          600: '#5A6E51',
        },
      },

      fontFamily: {
        serif: [
          'Cormorant Garamond',
          'Playfair Display',
          'Georgia',
          'serif',
        ],
        sans: [
          'DM Sans',
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },

      fontSize: {
        'display-xl': ['4rem',    { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem',  { lineHeight: '1.2' }],
        'display-sm': ['2rem',    { lineHeight: '1.3' }],
      },

      maxWidth: {
        site: '1200px',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      boxShadow: {
        card:       '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover':'0 8px 25px rgba(0,0,0,0.07), 0 4px 10px rgba(0,0,0,0.03)',
        soft:       '0 2px 15px rgba(196,149,106,0.15)',
      },

      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in':    'fade-in 0.4s ease-out forwards',
      },
    },
  },

  plugins: [],
};
