/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10rem",
        lg: "15rem",
      },
    },
    extend: {
      colors: {
        primary: "#18181c",
        secondary: "#f50136",
        subtitle: "#838383",
        tertiary: "#f44336",
        ash: "#f0f2f6"
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
