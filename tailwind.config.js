/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footerBgImage: "url('/src/assets/images/footerbgImage1.png')",
      },
      fontFamily: {
        "tt-firs-neue": "'TT Firs Neue'",
        roboto: "Roboto",
        montserrat: "Montserrat",
      },
      colors: {
        primary: "#6665FF",
        secondary: "#000000",
        primaryOpacity: "#007ABB30",
        graySite: "#52525B",
      },
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "22px",
      "4xl": "24px",
      "5xl": "28px",
      "6xl": "30px",
      "7xl": "32px",
      "8xl": "35px",
      "9xl": "36px",
      "10xl": "38px",
      "11xl": "40px",
      "12xl": "48px",
      "13xl": "50px",
      "14xl": "60px",
      "15xl": "64px",
      "16xl": "100px",
      "17xl": "128px",
      "18xl": "200px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
