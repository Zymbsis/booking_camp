import { useEffect, useState } from 'react';
import { modalContext } from './index';
import { createPortal } from 'react-dom';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };
  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [modalContent]);

  return (
    <modalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <ModalBackdrop>{modalContent}</ModalBackdrop>,
          document.querySelector('#modal-root'),
        )}
    </modalContext.Provider>
  );
};

export default ModalProvider;
