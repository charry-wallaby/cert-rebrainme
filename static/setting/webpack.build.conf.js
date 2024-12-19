const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PATHS = {
    public: path.join(__dirname, "../../public"),
};

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD config
    mode: "production",
    output: {
        path: PATHS.public,
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(false),
        }),
    ],
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
