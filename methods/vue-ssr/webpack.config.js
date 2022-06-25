const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.config.js");
const VueLoaderPlugin = require("vue-loader/dist/pluginWebpack4").default;

module.exports = merge(baseConfig, {
  // Point entry to your app's server entry file
  entry: "./index.js",

  // This allows webpack to handle dynamic imports in a Node-appropriate
  // fashion, and also tells `vue-loader` to emit server-oriented code when
  // compiling Vue components.
  target: "node",

  // For bundle renderer source map support
  devtool: "(none)",

  // This tells the server bundle to use Node-style exports
  output: {
    libraryTarget: "commonjs2"
  },

  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // Externalize app dependencies. This makes the server build much faster
  // and generates a smaller bundle file.
  externals: nodeExternals({
    // do not externalize dependencies that need to be processed by webpack.
    // you can add more file types here e.g. raw *.vue files
    // you should also whitelist deps that modifies `global` (e.g. polyfills)
    whitelist: /\.css$/
  }),

  mode: "production",

  plugins: [
    // This is the plugin that turns the entire output of the server build
    // into a single JSON file. The default file name will be
    // `vue-ssr-server-bundle.json`
    new VueLoaderPlugin()
  ]
});
