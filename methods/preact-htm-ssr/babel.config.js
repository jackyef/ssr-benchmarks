module.exports = {
  babelrc: false,
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        useBuiltIns: "entry",
        corejs: "2",
        exclude: ["es6.promise", "es7.promise.finally"]
      }
    ],
  ]
};
