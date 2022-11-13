import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Image, ImageItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  handleOnClickImgItem = () => {
    const { largeImageURL, openModal, tags } = this.props;
    openModal(largeImageURL, tags);
  };

  render() {
    const { webformatURL, tags } = this.props;
    return (
      <ImageItem onClick={this.handleOnClickImgItem}>
        <Image src={webformatURL} alt={tags} />
      </ImageItem>
    );
  }
}

export { ImageGalleryItem };

// Types
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
