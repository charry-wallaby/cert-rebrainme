const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
    // DEV config
    mode: "development",
    devtool: "eval-cheap-source-map",
    devServer: {
        port: 8081,
        hot: false,
        devMiddleware: {
            writeToDisk: true,
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true),
        }),
    ],
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
