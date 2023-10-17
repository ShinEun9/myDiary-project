import { FC, ReactNode } from 'react';
import Header from '../common/Header';
import styles from './BasicLayout.module.css';

const BasicLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-inside']}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default BasicLayout;
