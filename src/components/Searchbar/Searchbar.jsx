import React, { useState } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  // On input change
  const handleOnInputChange = e => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  // Callback on submit form
  const handleSearchOnSubmit = e => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSearchOnSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleOnInputChange}
        />
      </SearchForm>
    </SearchHeader>
  );
};

export { Searchbar };

// Types
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
