/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    screens: {
      sm: "300px",

      md: "360px",

      mdd: "390px",

      lmdd: "410px",

      lmdl: "440px",

      mdl: "600px",

      lmd: "768px",

      lg: "1300px",

      xl: "1400px",

      "2xl": "1800px",

      "3xl": "2000px",
    },
    extend: {
      fontSize: {
        title1: ["2.4rem"],
        title2: ["2rem"],
        title3: ["1.5rem"],
        title4: ["3.5rem"],
        title5: ["2.8rem"],
        desc1: ["1.2rem"],
        desc2: ["1.1rem"],
      },
      width: {
        32: "32%",
        42: "42%",
        70: "70%",
        88: "88%",
        slugs: "90%",
      },
      colors: {
        gray: {
          100: "#888888",
          200: "#222222",
          300: "#DADADB",
          400: "#9B9C9D",
          600: "#313131",
          800: "#191919",
        },
      },
    },
  },
};
