import { ChangeEvent, FC } from 'react';
import styles from './DiaryFormContent.module.css';
import classNames from 'classnames/bind';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import feelingData from '../../utils/feelingData';
import { DirayFormState } from '../../typings';

const stylesBind = classNames.bind(styles);

interface PropTypes {
  inputs: DirayFormState;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  suffix: string;
}
const DiaryFormContent: FC<PropTypes> = ({ inputs, onChange, suffix }) => {
  return (
    <>
      <fieldset className={styles['button-group']}>
        <legend className="a11y-hidden">오늘의 당신의 기분을 선택해보세요</legend>
        {Object.entries(feelingData).map(([key, value]) => (
          <label key={key} htmlFor={`${suffix}${key}`} className={styles['btn-feeling']}>
            <input
              name={'feeling'}
              id={`${suffix}${key}`}
              className="a11y-hidden"
              type="radio"
              value={key}
              onChange={onChange}
            />
            <span className={stylesBind('check', inputs.feeling === key && 'checked')}>{value}</span>
          </label>
        ))}
      </fieldset>

      <label htmlFor="title" className="a11y-hidden">
        제목
      </label>
      <Input id="title" type="text" placeholder="제목" onChange={onChange} value={inputs.title} />

      <label className="a11y-hidden" htmlFor="content">
        일기 내용
      </label>
      <TextArea id="content" placeholder="오늘의 비밀은 무엇인가요?" onChange={onChange} value={inputs.content} />
    </>
  );
};

export default DiaryFormContent;
