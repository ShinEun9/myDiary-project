import { forwardRef, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.css';

const stylesBind = classNames.bind(styles);

interface Props {
  id: string;
  type: 'text' | 'email' | 'password';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  error?: boolean;
}
const Input = forwardRef<HTMLInputElement, Props>(({ error, ...rest }, ref) => {
  return (
    <input ref={ref} className={stylesBind('input-style', error && 'error')} {...rest} autoComplete={'off'} required />
  );
});

export default Input;
