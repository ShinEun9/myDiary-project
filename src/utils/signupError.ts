export const errorCode = ['auth/email-already-in-use', 'auth/email-already-in-use', 'auth/weak-password'];
export const errorDesc = [
  '이미 사용중인 이메일입니다.',
  '유효하지 않은 이메일입니다.',
  '비밀번호가 너무 짧습니다. 다시 입력해주세요',
];

const signupError = (err: string) => {
  if (err === errorCode[0]) {
    return errorDesc[0];
  } else if (err === errorCode[1]) {
    return errorDesc[1];
  } else if (err === errorCode[2]) {
    return errorDesc[2];
  }
  return '';
};

export default signupError;
