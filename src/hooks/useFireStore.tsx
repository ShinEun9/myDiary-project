import { useReducer } from 'react';
import { appFireStore, timeStamp } from '../firebase/config';
import { collection, addDoc, deleteDoc, doc, updateDoc, DocumentReference } from 'firebase/firestore';

interface State {
  document: DocumentReference | null;
  isPending: boolean;
  error: string | null;
  success: boolean;
}

type Action =
  | { type: 'SET_IS_PENDING' }
  | { type: 'ADD_DOC'; payload: DocumentReference }
  | { type: 'DELETE_DOC' }
  | { type: 'EDIT_DOC' }
  | { type: 'SET_ERROR'; payload: string };

const initialState: State = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_IS_PENDING':
      return { ...state, isPending: true, document: null, success: false, error: null };
    case 'ADD_DOC':
      return {
        ...state,
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'DELETE_DOC':
      return { ...state, isPending: false, document: null, success: true, error: null };
    case 'EDIT_DOC':
      return {
        ...state,
        isPending: false,
        success: true,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useFirestore = (transaction: string) => {
  const [response, dispatch] = useReducer(storeReducer, initialState);
  const colRef = collection(appFireStore, transaction);

  const addDocument = async (doc: object) => {
    dispatch({ type: 'SET_IS_PENDING' });
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: 'ADD_DOC', payload: docRef });
    } catch (e) {
      dispatch({ type: 'SET_ERROR', payload: (e as { message: string }).message });
    }
  };

  const deleteDocument = async (id: string) => {
    dispatch({ type: 'SET_IS_PENDING' });
    try {
      await deleteDoc(doc(colRef, id));
      dispatch({ type: 'DELETE_DOC' });
    } catch (e) {
      dispatch({ type: 'SET_ERROR', payload: (e as { message: string }).message });
    }
  };

  const editDocument = async (id: string, inputs: object) => {
    dispatch({ type: 'SET_IS_PENDING' });
    try {
      await updateDoc(doc(colRef, id), inputs);
      dispatch({ type: 'EDIT_DOC' });
    } catch (e) {
      dispatch({ type: 'SET_ERROR', payload: (e as { message: string }).message });
    }
  };

  return { addDocument, deleteDocument, editDocument, response };
};

export default useFirestore;
