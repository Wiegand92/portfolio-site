module.exports = {
  purge:{
    enabled: true,
    content: [
      './src/Components/**',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    },
    variants: {
      extend: {},
    },
    plugins: []
  }
};