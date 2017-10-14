const webpack = require("webpack");
//const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var ENV = process.env.NODE_ENV;

var baseConfig = {
  entry: {
    bundle: "./src/main.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "dist/[name].js",
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(ENV)
    })
    // new UglifyJSPlugin()
  ]
};

if (ENV === "production") {
  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = baseConfig;
