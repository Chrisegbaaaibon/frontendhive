let colors = require("tailwindcss/colors");
let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000d61",
        secondary: "#ffbf00",
        dark: "#323232",
        ...colors,
      },
      fontFamily: {
        poppins_semibold: ["poppins-semibold"],
        poppins_medium: ["poppins-medium"],
        poppins_regular: ["poppins-regular"],
        poppins_light: ["poppins-light"],
        "russo-one-regular": ["russo-one-regular"],
        roboto: ["roboto"],
      },
      boxShadow: {
        neon: " 0px 0px 300px 199px rgba(102,46,255,1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".neo": {
          boxShadow: theme("boxShadow.neon"),
        },
        ".main-back": {
          background: "linear-gradient(to top left, #111, #fbd99e)",
        },
        ".neon": {
          background: "transparent",
          "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
          "backdrop-filter": "blur(20px)",
          "-webkit-backdrop-filter": "blur(20px)",
          border: "1px solid transparent",
        },
        ".msg-glass": {
          background: "transparent",
          "box-shadow": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          "backdrop-filter": "blur(4px)",
          "-webkit-backdrop-filter": "blur(4px)",
          "border-radius": "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        },
        ".transy": {
          background: `linear-gradient(
      248.98deg,
      rgba(255, 255, 255, 0.09) -15.34%,
      rgba(255, 255, 255, 0.25) 102.2%
    )`,
          "border-radius": "20px",
        },
      });
    }),
  ],
};
