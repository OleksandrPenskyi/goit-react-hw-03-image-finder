import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

import style from './ImageGallery.module.css';

const ImageGallery = ({ pictures, onImgClick }) => (
  <ul className={style.ImageGallery}>
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

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
