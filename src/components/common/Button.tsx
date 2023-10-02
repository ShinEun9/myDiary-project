import React, { FC } from 'react';
import styles from './Button.module.css';

interface Props {
  type?: 'submit' | 'button';
  children: string;
  onClick?: () => void;
}
const Button: FC<Props> = ({ children, type, onClick }) => {
  return (
    <button className={styles['btn-black']} type={type && 'submit'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
