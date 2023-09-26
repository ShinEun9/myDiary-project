import { FC } from 'react';
import styles from './Input.module.css';

interface Props {
  type: 'text' | 'email' | 'password';
  id: string;
  required?: boolean;
}
const Input: FC<Props> = ({ type, id, required }) => {
  return <input className={styles['input-style']} type={type} id={id} required />;
};

export default Input;
