import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import useLogin from '../../hooks/useLogin';
import useInputs from '../../hooks/useInputs';
import { FormSubmitEvent } from '../../typings/eventTypes';
import { LoginFormState } from '../../typings';

const LoginForm = () => {
  const [inputs, onChange] = useInputs<LoginFormState>({ email: '', password: '' });
  const { error, isPending, login, emailRef } = useLogin();

  const handleFormSubmit = (e: FormSubmitEvent) => {
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
      <Input type="password" id="password" onChange={onChange} value={inputs.password} />

      {!isPending && <Button>로그인</Button>}
      {isPending && <strong className="pending">로그인이 진행중입니다...</strong>}
      <div id="error-message" role="alert" aria-live="assertive">
        {error && <strong className="error">* {error}</strong>}
      </div>
    </form>
  );
};

export default LoginForm;
