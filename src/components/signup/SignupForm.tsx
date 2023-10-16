import { FormEvent } from 'react';
import useInputs from '../../hooks/useInputs';
import Input from '../common/Input';
import Button from '../common/Button';
import { useSignup } from '../../hooks/useSignup';
import { SignupFormState } from '../../typings';
import { errorDesc } from '../../utils/signupError';

const SignupForm = () => {
  const [inputs, onChange] = useInputs<SignupFormState>({ email: '', password: '', nickname: '' });
  const { error, isPending, signup, emailRef, passwordRef } = useSignup();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    signup(inputs.email, inputs.password, inputs.nickname);
  };

  return (
    <form className={'form-wrap'} onSubmit={handleFormSubmit}>
      <label className={'label'} htmlFor="email">
        이메일
      </label>
      <Input
        ref={emailRef}
        id="email"
        type="email"
        error={error === errorDesc[0] || error === errorDesc[1]}
        onChange={onChange}
        value={inputs.email}
      />

      <label className={'label'} htmlFor="password">
        비밀번호
      </label>
      <Input
        ref={passwordRef}
        id="password"
        type="password"
        error={error === errorDesc[2]}
        onChange={onChange}
        value={inputs.password}
      />

      <label className={'label'} htmlFor="nickname">
        닉네임
      </label>
      <Input type="text" id="nickname" onChange={onChange} value={inputs.nickname} />

      {!isPending && <Button>회원가입</Button>}
      {isPending && <strong className={'pending'}>회원가입이 진행중입니다...</strong>}
      <div id="error-message" role="alert" aria-live="assertive">
        {error && <strong className={'error'}>* {error}</strong>}
      </div>
    </form>
  );
};

export default SignupForm;
