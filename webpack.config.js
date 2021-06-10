const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, arg) => {
  return {
    mode: "development", // 'production'
    entry: {
      "project-bundle": "./src/index.ts",
    },
    output: {
      filename: "[name].main.js",
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img",
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
        templateParameters: {
          title: "Project Name",
        },
        hash: true,
      }),
    ],
  };
};
