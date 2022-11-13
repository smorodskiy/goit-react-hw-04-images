import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components';

class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;

    return (
      <ImageList>
        {images.map(image => {
          const { id, largeImageURL, webformatURL, tags } = image;
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              tags={tags}
              openModal={openModal}
            />
          );
        })}
      </ImageList>
    );
  }
}

export { ImageGallery };

// Types
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
