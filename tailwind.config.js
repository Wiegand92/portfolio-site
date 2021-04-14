module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        dark: "#0c2231",
        light: "#1D5962"
      },
      orange:{
        light: "#F4A15D",
        dark: "#813F09"
      },
      red: "#DA304C",
      transparent: "transparent",
      white: "#EFF8F3"
    },
    extend: {
      
      height: {
        photo: "calc(34.5vw / (5/4))",
        photoPortrait: "calc(60vh * (5/4))",
        photoContainer: "calc(42.5vw / (5/4))",
        photoContainerPortrait: "calc(70vh * (5/4))"
      },
      width: {
        photo: "calc(60vh * (5/4))",
        photoPortrait:  "calc(34.5vw / (5/4))",
        photoContianer: "calc(70vh * (5/4))",
        photoContainerPortrait: "calc(42.5vw / (5/4))"
      },
      margin: {
        photoX: "5vw"
      },
      padding: {
        photoXL: "5vw",
        photoXR: "10vw"
      },
      screens: {
        portrait: {"raw": "(orientation: portrait)"}
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}