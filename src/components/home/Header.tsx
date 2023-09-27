import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../typings/db';
import styles from './Header.module.css';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as LogoutImg } from '../../assets/icon-logout.svg';

const Header = () => {
  const user: IUser | null = null;
  return (
    <header className={styles['header']}>
      <div className={styles['header-wrap']}>
        <h1>
          <Link to="/">
            <LogoImg className={styles['logo']} />
          </Link>
        </h1>
        <div className={styles['hello-txt-container']}>
          {user && (
            <>
              <p className={styles['hello-txt']}>
                환영합니다 <strong>{(user as IUser).displayName}</strong>님!
              </p>
              <Link to="/" className={styles['btn-logout']}>
                <LogoutImg className={styles['svg']} />
                <span>로그아웃</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
