/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        "theme-black": "#37435b",
        "theme-dark-black": "#222536",
        "theme-dark-black1": "linear-gradient(90deg, #000000, #C0C0C0)",
        custom: {
          peach: "#FFE7D5",
        },
        dark: {
          background: "#6b7280",
          accent: "#FF6A31",
          accent2:"#b03e41",
          accent3:"#ffd6d7",
          accent4:"#ffacae"
        },
        light: {
          background: "#FFFFFF",
          accent: "#FF6A31",
          accent2:"#b03e41",
          accent3:"#ffd6d7",
          accent4:"#ffacae"
        },
      },
      boxShadow: {
        "text-glow": "0 0 8px #FFF, 0 0 15px #FFF, 0 0 20px #FFF", // Customize this to get the desired glow effect
      },
      fontFamily: {
        "quattrocento-sans": ["Quattrocento Sans", "sans-serif"],
      },
      screens: {
        xs: "475px",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
