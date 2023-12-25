/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        "light-background": "#f2f2fc",
        "light-white": "#fdf9ff",
        "light-border": "#e8dfec",
        "light-text": "#302e4d",
        "light-text-2": "#504e70",
        "dark-background": "#151515",
        "dark-gray": "#222222",
        "dark-border": "#393939",
        "dark-text": "#ffffff",
        "dark-text-2": "#e9e9e9",
        "skin-color": "var(--skin-color)",
      },
      fontFamily:{
        rocky:"var(--font-rocky)"
      }
    },
  },
  plugins: [],
};
