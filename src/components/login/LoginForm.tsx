import { useState, ChangeEvent, FormEvent } from 'react';
import { useLogin } from '../../hooks/useLogin';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import useInputs from '../../hooks/useInputs';

type LoginData = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const [inputs, onChange] = useInputs<LoginData>({ email: '', password: '' });
  const { error, isPending, login, emailRef } = useLogin();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(inputs.email, inputs.password);
  };

  return (
    <form className={'form-wrap'} onSubmit={handleFormSubmit}>
      <label className={'label'} htmlFor="email">
        이메일
      </label>
      <Input ref={emailRef} type="email" id="email" onChange={onChange} value={inputs.email} />

      <label className={'label'} htmlFor="password">
        비밀번호
      </label>
      <Input type="password" id="password" onChange={onChange} value={inputs.email} />

      {!isPending && <Button>로그인</Button>}
      {isPending && <strong className="pending">로그인이 진행중입니다...</strong>}
      {error && <strong className="error">* {error}</strong>}
    </form>
  );
};

export default LoginForm;
