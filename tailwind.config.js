/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bitter: ["'Bitter', 'serif'"],
        monospace: ["'Space Mono', 'monospace'"],
      },
      colors: {
        white: "#F6F0ED",
        blue_dark: "#213C50",
        blue: "#41789F",
        yellow: "#F9A620",
        blue_light: "#27455C",
      },
      screens: {
        '4xl': '2000px',
      },
    },
  },
  plugins: [],
};
