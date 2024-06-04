import React from 'react';
import ReactModal from 'react-modal';
import styles from '../Common.module.css';
 
const Modal = ({ children, isOpen, onClose, widthVariant = '914' }) => {
  const modalClass = `${styles["modal-modalContent"]} ${styles[`modal-width-${widthVariant}`]}`;
 
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={modalClass}
      overlayClassName={styles["modal-modalOverlay"]}
      closeTimeoutMS={200}
    >
      {children}
    </ReactModal>
  );
};
 
export default Modal;