/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Urbanist', 'sans-serif'],
      },
      colors: {
        orangutan: '#fc7200',
        aquatic: '#7fffd4',
        aubergine: '#8100d1',
        zima: '#000cfc',
        bloody: '#800b15',
        clover: '#0f3314',
      },
      fontSize: {
        massive1: '4rem',
      },
      lineHeight: {
        massive1: '4.5rem',
      },
      minHeight: {
        slide1: '28.5rem',
        slide2: '21.375rem',
      },
      minWidth: {
        slide1: '20rem',
        slide2: '15rem',
      },
      height: {
        works: '33.675rem',
        works2: '67.35rem',
      },
      screens: {
        xl: { raw: '(min-width: 3800px)' },
        hd: { raw: '(min-width: 1400px)' },
      },
    },
  },
  plugins: [],
};
