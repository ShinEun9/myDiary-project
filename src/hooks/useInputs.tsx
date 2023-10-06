import { useState, useCallback, ChangeEvent, Dispatch, SetStateAction } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function useInputs<T>(initialData: T): [T, (e: InputEvent) => void, Dispatch<SetStateAction<T>>] {
  const [inputs, setInputs] = useState<T>(initialData);

  const onChange = useCallback((e: InputEvent) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  return [inputs, onChange, setInputs];
}

export default useInputs;
