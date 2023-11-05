/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");  

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: resolve(__dirname, "./src/index"),
  devtool:
    process.env.NODE_ENV === "production"
      ? "hidden-source-map"
      : "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], 
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  output: {
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }, 
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }), 
  ],
};

