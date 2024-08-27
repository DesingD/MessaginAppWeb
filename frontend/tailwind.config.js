/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#285689",
        backButton: "#F1F1F1",
        lineButton: "#CDD5DE",
        colMessa: "#616C76",

        // Text
        labelCol: "#0E1114",

        //dark
        bgdark: "#181C20",
        backButtonDark: "#2C2F33",
        lineButtonDark: "#2D3032",
        textLDark: "#EEF1F4",
        colMessaDark: "#ABBBC9",
      },
    },
  },
  plugins: [],
};
