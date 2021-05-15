import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ pictures, onImgClick }) => (
  <ul className="ImageGallery">
    {pictures.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        webformatURL={webformatURL}
        onImgClick={onImgClick}
        largeImageURL={largeImageURL}
        key={id}
      />
    ))}
  </ul>
);

export default ImageGallery;
