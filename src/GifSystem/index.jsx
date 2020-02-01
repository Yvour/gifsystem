import React from "react";
import "./styles.css";

const EMPTY_ANSWER = [];
const SEND_INTERVAL = 1000;

class GifSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      giphyLastSent: new Date().valueOf(),
      giphyImages: EMPTY_ANSWER,
      search: "",
      count: 0
    };
  }

  getGiphyImages() {
    const search = this.state.search;

    const giphyImagesQuery = this.state.giphyImagesQuery;
    const timeDifference = new Date().valueOf() - this.state.giphyLastSent;
    if (timeDifference > SEND_INTERVAL && giphyImagesQuery !== search) {
      this.setState(
        {
          giphyLastSent: new Date().valueOf()
        },
        () => {
          fetch(`query/${search}`)
            .then(response => response.json())
            .then(result => {
              this.setState({
                giphyImagesQuery: search,
                giphyImages: result
              });
            });
        }
      );
    } else
      setTimeout(
        this.getGiphyImages.bind(this),
        SEND_INTERVAL - timeDifference
      );
  }

  renderGiphyImage(imageData) {
    const sizedImage = imageData.images.fixed_height_downsampled;
    console.log("sizedImage");
    console.log(sizedImage);
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
        {this.state.giphyImages.map(imageData =>
          this.renderGiphyImage(imageData)
        )}
      </div>
    );
  }

  renderSearchInput() {
    return (
      <input
        className="search-input"
        placeholder="Enter query..."
        onChange={e => {
          const value = e.target.value;
          this.setState(
            Object.assign(this.state, {
              search: value,
              giphyImages: EMPTY_ANSWER
            })
          );
          if (value && value.length) {
            this.getGiphyImages();
          }
        }}
      />
    );
  }

  render() {
    console.log(this.state);
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
