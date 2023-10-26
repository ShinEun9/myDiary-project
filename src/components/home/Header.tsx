import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Modal from '../common/Modal';
import { ReactComponent as ImageLogo } from '../../assets/logo.svg';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogout';
import useModal from '../../hooks/useModal';

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { isOpen, handleOpen, handleClose } = useModal();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.header}>
      <div className={styles['header-wrap']}>
        <h1 className={styles['header-left']}>
          <Link to="/">
            <span className="a11y-hidden">오늘 당신의 일기는</span>
            <ImageLogo />
          </Link>
        </h1>
        <div className={styles['header-right']}>
          {user && (
            <>
              <p className={styles['greeting-txt']}>
                환영합니다 <strong>{user.displayName}</strong>님!
              </p>
              <button ref={buttonRef} type={'button'} className={styles['btn-logout']} onClick={handleOpen}>
                <span>로그아웃</span>
              </button>
            </>
          )}
        </div>
      </div>
      <Modal
        id={'modal-logout'}
        selector="#modal-root"
        isOpen={isOpen}
        handleClose={handleClose}
        handleConfirmClick={() => {
          logout();
          handleClose();
        }}
        externalBtnRef={buttonRef}
      >
        <h2 id={'modal-logout'}>정말 로그아웃 하시겠습니까?</h2>
      </Modal>
    </header>
  );
};

export default Header;
