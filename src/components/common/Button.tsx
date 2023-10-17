import { forwardRef, KeyboardEvent } from 'react';
import styles from './Button.module.css';

interface Props {
  children: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
}
const Button = forwardRef<HTMLButtonElement, Props>(({ children, type, ...rest }, ref) => {
  return (
    <button ref={ref} className={styles['btn-black']} type={type && 'submit'} {...rest}>
      {children}
    </button>
  );
});

export default Button;
