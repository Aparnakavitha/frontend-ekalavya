import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import styles from "../Common.module.css";

const Modal = ({
  children,
  isOpen,
  onClose,
  widthVariant = "large",
  closeTimeoutMS = 200,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  ariaHideApp = true,
  overlayClassName = styles["modal-modalOverlay"],
  ...otherProps
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleRequestClose = () => {
    setIsVisible(false);
    setTimeout(onClose, closeTimeoutMS);
  };

  const modalClass = `${styles["modal-modalContent"]} ${styles[`modal-width-${widthVariant}`]} ${isVisible ? styles["opening"] : styles["closing"]}`;

  ReactModal.setAppElement(ariaHideApp ? "#root" : "");

  return (
    <ReactModal
      isOpen={isVisible}
      onRequestClose={handleRequestClose}
      className={modalClass}
      overlayClassName={overlayClassName}
      closeTimeoutMS={closeTimeoutMS}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      onAfterClose={() => setIsVisible(false)}
      {...otherProps}
    >
      <div className={styles["modal-contentScrollable"]}>{children}</div>
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  widthVariant: PropTypes.oneOf(["small", "medium", "large"]),
  closeTimeoutMS: PropTypes.number,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  ariaHideApp: PropTypes.bool,
  overlayClassName: PropTypes.string,
};

export default Modal;
