import { useState, ChangeEvent, FormEvent } from 'react';
import { useLogin } from '../../hooks/useLogin';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login, emailRef } = useLogin();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className={'form-wrap'} onSubmit={handleSubmit}>
      <label className={'label'} htmlFor="user-email">
        이메일
      </label>
      <Input ref={emailRef} type="email" id="user-email" onChange={handleData} />

      <label className={'label'} htmlFor="user-password">
        비밀번호
      </label>
      <Input type="password" id="user-password" onChange={handleData} />

      {!isPending && <Button>로그인</Button>}
      {isPending && <strong className="pending">로그인이 진행중입니다...</strong>}
      {error && <strong className="error">* {error}</strong>}
    </form>
  );
};

export default LoginForm;
