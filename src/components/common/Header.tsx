import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <h1>
        <Link to="/">
          <span className="a11y-hidden">오늘 당신의 날씨는? 로고이미지</span>
          <LogoImg className={styles['logo']} />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
