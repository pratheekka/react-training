const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const express = require("express");

const app = express();
const config = require("./webpack.config");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

const port = process.env.PORT || 3020;
app.listen(port, function() {
    console.log(`app listening on port ${port}`)
});