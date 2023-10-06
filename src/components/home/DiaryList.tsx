import React, { FC } from 'react';
import DiaryItem from './DiaryItem';
import { Document } from '../../typings/db';

const DiaryList: FC<{ diaries: Document[] }> = ({ diaries }) => {
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
