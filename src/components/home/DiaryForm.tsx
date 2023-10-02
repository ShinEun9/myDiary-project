import { FC } from 'react';
import styles from './DiaryForm.module.css';
import Input from '../common/Input';
import Button from '../common/Button';

const feeling = ['rainbow', 'cloud', 'rain', 'moon'];
const feelingDesc = ['기분맑음', '기분흐림', '기분우울', '기분고요'];

const DiaryForm: FC<{ uid: number }> = ({ uid }) => {
  return (
    <form>
      <fieldset className={styles['button-group']}>
        <legend className="a11y-hidden">오늘의 당신의 기분을 선택해보세요</legend>
        {feeling.map((item, index) => (
          <label key={item} className={styles['btn-feeling']}>
            <input className="a11y-hidden" type="radio" name="feeling" value={item} />
            <span className={styles.check}>{feelingDesc[index]}</span>
          </label>
        ))}
      </fieldset>
      <label className="a11y-hidden" htmlFor="diary-title">
        제목
      </label>
      <Input id="diary-title" type="text" placeholder="제목" />
      <label className="a11y-hidden" htmlFor="diary-content">
        일기 내용
      </label>
      <textarea id="diary-content" className={styles['diary-textarea']} placeholder="오늘의 비밀은 무엇인가요?" />
      <Button>작성하기</Button>
    </form>
  );
};

export default DiaryForm;
