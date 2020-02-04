import React from "react";
import "./styles.css";

import { requester } from "./../requester";
import { delayer } from "./../delayer";
import { getTimeDifference } from "./../getTimeDifference";
import { debounce } from "./../debounce";
import { SOURCES } from "./../const";

const EMPTY_ANSWER = [];
const SEND_INTERVAL = 1000;

class GifSystem extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
      images: []
    };

    this.getAllImages = debounce(this.getAllImages, 600);
  }

  renderPixabayImage(imageData) {
    return (
      <div
        className="pixabay-image"
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
        className="giphy-image"
        style={{
          backgroundImage: `url(${sizedImage.url})`,
          height: sizedImage.height,
          width: sizedImage.width
        }}
      />
    );
  }

  renderImages() {
    const images = this.state.images;

    return (
      <div className="images-container">
        {images.map(image => {
          switch (image.source) {
            case SOURCES.GIPHY:
              return this.renderGiphyImage(image.item);
            case SOURCES.PIXABAY:
              return this.renderPixabayImage(image.item);
            default:
              return null;
          }
        })}
      </div>
    );
  }

  getAllImages() {
    const { search } = this.state;
    requester(`query/${encodeURIComponent(search)}`)
      .then(response => response.json())
      .then(images => {
        this.setState(state => ({
          images: images
        }));
      });
  }

  renderSearchInput() {
    return (
      <div className="search-input-container">
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
      </div>
    );
  }

  render() {
    return (
      <div className="gif-system">
        {this.renderSearchInput()}
        {this.renderImages()}
      </div>
    );
  }
}
export default GifSystem;
