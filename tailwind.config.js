/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      textColor: "#332C39",
      bgColor: "#F0EEED",
      borderColor: "#609EA2",
    },
    borderWidth: {
      DEFAULT: "0.1rem",
    },
    extend: {},
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [],
};
