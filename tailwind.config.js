/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter','Ubuntu','Fira Sans', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        whatsapp: '#128C7E',
          "whatsapp-focus": '#075E54',
          "whatsapp-content": '#fff',
      },
      screens:{
        '2xs': '350px'
      },
      aspectRatio:{
        'portrait': '2/3'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF8A00",
          'primary-focus': "#e67c00",
          "primary-content": "#FFFFFF",

          secondary: "#000",
          'secondary-focus': '#1a1a1a',
          "secondary-content": "#fff",

          accent: "#6500B0",
          "accent-focus": "#4B0082",
          "accent-content": "#fff",

          whatsapp: '#128C7E',
          "whatsapp-focus": '#075E54',
          "whatsapp-content": '#fff',

          neutral: "#3D4451",
          "neutral-content": "#fff",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",
          "info-content": "#000",

          success: "#36D399",
          "success-content": "#000",

          warning: "#FBBD23",
          "warning-content": "#000",

          error: "#ef4444",
          "error-content": "#FFF",
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/line-clamp'),require('daisyui')],
}
