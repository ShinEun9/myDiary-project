import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <h1>
        <span className="a11y-hidden">오늘 당신의 일기는</span>
        <Link to={'/'}>
          <LogoImg className={styles['logo']} />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
