import { FC } from 'react';
import Button from '../common/Button';
import DiaryFormContent from './DiaryFormContent';
import useFirestore from '../../hooks/useFireStore';
import useInputs from '../../hooks/useInputs';
import { DirayFormState } from '../../typings';
import { FormSubmitEvent } from '../../typings/eventTypes';

const DiaryForm: FC<{ uid?: string }> = ({ uid }) => {
  const { addDocument, state } = useFirestore('diary');
  const [inputs, onChange, setInputs] = useInputs<DirayFormState>({ feeling: '', title: '', content: '' });

  const handleFormSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    addDocument({
      ...inputs,
      uid,
    });
    if (state.isSuccess) {
      setInputs({ feeling: '', title: '', content: '' });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <DiaryFormContent inputs={inputs} onChange={onChange} suffix={'add'} />
      <Button>작성하기</Button>
    </form>
  );
};

export default DiaryForm;
