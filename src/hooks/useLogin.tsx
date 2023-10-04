import { useState, useRef } from 'react';
import { appAuth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const { dispatch } = useAuthContext();

  const login = (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: user });
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError('올바르지 않은 이메일 또는 비밀번호입니다.');
        setIsPending(false);

        emailRef.current?.focus();
      });
  };

  return { error, isPending, login, emailRef };
};
