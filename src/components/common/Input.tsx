import { FC } from 'react';
import styles from './Input.module.css';

interface Props {
  type: 'text' | 'email' | 'password';
  id: string;
  required?: boolean;
  placeholder?: string;
}
const Input: FC<Props> = (props) => {
  return <input className={styles['input-style']} {...props} autoComplete={'off'} />;
};

export default Input;
