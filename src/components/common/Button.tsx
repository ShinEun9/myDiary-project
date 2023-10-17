import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonKeyboardEvent } from '../../typings/eventTypes';

interface Props {
  children: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  onKeyDown?: (e: ButtonKeyboardEvent) => void;
}
const Button = forwardRef<HTMLButtonElement, Props>(({ children, type, ...rest }, ref) => {
  return (
    <button ref={ref} className={styles['btn-black']} type={type && 'submit'} {...rest}>
      {children}
    </button>
  );
});

export default Button;
