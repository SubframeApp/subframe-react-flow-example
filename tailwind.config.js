/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/subframe/**/*.{tsx,ts,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("./src/subframe/tailwind.config.js")],
};
