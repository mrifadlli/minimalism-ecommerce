/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs':'378px',
        'md':'898px',
  
      },
      width:{
        '500': '500px',
        '400': '400px',
        '450': '450px',
      },
      height:{
        '500': '500px',
        '400': '400px',
        '450': '450px',
      },
    },
  },
  plugins: [],
}
