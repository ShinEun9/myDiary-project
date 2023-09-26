import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import LoginHeader from '../../components/login/LoginHeader';
import LoginForm from '../../components/login/LoginForm';

const Login = () => {
  return (
    <>
      <>
        <div className={styles['login-wrapper']}>
          <LoginHeader />
          <main>
            <LoginForm />
          </main>
          <Link to="/signup" className={styles['btn-link']}>
            회원가입하러가기
          </Link>
        </div>
      </>
    </>
  );
};

export default Login;
