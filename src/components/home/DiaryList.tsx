import { FC } from 'react';
import DiaryItem from './DiaryItem';
import { DiaryItem as Diary } from '../../typings';

const DiaryList: FC<{ diaries: Diary[] }> = ({ diaries }) => {
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
