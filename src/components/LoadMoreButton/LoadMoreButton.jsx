import React from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './LoadMoreButton.styled';

const LoadMoreButton = ({ handleNextPage }) => {
  return (
    <ButtonWrapper>
      <Button type="button" onClick={handleNextPage}>
        Load More
      </Button>
    </ButtonWrapper>
  );
};

export { LoadMoreButton };

// Types
LoadMoreButton.propTypes = {
  handleNextPage: PropTypes.func,
};
