import { Link } from 'react-router-dom';
import BasicLayout from '../../components/layouts/BasicLayout';
import LoginForm from '../../components/login/LoginForm';

const Login = () => {
  return (
    <BasicLayout>
      <h2 className="title">
        <span>로그인</span>
      </h2>
      <LoginForm />
      <Link to="/signup" className="btn-link">
        회원가입하러가기
      </Link>
    </BasicLayout>
  );
};

export default Login;
