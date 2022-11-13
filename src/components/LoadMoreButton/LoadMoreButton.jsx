import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './LoadMoreButton.styled';

class LoadMoreButton extends Component {
  render() {
    const { handleNextPage } = this.props;
    return (
      <ButtonWrapper>
        <Button type="button" onClick={handleNextPage}>
          Load More
        </Button>
      </ButtonWrapper>
    );
  }
}

export { LoadMoreButton };

// Types
LoadMoreButton.propTypes = {
  handleNextPage: PropTypes.func,
};
