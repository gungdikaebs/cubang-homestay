/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lion: "#aa8453",
        "lion-dark": "#937248",
        "eerie-black": "#222222",
        coyote: "#80633e",
        platinum: "#e0e0e0",
        nero: "#202020",
        "nero-dark": "#1e1e1e",
        "light-gray": "#e9e9e9",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-cond": ["Barlow Condensed", "sans-serif"],
        gild: ["Gilda Display", "serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "header-image":
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/images/header-image.jpg')",
        "banner-image":
          "linear-gradient(0deg, rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url('../assets/images/banner-image.jpg')",
        "booking-image":
          "linear-gradient(0deg, rgba(16, 16, 16, 0.5), rgba(16, 16, 16, 0.5)), url('../assets/images/booking-image.png')",
      },
      gridTemplateColumns: {
        footer: "3fr repeat(3, 2fr)",
      },
    },
  },
  plugins: [],
};
