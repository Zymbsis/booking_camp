import { useCallback, useEffect } from 'react';
import { useModal } from '../ModalProvider';
import Icon from '../shared/Icon';
import css from './ModalBackdrop.module.css';

const ModalBackdrop = ({ children }) => {
  const { closeModal } = useModal();

  const handleCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, [handleCloseModal]);

  return (
    <div
      className={css.backdrop}
      onClick={handleCloseModal}>
      <div className={css.modalWrapper}>
        {children}
        <button
          className={css.closeBtn}
          onClick={handleCloseModal}
          type='button'
          aria-label='close-button'>
          <Icon iconId='icon-closeBtn' />
        </button>
      </div>
    </div>
  );
};

export default ModalBackdrop;
