module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      listStyleType: {
        loweralpha: "lower-alpha",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
