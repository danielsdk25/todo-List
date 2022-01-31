import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/modal/Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBg">{children}</div>,
    document.getElementById('modal')
  );
}

export { Modal };
