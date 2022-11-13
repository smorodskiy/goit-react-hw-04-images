import React from 'react';
import { Component } from 'react';

// Pixabay API
import { Pixabay } from 'utils/http/fetchImages';

import {
  ImageGallery,
  Loader,
  LoadMoreButton,
  Modal,
  Searchbar,
} from 'components';

import { Container } from './App.styled';

class App extends Component {
  static defaultContacts = [];

  // Global states
  state = {
    images: [],
    hits: 0,
    numPages: 0,
    currentPage: 1,
    searchValue: '',
    isLoading: false,
    modalImg: '',
    tags: '',
    isModalShow: false,
  };

  // On mount component
  componentDidMount() {
    try {
      this.pixabay = new Pixabay();
      this.getImages();
    } catch (error) {
      console.log(error);
    }
  }

  // On update component
  componentDidUpdate(_, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.getImages(this.state.searchValue, this.state.currentPage);
    }
  }

  // On update search value
  updateSearchValue = newValue => {
    this.setState({ searchValue: newValue });
  };

  // Get image by name, http req
  getImages = async (imageName, page) => {
    // Show loading spin
    this.setState({ isLoading: true });

    // Send req for images
    await this.pixabay.fetchImagesByName(imageName, page);

    this.setState({
      hits: this.pixabay.hits,
      numPages: this.pixabay.numPages,
      currentPage: this.pixabay.currentPage,
      isLoading: false,
    });

    this.setState(prevState => {
      return { images: [...prevState.images, ...this.pixabay.images] };
    });
  };

  // Click on the next page
  nextPage = () => {
    this.setState(prevState => {
      return { ...prevState, currentPage: prevState.currentPage + 1 };
    });
  };

  // On submit
  handleOnSubmit = searchValue => {
    console.log(this.state);
    if (searchValue !== this.state.searchValue)
      this.setState({
        searchValue,
        images: [],
        currentPage: 1,
        numPages: 1,
      });
  };

  // Toggle for modal image
  toogleModal = (modalImg, tags) => {
    if (!modalImg) {
      this.setState({ modalImg: '', isModalShow: false, tags: '' });
      return;
    }
    this.setState({ modalImg, isModalShow: true, tags });
  };

  render() {
    const { numPages } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleOnSubmit} />

        {this.state.isLoading && <Loader />}

        <ImageGallery images={this.state.images} openModal={this.toogleModal} />

        {numPages > 1 && this.state.currentPage < numPages && (
          <LoadMoreButton handleNextPage={this.nextPage} />
        )}

        {this.state.isModalShow && (
          <Modal
            modalImg={this.state.modalImg}
            tags={this.state.tags}
            closeModal={this.toogleModal}
          />
        )}
      </Container>
    );
  }
}

export { App };
