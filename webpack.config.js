const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "react-training",
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    }
}