/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bbd9ff',
          300: '#84bcff',
          400: '#4a9eff',
          500: '#1f7fff',
          600: '#0761ff',
          700: '#004eff',
          800: '#0040cc',
          900: '#002C53',
        },
        secondary: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f4ead5',
          300: '#ebdab5',
          400: '#E2D0A1',
          500: '#d4c494',
          600: '#c4ad79',
          700: '#a6915f',
          800: '#87764f',
          900: '#6e6142',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 44, 83, 0.1)',
        'custom-lg': '0 10px 40px rgba(0, 44, 83, 0.15)',
      }
    },
  },
  plugins: [],
};