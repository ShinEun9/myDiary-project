import { useEffect, useRef, KeyboardEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';
import Button from './Button';
import styles from './Modal.module.css';
import { ReactComponent as IconClose } from '../../assets/icon-close.svg';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleConfirmClick: () => void;
  selector?: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children, isOpen, selector, handleClose, handleConfirmClick }) => {
  const firstEl = useRef<HTMLButtonElement>(null);
  const lastEl = useRef<HTMLButtonElement>(null);

  const handleFirstElKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      if (lastEl.current) {
        lastEl.current.focus();
      }
    }
  };

  const handleLastBtnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      if (firstEl.current) {
        firstEl.current.focus();
      }
    }
  };

  const handleEscKeyDown = (e: Event) => {
    if ((e as unknown as KeyboardEvent).key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyDown);
      if (firstEl.current) firstEl.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [isOpen]);

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enterActive: styles['modal-enter'],
        enterDone: styles['modal-enter-active'],
        exitActive: styles['modal-exit'],
        exitDone: styles['modal-exit-active'],
      }}
      unmountOnExit
    >
      <Portal selector={selector}>
        <div className={styles.overlay} onClick={handleClose}>
          <article className={styles['modal-container']}>
            {children}
            <div className={styles['button-group']}>
              <Button ref={firstEl} type="button" onClick={handleClose} onKeyDown={handleFirstElKeyDown}>
                취소
              </Button>
              <Button type="button" onClick={handleConfirmClick}>
                확인
              </Button>
            </div>
            <button
              ref={lastEl}
              onKeyDown={handleLastBtnKeyDown}
              className={styles['btn-modal-close']}
              type={'button'}
              onClick={handleClose}
            >
              <IconClose />
              <span className="a11y-hidden">모달 창 닫기 버튼</span>
            </button>
          </article>
        </div>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
