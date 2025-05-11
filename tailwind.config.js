/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        'accent': {
          100: '#fff7ed',
          200: '#ffedd5',
          300: '#fed7aa',
          400: '#fdba74',
          500: '#f97316',
        }
      },
      fontFamily: {
        'serif': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/267079/pexels-photo-267079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
      },
    },
  },
  plugins: [],
};