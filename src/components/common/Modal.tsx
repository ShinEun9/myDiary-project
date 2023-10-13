import { useEffect, useRef, KeyboardEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';
import Button from './Button';
import styles from './Modal.module.css';
import { ReactComponent as IconClose } from '../../assets/icon-close.svg';
import useModalKeyEvent from '../../hooks/useModalKeyEvent';

interface Props {
  id: string;
  selector?: string;
  isOpen: boolean;
  handleClose: () => void;
  handleConfirmClick: () => void;
  children: React.ReactNode;
  externalBtnRef: React.RefObject<HTMLButtonElement>;
}

const Modal: React.FC<Props> = ({
  id,
  children,
  isOpen,
  selector,
  handleClose,
  handleConfirmClick,
  externalBtnRef,
}) => {
  const { handleFirstElKeyDown, handleLastBtnKeyDown, firstEl, lastEl } = useModalKeyEvent(
    isOpen,
    externalBtnRef,
    handleClose,
  );

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
          <article role="dialog" aria-modal="true" aria-labelledby={id} className={styles['modal-container']}>
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
