import { createPortal } from 'react-dom';

// Check types of props
import PropTypes from 'prop-types';

// Styles
import { ModalStyled, Overlay, Image } from './Modal.styled';
import { Component } from 'react';

const modalRef = document.querySelector('#modal-img');

class Modal extends Component {
  closeByEscape = e => {
    if (e.code === 'Escape') {
      this.handleOverlayClick();
    }
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.closeByEscape);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeByEscape);
  };

  handleOverlayClick = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  handleModalImg = e => {
    e.stopPropagation();
  };

  render() {
    const { modalImg, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalStyled>
          <Image src={modalImg} alt={tags} onClick={this.handleModalImg} />
        </ModalStyled>
      </Overlay>,
      modalRef
    );
  }
}

export { Modal };

// Types
Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  tags: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
