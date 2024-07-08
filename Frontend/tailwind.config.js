/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        
          zoomIn: 'zoomIn 0.3s ease-in-out forwards'
        
      },
      dropShadow: {
        customGray: '0 4px 6px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        customGray:'#141416',
        customWhite: '#FFFFFF',
        customColor: '#533F4D',
        customColor1: '#A3492F', // Add your first custom color here
        customColor2: '#EE7C53',
        customColor3: '#FFA500',
        customColor4:'#231F20',
        brandPrimary: "#4CAF4F",
        neutralDGrey: "#717171",
        wholeBackground: "#231F20",
        neutralDGrey: "#4D4D4D"

      }

      // backgroundImage: (theme) => ({
      //   "gradient-to-r": "linear-gradient(to right,  #141416,#231F20 )",
      // }),
      
        // neutralsilver: "#F5F7FA",
        
   

    },
  },
  
  plugins: [],
};

