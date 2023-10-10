import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as LogoutImg } from '../../assets/icon-logout.svg';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <header className={styles['header']}>
      <div className={styles['header-wrap']}>
        <h1>
          <span className="a11y-hidden">오늘 당신의 일기는</span>
          <Link to="/">
            <LogoImg className={styles['logo']} />
          </Link>
        </h1>
        <div className={styles['hello-txt-container']}>
          {user && (
            <>
              <p className={styles['hello-txt']}>
                환영합니다 <strong>{user.displayName}</strong>님!
              </p>
              <button type={'button'} className={styles['btn-logout']} onClick={logout}>
                <LogoutImg className={styles['svg']} />
                <span>로그아웃</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
