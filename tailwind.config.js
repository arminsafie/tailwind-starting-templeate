/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      transitionDuration: {
        ".8s": ".8s",
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite ",
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
