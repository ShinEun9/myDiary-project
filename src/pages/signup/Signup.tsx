import { Link } from 'react-router-dom';
import SignupForm from '../../components/signup/SignupForm';
import BasicLayout from '../../components/layouts/BasicLayout';

const Signup = () => {
  return (
    <BasicLayout>
      <h2 className="title">
        <span>회원가입</span>
      </h2>
      <SignupForm />
      <Link to="/login" className="btn-link">
        로그인하러가기
      </Link>
    </BasicLayout>
  );
};

export default Signup;
