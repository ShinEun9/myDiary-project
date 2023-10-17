import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { TextInputChangeEvent } from '../typings/eventTypes';

function useInputs<T>(initialData: T): [T, (e: TextInputChangeEvent) => void, Dispatch<SetStateAction<T>>] {
  const [inputs, setInputs] = useState<T>(initialData);

  const onChange = useCallback((e: TextInputChangeEvent) => {
    const { id, name, value } = e.target;

    if (e.currentTarget.type === 'radio') {
      setInputs((prev) => ({ ...prev, [name]: value }));
      return;
    }
    setInputs((prev) => ({ ...prev, [id]: value }));
  }, []);

  return [inputs, onChange, setInputs];
}

export default useInputs;
