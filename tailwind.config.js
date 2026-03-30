/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{astro,html}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FF2D2D",
      },
      fontFamily: {
        heading: ["Khand", "sans-serif"],
        body: ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
};

