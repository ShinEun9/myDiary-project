import { useMemo } from 'react';
import styles from './Home.module.css';
import DiaryForm from '../../components/home/DiaryForm';
import DiaryList from '../../components/home/DiaryList';
import Header from '../../components/home/Header';
import getDate from '../../utils/getDate';
import useAuthContext from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';
import { Diary } from '../../typings';
import { where } from 'firebase/firestore';

const Home = () => {
  const date = useMemo(() => {
    return getDate();
  }, []);

  const { user } = useAuthContext();
  const { documents, error } = useCollection('diary', [where('uid', '==', user?.uid)]);

  return (
    <>
      <Header />
      <main className={styles['container']}>
        <section className={styles['form-container']}>
          <h2>{date}, 오늘 당신의 날씨는?</h2>
          <DiaryForm uid={user?.uid} />
        </section>

        <section className={styles['list-container']}>
          <h2 className="a11y-hidden">일기목록</h2>
          <ul>
            {error && <strong>{error}</strong>}
            {documents && <DiaryList diaries={documents as unknown as Diary[]} />}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
