import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as LogoutImg } from '../../assets/icon-logout.svg';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
import Modal from '../common/Modal';
import useModal from '../../hooks/useModal';

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <header className={styles['header']}>
      <div className={styles['header-wrap']}>
        <h1>
          <Link to="/">
            <span className="a11y-hidden">오늘 당신의 일기는</span>

            <LogoImg className={styles['logo']} />
          </Link>
        </h1>
        <div className={styles['hello-txt-container']}>
          {user && (
            <>
              <p className={styles['hello-txt']}>
                환영합니다 <strong>{user.displayName}</strong>님!
              </p>
              <button type={'button'} className={styles['btn-logout']} onClick={handleOpen}>
                <LogoutImg className={styles['svg']} />
                <span>로그아웃</span>
              </button>
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        handleConfirmClick={() => {
          logout();
          handleClose();
        }}
        selector="#modal-root"
      >
        <h2>정말 로그아웃 하시겠습니까?</h2>
      </Modal>
    </header>
  );
};

export default Header;
