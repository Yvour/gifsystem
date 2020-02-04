const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const app = express();
const fetch = require("node-fetch");

require("dotenv-json")();

const SOURCES = ["PIXABAY", "GIPHY"];

const API_KEYS = {};
SOURCES.forEach(source => {
  API_KEYS[source] = process.env[`API_KEYS_${source}`];
});

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

app.get("/query/:search", function(req, res) {
  const search = (req.params.search || "").split(/\s+/).join("+");
  const LIMIT = 25;
  console.log("before query");
  Promise.all([
    fetch(
      `https://pixabay.com/api/?key=${API_KEYS.PIXABAY}&q=${encodeURIComponent(
        search
      )}&per_page=${LIMIT}`
    )
      .then(response => response.json())
      .then(response => ({ source: "PIXABAY", items: response.hits }))
      .catch(e => {
        console.error(e);
        console.log("zuk");
        return { items: [] };
      }),
    fetch(
      `https://api.giphy.com/v1/gifs/search?` +
        `api_key=${API_KEYS.GIPHY}&q=${encodeURIComponent(search)}` +
        `&limit=${LIMIT}&offset=0&rating=G&lang=en`
    )
      .then(response => response.json())
      .then(response => ({ source: "GIPHY", items: response.data }))
      .catch(e => {
        console.error(e);
        return { items: [] };
      })
  ])
    // for Promise.all
    .then(results => {
      console.log("results are");
      const mixedArray = [];
      for (let i = 0; i < LIMIT; i++) {
        results.forEach(result => {
          if (result.items[i]) {
            mixedArray.push({
              source: result.source,
              item: result.items[i]
            });
          }
        });
      }
      return mixedArray;
    })
    .then(array => {
      res.set("Content-Type", "application/json");
      res.send(array);
    })
    .catch(e => {
      res.send([]);
    });
});

app.get("/query-giphy/:search", function(req, res) {
  const search = (req.params.search || "").split(/\s+/).join("+");

  const KEY = API_KEYS.GIPHY;

  const LIMIT = 25;
  const url = fetch(url)
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
