import { useRef, useState } from 'react';
import { appAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import signupError, { errorCode } from '../utils/signupError';
import useAuthContext from './useAuthContext';

const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useAuthContext();

  const signup = (email: string, password: string, nickname: string) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName: nickname })
          .then(() => {
            setError(null);
            setIsPending(false);
            dispatch({ type: 'LOGIN', payload: user });
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
          });
      })
      .catch((err) => {
        setError(signupError(err.code));
        setIsPending(false);

        if (err.code === errorCode[2]) {
          passwordRef.current?.focus();
        } else {
          emailRef.current?.focus();
        }
      });
  };
  return { error, isPending, signup, emailRef, passwordRef };
};

export default useSignup;
