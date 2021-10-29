module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
