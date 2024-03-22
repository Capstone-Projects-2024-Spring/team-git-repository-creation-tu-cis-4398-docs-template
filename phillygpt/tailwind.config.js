/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'gray-navbar' : '#545454',
        'darkgray' : '#333333',
        'navbar-lm' : '#e5d0b1',
        'lm_nav': '#d7c1a5',
      },
      fontWeight:{
        'extrabold' : 800,
      }
    },
  },
  plugins: [],
  darkMode: true,
}

