import React, { FC } from 'react';
import styles from './Button.module.css';

interface Props {
  children: string;
}
const Button: FC<Props> = ({ children }) => {
  return (
    <button className={styles['black-btn']} type="submit">
      {children}
    </button>
  );
};

export default Button;
