/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        
        
        "header" : "url('/bg.jpg')",
        "form" : "url('/bebida.png')",
        "boton" : "url('/ff.jgp')"
        
        
      }
      
      
      
    },
  },
  plugins: [],
}

