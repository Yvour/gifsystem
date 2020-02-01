import React from "react";

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

  renderGiphyImages() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.giphyImages, null, 2)}</pre>
      </div>
    );
  }

  renderSearchInput() {
    return (
      <input
        className="search-input"
        placeholder="Enter string to search in Wikipeda..."
        onChange={e => {
          const value = e.target.value;
          this.setState(
            Object.assign(this.state, {
              search: value,
              giphyImages:
                value && value.length ? this.state.results : EMPTY_ANSWER
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
      <div>
        Gif System
        {this.renderSearchInput()}
        {this.renderGiphyImages()}
      </div>
    );
  }
}
export default GifSystem;
