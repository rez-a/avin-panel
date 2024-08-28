/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mikhak: ['var(--font-mikhak)'],
      },
      colors: {
        primary: '#4361EE',
        dark: '#0E1726',
        'dark-color-primary': '#888ea8',
        'dark-color-secondary': '#121e32',
        danger: '#e7515a',
      },
      backgroundImage: {
        'auth-pattern': "url('/images/auth/background.svg')",
        'auth-pattern-dark':
          "url('/images/auth/background-dark.svg')",
      },
    },
  },
  plugins: [],
};
