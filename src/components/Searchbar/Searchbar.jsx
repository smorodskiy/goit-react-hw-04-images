import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  // On input change
  handleOnInputChange = e => {
    const inputValue = e.target.value;
    this.setState({ searchValue: inputValue });
  };

  // Callback on submit form
  handleSearchOnSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSearchOnSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleOnInputChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export { Searchbar };

// Types
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
