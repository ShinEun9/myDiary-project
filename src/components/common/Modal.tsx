import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';
import styles from './Modal.module.css';
import { ReactComponent as IconClose } from '../../assets/icon-close.svg';
import Button from './Button';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleConfirmClick: () => void;
  selector?: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children, isOpen, selector, handleClose, handleConfirmClick }) => {
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
              <Button type="button" onClick={handleClose}>
                취소
              </Button>
              <Button type="button" onClick={handleConfirmClick}>
                확인
              </Button>
            </div>
            <button className={styles['btn-modal-close']} type={'button'} onClick={handleClose}>
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
