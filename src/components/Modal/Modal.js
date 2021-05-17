import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

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
      <div className={style.Overlay} onClick={this.handleBackdropToCloseModal}>
        <div className={style.Modal}>
          <img src={largeImageURL} alt="largeImage" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
