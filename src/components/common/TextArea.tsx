import { FC } from 'react';
import styles from './TextArea.module.css';
import { TextInputChangeEvent } from '../../typings/eventTypes';

interface Props {
  id: string;
  placeholder?: string;
  onChange: (e: TextInputChangeEvent) => void;
  value: string;
}

const TextArea: FC<Props> = (props) => {
  return <textarea className={styles.textarea} {...props} />;
};

export default TextArea;
