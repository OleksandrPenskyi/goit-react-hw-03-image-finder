import React from 'react';
import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImgClick }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        onClick={() => onImgClick(largeImageURL)}
        src={webformatURL}
        alt="img"
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
