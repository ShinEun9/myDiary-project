import { FormEvent, ChangeEvent, KeyboardEvent } from 'react';

export type FormSubmitEvent = FormEvent<HTMLFormElement>;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export type TextInputChangeEvent = InputChangeEvent | ChangeEvent<HTMLTextAreaElement>;
export type ButtonKeyboardEvent = KeyboardEvent<HTMLButtonElement>;
