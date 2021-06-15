const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const stylesHandler = "style-loader";

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    index: {
      import: "./src/index.ts",
      dependOn: "shared",
    },
    api: {
      import: "./src/index.ts",
      dependOn: "shared",
    },
    shared: "phaser",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
