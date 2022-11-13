import React, { useEffect, useState } from 'react';

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

const App = () => {
  const pixabay = new Pixabay();

  // Global states
  const [images, setImages] = useState([]);
  const [hits, setHits] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoadingStatus] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [tags, setTags] = useState('');
  const [isModalShow, setShowModal] = useState(false);

  // On mount component
  useEffect(() => {
    try {
      // getImages();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // On update component
  useEffect(() => {
    // getImages(searchValue, currentPage);
    console.log('upd');
  }, [searchValue, currentPage]);

  // On update search value
  const updateSearchValue = newValue => {
    setSearchValue(newValue);
  };

  // Get image by name, http req
  const getImages = async (imageName = '', page = 1) => {
    // Show loading spin
    // setLoadingStatus(true);

    // Send req for images
    // await pixabay.fetchImagesByName(imageName, page);

    // setHits(pixabay.hits);
    // setNumPages(pixabay.numPages);

    // console.log(currentPage);
    // console.log(page);
    // currentPage !== page && setCurrPage(pixabay.currentPage);

    // setLoadingStatus(false);

    // setImages(prevImages => {
    //   return [...prevImages, ...pixabay.images];
    // });
    console.log('get');
  };

  // Click on the next page
  const nextPage = () => {
    // this.setState(prevState => {
    //   return { ...prevState, currentPage: prevState.currentPage + 1 };
    // });
  };

  // On submit
  const handleOnSubmit = searchValue => {
    // console.log(this.state);
    // if (searchValue !== this.state.searchValue)
    //   this.setState({
    //     searchValue,
    //     images: [],
    //     currentPage: 1,
    //     numPages: 1,
    //   });
  };

  // Toggle for modal image
  const toogleModal = (modalImg, tags) => {
    // if (!modalImg) {
    //   this.setState({ modalImg: '', isModalShow: false, tags: '' });
    //   return;
    // }
    // this.setState({ modalImg, isModalShow: true, tags });
  };

  return (
    <Container>
      <Searchbar onSubmit={handleOnSubmit} />

      {isLoading && <Loader />}

      <ImageGallery images={images} openModal={toogleModal} />

      {numPages > 1 && currentPage < numPages && (
        <LoadMoreButton handleNextPage={nextPage} />
      )}

      {isModalShow && (
        <Modal modalImg={modalImg} tags={tags} closeModal={toogleModal} />
      )}
    </Container>
  );
};

export { App };
