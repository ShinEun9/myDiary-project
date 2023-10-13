import { useEffect, useRef, KeyboardEvent } from 'react';

const useModalKeyEvent = (
  isOpen: boolean,
  externalBtnRef: React.RefObject<HTMLButtonElement>,
  handleClose: () => void,
) => {
  const firstEl = useRef<HTMLButtonElement>(null);
  const lastEl = useRef<HTMLButtonElement>(null);

  const handleFirstElKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      if (lastEl.current) {
        lastEl.current.focus();
      }
    }
  };

  const handleLastBtnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      if (firstEl.current) {
        firstEl.current.focus();
      }
    }
  };

  useEffect(() => {
    const handleEscKeyDown = (e: Event) => {
      if ((e as unknown as KeyboardEvent).key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyDown);
      if (firstEl.current) {
        firstEl.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
      if (externalBtnRef.current) {
        externalBtnRef.current.focus();
      }
    };
  }, [isOpen]);

  return { handleFirstElKeyDown, handleLastBtnKeyDown, firstEl, lastEl };
};

export default useModalKeyEvent;
