/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionDelay: {
        '2000': '2000ms',
      }
    }
  },
  plugins: []
};