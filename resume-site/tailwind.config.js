/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Urbanist"],
      },
      colors: {
        orangutan: "#fc7200",
        aquatic: "#7fffd4",
        aubergine: "#8100d1",
        zima: "#000cfc",
      },
      fontSize: {
        massive1: "64px",
      },
      lineHeight: {
        massive1: "72px",
      },
      minHeight: {
        slide1: "28.5rem",
        slide2: "21.375rem",
      },
      minWidth: {
        slide1: "20rem",
        slide2: "15rem",
      },
    },
  },
  plugins: [],
};
