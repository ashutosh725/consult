/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        sm: '1rem',
        md: '0rem',
        lg: '',
        xl: '',
        '2xl': '',
         
        },  
      },
      colors: {
        primary: "#ffda00",
        secondary: "#4a1e75",
        // heading: "#01173c",
        body: "#efe7da",
      },
      fontFamily: {
        Open: ['Open Sans', 'serif'],
        Alice:  ['Heebo', 'serif'],
        Jost:  ['Jost', 'sans-serif'],
        Montserrat:  ['Montserrat', 'sans-serif'],
        Poppins:  ['Poppins', 'sans-serif'],
     
      },
    },
  },
  plugins: [],
};
