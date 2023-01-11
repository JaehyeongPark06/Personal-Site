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
            "--tw-prose-body": theme("colors.gray[200]"),
            "--tw-prose-headings": theme("colors.gray[200]"),
            "--tw-prose-lead": theme("colors.gray[200]"),
            "--tw-prose-links": theme("colors.gray[200]"),
            "--tw-prose-bold": theme("colors.gray[200]"),
            "--tw-prose-counters": theme("colors.gray[200]"),
            "--tw-prose-bullets": theme("colors.gray[200]"),
            "--tw-prose-hr": theme("colors.gray[200]"),
            "--tw-prose-quotes": theme("colors.gray[200]"),
            "--tw-prose-quote-borders": theme("colors.gray[200]"),
            "--tw-prose-captions": theme("colors.gray[200]"),
            "--tw-prose-code": theme("colors.gray[200]"),
            "--tw-prose-pre-code": theme("colors.gray[200]"),
            "--tw-prose-pre-bg": theme("colors.gray[700]"),
            "--tw-prose-th-borders": theme("colors.gray[200]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),
          },
        },
      }),
      colors: {
        gray: {
          100: "#767676",
          200: "#A9A9B3",
          300: "#232425",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
