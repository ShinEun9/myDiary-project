import { FC, FormEvent, useState } from 'react';
import { useFirestore } from '../../hooks/useFireStore';
import styles from './DiaryItem.module.css';
import classNames from 'classnames/bind';
import DiaryFormContent from './DiaryFormContent';
import useInputs from '../../hooks/useInputs';
import iconEdit from '../../assets/icon-edit.svg';
import iconDelete from '../../assets/icon-delete.svg';
import formattingTime from '../../utils/formattingTime';
import feelingData from '../../utils/feelingData';

import { DirayFormState, DiaryItem as Diary } from '../../typings';

const stylesBind = classNames.bind(styles);

const DiaryItem: FC<{ item: Diary }> = ({ item }) => {
  const [inputs, onChange, setInputs] = useInputs<DirayFormState>({ feeling: '', title: '', content: '' });
  const { deleteDocument, editDocument } = useFirestore('diary');
  const [editMode, setEditMode] = useState(false);

  const handleEditBtnClick = () => {
    const { feeling, title, content } = item;
    setInputs({ feeling, title, content });
    setEditMode(true);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editDocument(item.id, { ...inputs });
    setEditMode(false);
  };

  return (
    <article className={stylesBind('diary-article', !editMode && 'show-icon', item.feeling)}>
      {!editMode && (
        <>
          <span className="a11y-hidden">{feelingData[item.feeling]}</span>
          <h3 className={stylesBind('article-title', item.feeling)}>{item.title}</h3>
          <time
            className={styles['article-time']}
            dateTime={formattingTime(item.createdTime.seconds).replaceAll('.', '-').slice(0, 10)}
          >
            {formattingTime(item.createdTime.seconds)}
          </time>
          <p className={styles['article-content']}>{item.content}</p>
          <div className={styles['button-group']}>
            <>
              <button type="button">
                <img src={iconEdit} alt="수정" onClick={handleEditBtnClick} />
              </button>
              <span></span>
              <button type="button" onClick={() => deleteDocument(item.id)}>
                <img src={iconDelete} alt="삭제" />
              </button>
            </>
          </div>
        </>
      )}

      {editMode && (
        <>
          <h3 className="a11y-hidden">편집모드</h3>
          <form onSubmit={handleFormSubmit}>
            <DiaryFormContent onChange={onChange} inputs={inputs} suffix={`edit${item.id}`} />

            <div className={styles['button-group']}>
              <button
                type="button"
                onClick={() => {
                  setEditMode(false);
                }}
              >
                취소
              </button>
              <span></span>
              <button type="submit">완료</button>
            </div>
          </form>
        </>
      )}
    </article>
  );
};

export default DiaryItem;
