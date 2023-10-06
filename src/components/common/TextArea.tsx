import { FC, ChangeEvent } from 'react';
import styles from './TextArea.module.css';

interface PropTypes {
  id: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
}

const TextArea: FC<PropTypes> = (props) => {
  return <textarea className={styles['textarea']} {...props} />;
};

export default TextArea;
