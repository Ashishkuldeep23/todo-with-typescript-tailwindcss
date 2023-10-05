/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      height: {
        '900': '90vh',
        "800" : "87vh" ,
        "22" : "5.5rem"
      },
      minHeight : {
        "5" : "5rem"
      },
      scale:{
        "102" : "1.025"
      } ,
      transitionDuration : {
        "5" : "0.5s" ,
        "10" : "1s"
      } ,
      
      
    },
  },
  plugins: [],
}

