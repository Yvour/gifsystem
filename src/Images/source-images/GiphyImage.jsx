import React from "react";

const GiphyImage = ({ imageData }) => {
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
};

export default GiphyImage;
