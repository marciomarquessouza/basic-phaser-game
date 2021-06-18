const { merge } = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
  entry: {
    index: {
      import: "./test/index.ts",
      dependOn: "phaser",
    },
    phaser: "./src/api/phaser/phaser-custom.js",
  },
});
