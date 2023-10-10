import { Timestamp } from 'firebase/firestore';

// form input Type
export interface LoginFormState {
  email: string;
  password: string;
}

export interface SignupFormState {
  email: string;
  password: string;
  nickname: string;
}

export interface DirayFormState {
  feeling: string;
  title: string;
  content: string;
}

// DiaryItem
export interface DiaryItem {
  id: string;
  uid: string;
  createdTime: Timestamp;
  feeling: 'rainbow' | 'cloud' | 'moon' | 'rain';
  title: string;
  content: string;
}
