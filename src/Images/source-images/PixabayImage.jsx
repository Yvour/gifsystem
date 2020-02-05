import React from "react";
const PixabayImage = ({ imageData }) => {
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
};

export default PixabayImage;
