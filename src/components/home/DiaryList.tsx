import React, { FC } from 'react';
import DiaryItem from './DiaryItem';

interface diaryItem {
  id: number;
  title: string;
  content: string;
}

const DiaryList = () => {
  const diaries = [
    { id: 1, title: 'hi', content: 'hi' },
    { id: 2, title: 'hi', content: 'hi' },
  ];

  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <DiaryItem item={item} />
          </li>
        );
      })}
    </>
  );
};

export default DiaryList;
