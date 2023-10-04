import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import { errorDesc } from '../../utils/signupError';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { error, isPending, signup, emailRef, passwordRef } = useSignup();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    } else if (e.target.type === 'text') {
      setDisplayName(e.target.value);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className={'form-wrap'} onSubmit={handleFormSubmit}>
      <label className={'label'} htmlFor="user-email">
        이메일
      </label>
      <Input
        error={error === errorDesc[0] || error === errorDesc[1]}
        ref={emailRef}
        type="email"
        id="user-email"
        onChange={handleInputChange}
      />

      <label className={'label'} htmlFor="user-password">
        비밀번호
      </label>
      <Input
        error={error === errorDesc[2]}
        ref={passwordRef}
        type="password"
        id="user-password"
        onChange={handleInputChange}
      />

      <label className={'label'} htmlFor="user-nickname">
        닉네임
      </label>
      <Input type="text" id="user-nickname" onChange={handleInputChange} />

      {!isPending && <Button>회원가입</Button>}
      {isPending && <strong className={'pending'}>회원가입이 진행중입니다...</strong>}
      {error && <strong className={'error'}>* {error}</strong>}
    </form>
  );
};

export default SignupForm;
