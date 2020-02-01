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

function postData(url = "", data = {}) {
  // Значения по умолчанию обозначены знаком *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // тип данных в body должен соответвовать значению заголовка "Content-Type"
  }).then(response => response.json()); // парсит JSON ответ в Javascript объект
}

app.get("/query/:search", function(req, res) {
  const search = req.params.search;
  console.log("search is " + search);
  const LIMIT = 2;
  const url =
    `https://api.giphy.com/v1/gifs/search?api_key=LIV6p4WeGnQd1WVhf3CQb1lWBl6zAEOW&q=${encodeURIComponent(
      search
    )}` + `&limit=${LIMIT}&offset=0&rating=G&lang=en`;

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
