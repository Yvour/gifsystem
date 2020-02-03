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

app.get("/query-pixabay/:search", function(req, res) {
  const KEY = "15109459-ccff9a366d104475a924cc43e";
  const search = (req.params.search || "").split(/\s+/).join("+");

  const url = `https://pixabay.com/api/?key=${KEY}&q=${search}`;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      res.set("Content-Type", "application/json");
      res.send(response.hits);
    })
    .catch(e => {
      res.send([]);
    });
});

app.get("/query-giphy/:search", function(req, res) {
  const search = (req.params.search || "").split(/\s+/).join("+");
  console.log("giphy search is " + search);
  const LIMIT = 25;
  const url =
    `https://api.giphy.com/v1/gifs/search?` +
    `api_key=LIV6p4WeGnQd1WVhf3CQb1lWBl6zAEOW&q=${encodeURIComponent(search)}` +
    `&limit=${LIMIT}&offset=0&rating=G&lang=en`;

  fetch(url)
    .then(response => response.json())

    .then(response => {
      res.set("Content-Type", "application/json");
      res.send(response.data);
    })
    .catch(e => {
      res.send([]);
    });
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
});
