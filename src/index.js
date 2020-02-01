import React from "react";
import ReactDOM from "react-dom";
import GifSystem from "./GifSystem";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(GifSystem),
    document.getElementById("gif-system")
  );
});
