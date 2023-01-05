/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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

      "1.5xl": "1500px",

      "2xl": "1800px",

      "3xl": "2000px",
    },
    extend: {
      typography: ({ theme }) => ({
        gray: {
          css: {
            "--tw-prose-body": theme("colors.gray[300]"),
            "--tw-prose-headings": theme("colors.gray[300]"),
            "--tw-prose-lead": theme("colors.gray[300]"),
            "--tw-prose-links": theme("colors.gray[300]"),
            "--tw-prose-bold": theme("colors.gray[300]"),
            "--tw-prose-counters": theme("colors.gray[300]"),
            "--tw-prose-bullets": theme("colors.gray[300]"),
            "--tw-prose-hr": theme("colors.gray[300]"),
            "--tw-prose-quotes": theme("colors.gray[300]"),
            "--tw-prose-quote-borders": theme("colors.gray[300]"),
            "--tw-prose-captions": theme("colors.gray[300]"),
            "--tw-prose-code": theme("colors.gray[300]"),
            "--tw-prose-pre-code": theme("colors.gray[300]"),
            "--tw-prose-pre-bg": theme("colors.gray[700]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[300]"),
            "--tw-prose-invert-body": theme("colors.gray[100]"),
            "--tw-prose-invert-headings": theme("colors.gray[100]"),
            "--tw-prose-invert-lead": theme("colors.gray[100]"),
            "--tw-prose-invert-links": theme("colors.gray[100]"),
            "--tw-prose-invert-bold": theme("colors.gray[100]"),
            "--tw-prose-invert-counters": theme("colors.gray[100]"),
            "--tw-prose-invert-bullets": theme("colors.gray[100]"),
            "--tw-prose-invert-hr": theme("colors.gray[100]"),
            "--tw-prose-invert-quotes": theme("colors.gray[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.gray[100]"),
            "--tw-prose-invert-captions": theme("colors.gray[100]"),
            "--tw-prose-invert-code": theme("colors.gray[100]"),
            "--tw-prose-invert-pre-code": theme("colors.gray[100]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.gray[100]"),
            "--tw-prose-invert-td-borders": theme("colors.gray[100]"),
          },
        },
      }),
      fontSize: {
        title1: ["2.4rem"],
        title2: ["2rem"],
        title3: ["1.5rem"],
        title4: ["3.5rem"],
        title5: ["2.8rem"],
        title6: ["1.15rem"],
        desc1: ["1.05rem"],
        desc2: ["1rem"],
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
          100: "#767676",
          200: "#222222",
          300: "#A9A9B3",
          400: "#9B9C9D",
          500: "4E4E57",
          600: "#DADADB",
          700: "#28292A",
          800: "#232425",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
