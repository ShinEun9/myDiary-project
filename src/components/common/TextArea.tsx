import { FC, ChangeEvent } from 'react';
import styles from './TextArea.module.css';

interface Props {
  id: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const TextArea: FC<Props> = (props) => {
  return <textarea className={styles['textarea']} {...props} />;
};

export default TextArea;
