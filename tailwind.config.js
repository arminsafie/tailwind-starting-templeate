/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      transitionDuration: {
        ".8s": ".8s",
      },
      container: {
        center: true,
      },
      width: {
        fluid: "100%",
      },
    },
  },
  plugins: [require("tw-bootstrap-grid-optimizer")],
};
