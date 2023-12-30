const path = require("path");

const config = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },

  devServer: {
    port: "9001",

    static: path.resolve(__dirname, "public"),

    open: true,

    hot: true,

    liveReload: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  plugins: [],

  target: "web",
  mode: "development",
};

module.exports = config;
