/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.astro', '*.astro'],
  theme: {
    extend: {},
    colors: {
      primary: '#CE7777',
    },
  },
  plugins: [],
};
