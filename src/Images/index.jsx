import { GiphyImage, PixabayImage } from "./source-images";
import React, { useState, useEffect } from "react";
import { requester } from "./../requester";

import { debounce } from "./../debounce";
import { SOURCES } from "./../const";

const EMPTY_ANSWER = [];
const SEND_INTERVAL = 1000;

const debouncedRequester = debounce(requester, 500);

export default function Images(props) {
  const { search } = props;

  const [images, setImages] = useState(EMPTY_ANSWER);
  useEffect(() => {
    if (search) {
      requester(`query/${encodeURIComponent(search)}`)
        .then(response => response.json())
        .then(images => {
          setImages(images);
        });
    } else {
      setImages(EMPTY_ANSWER);
    }
  }, [search]);

  return (
    <div className="images-container">
      {images.map(image => {
        switch (image.source) {
          case SOURCES.GIPHY:
            return <GiphyImage imageData={image.item} />;
          case SOURCES.PIXABAY:
            return <PixabayImage imageData={image.item} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
