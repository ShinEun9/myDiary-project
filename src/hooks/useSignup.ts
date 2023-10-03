import { useRef, useState } from 'react';
import { appAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import signupError, { errorCode } from '../utils/signupError';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signup = (email: string, password: string, displayName: string) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName })
          .then(() => {
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
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
