/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        "background": "#100D1F",
        "mid-blue": "#171426",
        "light-blue": "#282535",
        "light-gray": "#88868F",
        "accent": "#FF0038",
        "yellow": "#FFB529",
        "orange": "#FF6C1A",
      },
      boxShadow: {
        '3xl': '0 0px 90px -15px rgba(86, 78, 135, 1)',
        '4xl': '0 0px 110px -15px rgba(86, 78, 135, 1)',
      }
    }
  },
  plugins: [],
}

