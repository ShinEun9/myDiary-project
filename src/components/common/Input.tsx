import { forwardRef, ChangeEvent, RefObject } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.css';

const stylesBind = classNames.bind(styles);

interface Props {
  type: 'text' | 'email' | 'password';
  id: string;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
const Input = forwardRef<HTMLInputElement, Props>(({ error, ...rest }, ref) => {
  return (
    <input ref={ref} className={stylesBind('input-style', error && 'error')} {...rest} autoComplete={'off'} required />
  );
});

export default Input;
