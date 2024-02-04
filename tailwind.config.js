/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "purple": '#B15CFF',
        "bg": '#181818',
        "green": '#D5FF5D',
        'light-gray': '#242424',
        'accent': '#999999',
        'dark-white': '#EAEAEA'
      },
    },
    fontFamily: {
      "main": ['Manrope', 'sans-serif']
    }
  },
  darkMode: 'media',
  plugins: [],
};
