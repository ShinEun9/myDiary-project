import { FC, FormEvent } from 'react';
import Button from '../common/Button';
import { useFirestore } from '../../hooks/useFireStore';
import DiaryFormContent from './DiaryFormContent';
import useInputs from '../../hooks/useInputs';

export type DirayFormData = {
  feeling: string;
  title: string;
  content: string;
};

const DiaryForm: FC<{ uid?: string }> = ({ uid }) => {
  const { addDocument } = useFirestore('diary');
  const [inputs, onChange, setInputs] = useInputs<DirayFormData>({ feeling: '', title: '', content: '' });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addDocument({
      ...inputs,
      uid,
    });
    setInputs({ feeling: '', title: '', content: '' });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <DiaryFormContent inputs={inputs} onChange={onChange} suffix={'add'} />
      <Button>작성하기</Button>
    </form>
  );
};

export default DiaryForm;
