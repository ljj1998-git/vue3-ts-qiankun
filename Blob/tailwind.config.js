module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    maxWidth: {
      0: "0",
      "1/4": "1000px",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
  },
  plugins: [],
};
