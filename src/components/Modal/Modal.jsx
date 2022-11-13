import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// Check types of props
import PropTypes from 'prop-types';

// Styles
import { ModalStyled, Overlay, Image } from './Modal.styled';

const modalRef = document.querySelector('#modal-img');

const Modal = ({ modalImg, tags, closeModal }) => {
  const closeByEscape = e => {
    if (e.code === 'Escape') {
      handleOverlayClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeByEscape);

    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
  }, []);

  const handleOverlayClick = () => {
    closeModal();
  };

  const handleModalImg = e => {
    e.stopPropagation();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalStyled>
        <Image src={modalImg} alt={tags} onClick={handleModalImg} />
      </ModalStyled>
    </Overlay>,
    modalRef
  );
};

export { Modal };

// Types
Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  tags: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
