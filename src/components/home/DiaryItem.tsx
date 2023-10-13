import { FC, FormEvent, useState, useRef } from 'react';
import { useFirestore } from '../../hooks/useFireStore';
import styles from './DiaryItem.module.css';
import classNames from 'classnames/bind';
import DiaryFormContent from './DiaryFormContent';
import Modal from '../common/Modal';
import useInputs from '../../hooks/useInputs';
import useModal from '../../hooks/useModal';
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
  const { isOpen, handleOpen, handleClose } = useModal();
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    <>
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
                <button ref={buttonRef} type="button" onClick={handleOpen}>
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
      <Modal
        id={'modal-diaryDelete'}
        selector="#modal-root"
        isOpen={isOpen}
        handleClose={handleClose}
        handleConfirmClick={() => {
          deleteDocument(item.id);
          handleClose();
        }}
        externalBtnRef={buttonRef}
      >
        <h2 id={'modal-diaryDelete'}>정말 일기를 삭제하시겠습니까?</h2>
      </Modal>
    </>
  );
};

export default DiaryItem;
