import React, { useEffect } from 'react';

import ReactDOM from 'react-dom';

import { ModalProps } from './Modal.props';
import Close from '../../res/svg/Close';
import "./Modal.scss"

const target = document.querySelector('body') as Element;

const Modal = (props: ModalProps): any => {
  const { isOpen, onClickClose, children, title, hideIconClose } = props;

  useEffect(() => {
    const keyEscDown = (e: any) => {
      if (e.code === 'Escape') {
        onClickClose();
      }
    };
    document.addEventListener('keydown', keyEscDown);
    return () => {
      document.removeEventListener('keydown', keyEscDown);
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen]);

  let renderComponent = (
    <>
      <div className='modal-wrapper__close-container d-flex'
        onClick={(e) => {
          e.preventDefault();
          onClickClose();
        }}
      >
        <Close fill="#EEEEEE" width={22} height={35} />
      </div>
      {children}
    </>
  );

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='modal-wrapper' id="modal">
      <div className='modal-wrapper__back-drop'
        onClick={(e) => {
          e.preventDefault();
          onClickClose();
        }}
      />
      <div className="modal-wrapper__container">
        {renderComponent}
      </div>
    </div>,
    target,
  );
};

export default Modal;
