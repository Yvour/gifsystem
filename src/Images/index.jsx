import { GiphyImage, PixabayImage } from "./source-images";
import React, { useState } from "react";
import { useEffect } from "./../useEffect";
import { requester } from "./../requester";
import { debounce } from "./../debounce";
import { SOURCES } from "./../const";

const EMPTY_ANSWER = [];
const SEND_INTERVAL = 1000;

export default function Images(props) {
  const { search } = props;
  const [requestValue] = debounce(search, 600);
  const [images, setImages] = useState(EMPTY_ANSWER);

  useEffect(() => {
    if (requestValue) {
      requester(`query/${encodeURIComponent(requestValue)}`)
        .then(response => response.json())
        .then(images => {
          setImages(images);
        });
    } else {
      setImages(EMPTY_ANSWER);
    }
  }, [requestValue]);

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
