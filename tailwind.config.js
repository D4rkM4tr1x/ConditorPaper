/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fcf8f7',
          100: '#f7e8eb',
          500: '#c8a96b',
          600: '#b48a45',
          700: '#8f6b2d',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(47, 42, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
