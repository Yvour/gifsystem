const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const app = express();
const fetch = require("node-fetch");

const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    filename: "bundle.js",
    publicPath: "/",
    stats: {
      colors: true
    },
    historyApiFallback: true
  })
);

app.use(express.static(__dirname + "/www"));

app.get("/query/:search", function(req, res) {});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
});
