/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      height: {
        '900': '90vh',
        "22" : "5.5rem"
      },
    },
  },
  plugins: [],
}

