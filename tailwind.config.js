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
        '1vh': '1vh',
        '3vh': '3vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '10vh': '10vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '15vh': '15vh',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '70vw': '70vw',
        '80vw': '80vw',
      },
    },
  },
  plugins: [],
}
