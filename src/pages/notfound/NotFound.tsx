import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import Button from '../../components/common/Button';
import { ReactComponent as NotFoundImage } from '../../assets/not-found.svg';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <main>
        <h1 className="a11y-hidden">404 페이지</h1>
        <NotFoundImage className={styles.image} />
        <section>
          <h2 className={styles.title}>페이지를 찾을 수 없습니다</h2>
          <p className={styles['title-desc']}>
            페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. 웹 주소가 올바른지 확인해 주세요.
          </p>
          <Button
            type={'button'}
            onClick={() => {
              navigate('/');
            }}
          >
            메인으로
          </Button>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
