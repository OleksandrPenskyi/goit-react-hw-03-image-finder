import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImgClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => onImgClick(largeImageURL)}
        src={webformatURL}
        alt="img"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
