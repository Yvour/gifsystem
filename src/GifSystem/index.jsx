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
        this.getImages(source);
      }, SEND_INTERVAL - timeDifference);
  }

  renderPixabayImage(imageData) {
    return (
      <div
        style={{
          backgroundImage: `url(${imageData.previewURL})`,
          height: imageData.previewHeight,
          width: imageData.previewWidth
        }}
      />
    );
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

  getMixedImages() {
    const SHOW_COUNT = 40;
    const images = [];
    Object.keys(SOURCES).forEach(key => {
      const sourceImages = this.state.images[SOURCES[key]].items.map(
        imageData => ({
          source: SOURCES[key],
          imageData: imageData
        })
      );
      images.push(sourceImages);
    });
    const mixedImages = [];

    let index = 0;
    let count = 0;
    while (images.length && mixedImages.length < SHOW_COUNT) {
      count++;

      if (images[index].length) {
        mixedImages.push(images[index].shift());
        index++;
      } else {
        images.splice(index, 1);
      }
      index = index % images.length;
    }

    return mixedImages;
  }

  renderImages() {
    const images = this.getMixedImages();

    return (
      <div className="images-container">
        {images.map(image => {
          switch (image.source) {
            case SOURCES.GIPHY:
              return this.renderGiphyImage(image.imageData);
            case SOURCES.PIXABAY:
              return this.renderPixabayImage(image.imageData);
            default:
              return null;
          }
        })}
      </div>
    );
  }

  getAllImages() {
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
        <div className="search-result-container">{this.renderImages()}</div>
      </div>
    );
  }
}
export default GifSystem;
