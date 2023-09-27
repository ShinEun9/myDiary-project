import Input from '../common/Input';
import Button from '../common/Button';

const SignupForm = () => {
  const isPending = false;
  const error = null;

  return (
    <form className={'form-wrap'}>
      <label className={'label'} htmlFor="user-email">
        이메일
      </label>
      <Input type="email" id="user-email" />

      <label className={'label'} htmlFor="user-password">
        비밀번호
      </label>
      <Input type="password" id="user-password" />

      <label className={'label'} htmlFor="user-nickname">
        닉네임
      </label>
      <Input type="text" id="user-nickname" />

      {!isPending && <Button>회원가입</Button>}
      {isPending && <strong>로그인이 진행중입니다...</strong>}
      {error && <strong>{error}</strong>}
    </form>
  );
};

export default SignupForm;
