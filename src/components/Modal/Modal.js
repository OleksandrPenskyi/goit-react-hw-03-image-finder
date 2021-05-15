import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeToCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeToCloseModal);
  }

  handleEscapeToCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropToCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropToCloseModal}>
        <div className="Modal">
          <img src={largeImageURL} alt="big-img" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
