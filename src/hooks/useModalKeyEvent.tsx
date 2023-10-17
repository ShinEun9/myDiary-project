import { RefObject, useEffect, useRef } from 'react';
import { ButtonKeyboardEvent } from '../typings/eventTypes';

const useModalKeyEvent = (isOpen: boolean, externalBtnRef: RefObject<HTMLButtonElement>, handleClose: () => void) => {
  const firstEl = useRef<HTMLButtonElement>(null);
  const lastEl = useRef<HTMLButtonElement>(null);

  const handleFirstElKeyDown = (e: ButtonKeyboardEvent) => {
    if (e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      if (lastEl.current) {
        lastEl.current.focus();
      }
    }
  };

  const handleLastElKeyDown = (e: ButtonKeyboardEvent) => {
    if (!e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      if (firstEl.current) {
        firstEl.current.focus();
      }
    }
  };

  useEffect(() => {
    const handleEscKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
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

  return { handleFirstElKeyDown, handleLastElKeyDown, firstEl, lastEl };
};

export default useModalKeyEvent;
