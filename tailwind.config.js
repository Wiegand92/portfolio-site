module.exports = {
  purge:{
    enabled: true,
    content: [
      './src/Components/**',
    ]
  },
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