import React from 'react';
import styles from './Home.module.css';
import DiaryForm from '../../components/home/DiaryForm';
import DiaryList from '../../components/home/DiaryList';
import Header from '../../components/home/Header';

const Home = () => {
  const user = { uid: 3 };
  const error = null;
  const documents = {};
  return (
    <>
      <Header />
      <main className={styles['container']}>
        <section className={styles['form-container']}>
          <h2>2023-09-27의 비밀일기</h2>
          <DiaryForm uid={user.uid} />
        </section>

        <section className={styles['list-container']}>
          <h2 className="a11y-hidden">일기목록</h2>
          <ul>
            {error && <strong>{error}</strong>}
            {documents && <DiaryList />}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
