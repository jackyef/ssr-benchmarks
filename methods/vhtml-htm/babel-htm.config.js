module.exports = {
  babelrc: false,
  plugins: [
    [
      "babel-plugin-transform-jsx-to-htm",
      {
        tag: "html",
      }
    ],
  ].filter(Boolean),
};
