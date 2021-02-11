const fs = require("fs");
const path = require("path");

const ROUTES = fs
  .readdirSync("./src/routes", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map(dirent => dirent.name);

module.exports = (env) => {
  // console.log("env", env);
  const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
  const TerserPlugin = require("terser-webpack-plugin");
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  let plugins = [new MiniCssExtractPlugin()];

  let optimization = {};

  if (env.production) {
    optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
    };
  }

  return {
    mode: "development",
    entry: ROUTES.reduce(function (map, route) {
      map[route] = path.resolve(__dirname, `src/routes/${route}/index.js`);
      return map;
    }, {}),
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "build"),
    },
    devServer: {
      contentBase: path.join(__dirname, "build"),
      compress: true,
      port: 9000,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src")
      }
    },
    devtool: env.local ? "inline-source-map" : "nosources-source-map",
    optimization,
    plugins,
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-resources-loader",
              options: {
                resources: [
                  path.resolve(__dirname, "src/config/functions.scss"),
                  path.resolve(__dirname, "src/config/variables.scss"),
                  path.resolve(__dirname, "src/config/mixins.scss"),
                  path.resolve(__dirname, "src/config/functions.scss"),
                  path.resolve(__dirname, "src/config/keyframes.scss"),
                ],
              },
            },
          ],
        },
      ],
    },
  };
};
