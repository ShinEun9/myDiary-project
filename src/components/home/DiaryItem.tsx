import { FC, useState, useRef } from 'react';
import styles from './DiaryItem.module.css';
import classNames from 'classnames/bind';
import DiaryFormContent from './DiaryFormContent';
import Modal from '../common/Modal';
import useFirestore from '../../hooks/useFireStore';
import useInputs from '../../hooks/useInputs';
import useModal from '../../hooks/useModal';
import { FormSubmitEvent } from '../../typings/eventTypes';
import { DirayFormState, Diary } from '../../typings';
import formattingTime from '../../utils/formattingTime';
import feelingData from '../../utils/feelingData';

const stylesBind = classNames.bind(styles);

const DiaryItem: FC<{ item: Diary }> = ({ item }) => {
  const [inputs, onChange, setInputs] = useInputs<DirayFormState>({ feeling: '', title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);

  const { deleteDocument, editDocument, state } = useFirestore('diary');
  const { isOpen, handleOpen, handleClose } = useModal();
  const deleteBtnRef = useRef<HTMLButtonElement>(null);

  const handleEditBtnClick = () => {
    const { feeling, title, content } = item;
    setInputs({ feeling, title, content });
    setIsEditing(true);
  };

  const handleDeleteBtnClick = () => {
    deleteDocument(item.id);
    if (state.isSuccess) {
      handleClose();
    }
  };

  const handleFormSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    editDocument(item.id, { ...inputs });
    if (state.isSuccess) {
      setIsEditing(false);
    }
  };

  return (
    <>
      <article className={styles['diary-article']}>
        {!isEditing && (
          <>
            <div className={stylesBind('article-feeling', item.feeling)}>
              <span className="a11y-hidden">{feelingData[item.feeling]}</span>
            </div>
            <h3 className={styles['article-title']}>{item.title}</h3>

            <time
              className={styles['article-time']}
              dateTime={formattingTime(item.createdTime.seconds).replaceAll('.', '-').slice(0, 10)}
            >
              {formattingTime(item.createdTime.seconds)}
            </time>
            <p className={styles['article-content']}>{item.content}</p>
            <div className={styles['button-group']}>
              <>
                <button type="button" className={styles['btn-edit']} onClick={handleEditBtnClick}>
                  <span className="a11y-hidden">일기 수정버튼</span>
                </button>
                <span></span>
                <button ref={deleteBtnRef} type="button" className={styles['btn-delete']} onClick={handleOpen}>
                  <span className="a11y-hidden">일기 삭제버튼</span>
                </button>
              </>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <h3 className="a11y-hidden">편집모드</h3>
            <form onSubmit={handleFormSubmit}>
              <DiaryFormContent onChange={onChange} inputs={inputs} suffix={`edit${item.id}`} />

              <div className={styles['button-group']}>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
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
        handleConfirmClick={handleDeleteBtnClick}
        externalBtnRef={deleteBtnRef}
      >
        <h2 id={'modal-diaryDelete'}>정말 일기를 삭제하시겠습니까?</h2>
      </Modal>
    </>
  );
};

export default DiaryItem;
