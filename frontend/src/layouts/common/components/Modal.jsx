import React from 'react';
import ReactModal from 'react-modal';
import styles from '../Common.module.css';
 
const Modal = ({ children, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`${styles["modal-modalContent"]}`}
      overlayClassName={`${styles["modal-modalOverlay"]}`}
      closeTimeoutMS={200}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;