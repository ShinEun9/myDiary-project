import React, { FC } from 'react';
import styles from './DiaryItem.module.css';
import iconEdit from '../../assets/icon-edit.svg';
import iconDelete from '../../assets/icon-delete.svg';

const DiaryItem: FC<{ item: object }> = ({ item }) => {
  const edit = false;

  return (
    <article className={styles['diary-article']}>
      <h3 className={styles['article-title']}>오늘 내기분은</h3>
      <time className={styles['article-time']}>{new Date().toString()}</time>
      <p className={styles['article-content']}>구름이 잔뜩 끼었다</p>
      <div className={styles['button-group']}>
        {edit ? (
          <>
            <button type="button">취소</button>
            <span></span>
            <button type="button">완료</button>
          </>
        ) : (
          <>
            <button type="button">
              <img src={iconEdit} alt="수정" />
            </button>
            <span></span>
            <button type="button">
              <img src={iconDelete} alt="삭제" />
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default DiaryItem;
