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

  // On update component
  useEffect(() => {
    getImages(searchValue, currentPage);
  }, [searchValue, currentPage]);

  // On update search value
  const updateSearchValue = newValue => {
    setSearchValue(newValue);
  };

  // Get image by name, http req
  const getImages = async (imageName = '', page = 1) => {
    // Show loading spin
    setLoadingStatus(true);

    // Send req for images
    await pixabay.fetchImagesByName(imageName, page);

    setHits(pixabay.hits);
    setNumPages(pixabay.numPages);
    currentPage !== page && setCurrPage(pixabay.currentPage);
    setLoadingStatus(false);

    setImages(prevImages => {
      return [...prevImages, ...pixabay.images];
    });
  };

  // Click on the next page
  const nextPage = () => {
    setCurrPage(currentPage + 1);
  };

  // On submit
  const handleOnSubmit = newSearchValue => {
    if (searchValue !== newSearchValue) {
      setSearchValue(newSearchValue);
      setImages([]);
      setCurrPage(1);
      setNumPages(1);
    }
  };

  // Toggle for modal image
  const toogleModal = (modalImg, tags) => {
    if (!modalImg) {
      setModalImg('');
      setShowModal(false);
      setTags('');
      return;
    }

    setModalImg(modalImg);
    setShowModal(true);
    setTags(tags);
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
