module.exports = {
  babelrc: false,
  plugins: [
    [
      "babel-plugin-transform-jsx-to-htm",
      {
        tag: "html",
        import: {
          // the module to import:
          module: "htm/react",
          // a named export to use from that module:
          export: "html"
        }
      }
    ],
  ].filter(Boolean),
};
