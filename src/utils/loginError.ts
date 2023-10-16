export const errorCode = ['auth/email-already-in-use', 'auth/email-already-in-use', 'auth/weak-password'];
export const errorDesc = [
  '비밀번호를 일정 횟수 이상 잘못 입력하셨습니다. 잠시 후 다시 시도해 주십시오.',
  '올바르지 않은 이메일 또는 비밀번호입니다.',
];

const loginError = (err: string) => {
  if (err === errorCode[0]) {
    return errorDesc[0];
  } else {
    return errorDesc[1];
  }
};

export default loginError;
