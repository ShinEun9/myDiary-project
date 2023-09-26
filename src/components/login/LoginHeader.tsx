import { FC } from 'react';
import styles from './LoginHeader.module.css';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

const LoginHeader: FC = () => {
  return (
    <header className={styles['header']}>
      <h1>
        <span className="a11y-hidden">오늘 당신의 일기는</span>
        <LogoImg />
      </h1>
    </header>
  );
};

export default LoginHeader;
