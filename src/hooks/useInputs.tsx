import { useState, useCallback, useEffect, ChangeEvent, Dispatch, SetStateAction } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function useInputs<T>(initialData: T): [T, (e: InputEvent) => void, Dispatch<SetStateAction<T>>] {
  const [inputs, setInputs] = useState<T>(initialData);

  const onChange = useCallback((e: InputEvent) => {
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
