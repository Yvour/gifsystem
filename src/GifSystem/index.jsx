import React from "react";
import "./styles.css";
import _ from "lodash";

const EMPTY_ANSWER = [];
const SEND_INTERVAL = 1000;

const SOURCES = { PIXABAY: "PIXABAY", GIPHY: "GIPHY" };

const URLS = {
  [SOURCES.PIXABAY]: "query-pixabay",
  [SOURCES.GIPHY]: "query-giphy"
};

class GifSystem extends React.Component {
  constructor() {
    super();
    const images = {};

    Object.keys(SOURCES).forEach(key => {
      images[SOURCES[key]] = {
        lastSent: new Date().valueOf(),
        items: [],
        query: ""
      };
    });
    this.state = {
      search: "",
      images
    };

    this.getAllImages = _.debounce(this.getAllImages);
    this.getImages = this.getImages.bind(this);
  }

  getImages(source) {
    const search = this.state.search;
    console.log("source is");
    console.log(source);
    console.log(this.state);
    const currSearch = this.state.images[source].query;

    const timeDifference =
      new Date().valueOf() - this.state.images[source].lastSent;
    if (timeDifference > SEND_INTERVAL && currSearch !== search) {
      this.setState(
        state => ({
          images: {
            ...state.images,
            [source]: {
              items: EMPTY_ANSWER,
              lastSent: new Date().valueOf(),
              query: search
            }
          }
        }),
        () => {
          fetch(`${URLS[source]}/${search}`)
            .then(response => response.json())
            .then(result => {
              this.setState(state => ({
                images: {
                  ...state.images,
                  [source]: {
                    ...state.images[source],
                    items: result
                  }
                }
              }));
            });
        }
      );
    } else
      setTimeout(() => {
        console.log("timout call for " + search);
        console.log(this.state);
        this.getImages(source);
      }, SEND_INTERVAL - timeDifference);
  }

  renderGiphyImage(imageData) {
    const sizedImage = imageData.images.fixed_height_downsampled;

    return (
      <div
        style={{
          backgroundImage: `url(${sizedImage.url})`,
          height: sizedImage.height,
          width: sizedImage.width
        }}
      />
    );
  }

  renderGiphyImages() {
    return (
      <div className="giphy-images-container">
        {this.state.images[SOURCES.GIPHY].items.map(imageData =>
          this.renderGiphyImage(imageData)
        )}
      </div>
    );
  }

  getAllImages() {
    console.log("getall for " + this.state.search);
    Object.keys(SOURCES).forEach(key => this.getImages(SOURCES[key]));
  }

  renderSearchInput() {
    return (
      <input
        className="search-input"
        placeholder="Enter query..."
        onChange={e => {
          const value = e.target.value;
          this.setState({ search: value }, () => {
            if (value && value.length) {
              this.getAllImages();
            }
          });
        }}
      />
    );
  }

  render() {
    return (
      <div className="gif-system">
        <div className="gif-system-name">Gif System</div>
        {this.renderSearchInput()}
        <div className="search-result-container">
          {this.renderGiphyImages()}
        </div>
      </div>
    );
  }
}
export default GifSystem;
