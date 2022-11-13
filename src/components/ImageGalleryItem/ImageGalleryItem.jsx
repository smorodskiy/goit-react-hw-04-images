import React from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Image, ImageItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, openModal }) => {
  const handleOnClickImgItem = () => {
    openModal(largeImageURL, tags);
  };

  return (
    <ImageItem onClick={handleOnClickImgItem}>
      <Image src={webformatURL} alt={tags} />
    </ImageItem>
  );
};

export { ImageGalleryItem };

// Types
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
