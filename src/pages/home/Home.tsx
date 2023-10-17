import styles from './Home.module.css';
import DiaryForm from '../../components/home/DiaryForm';
import DiaryList from '../../components/home/DiaryList';
import Header from '../../components/home/Header';
import useAuthContext from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';
import { Diary } from '../../typings';
import { where } from 'firebase/firestore';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('diary', [where('uid', '==', user?.uid)]);

  return (
    <>
      <Header />
      <main className={styles['container']}>
        <section className={styles['form-container']}>
          <h2>2023-09-27의 비밀일기</h2>
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
