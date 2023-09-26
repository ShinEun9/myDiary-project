import React from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const isPending = false;
  const error = null;

  return (
    <form className={styles['form-wrap']}>
      <label className={styles['label']} htmlFor="user-email">
        이메일
      </label>
      <Input type="email" id="user-email" />

      <label className={styles['label']} htmlFor="user-password">
        비밀번호
      </label>
      <Input type="password" id="user-password" />

      {!isPending && <Button>로그인</Button>}
      {isPending && <strong>로그인이 진행중입니다...</strong>}
      {error && <strong>{error}</strong>}
    </form>
  );
};

export default LoginForm;
