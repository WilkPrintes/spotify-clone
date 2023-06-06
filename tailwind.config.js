/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '85vh': '85vh',
        '15vh': '15vh',
        '20vw': '20vw',
        '80vw': '80vw',
      },
    },
  },
  plugins: [],
}
