module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      wordBreak: {
        "break-word": "break-word",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
