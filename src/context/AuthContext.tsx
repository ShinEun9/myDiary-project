import { FC, ReactNode, createContext, useReducer, useEffect, Reducer, Dispatch } from 'react';
import { appAuth } from '../firebase/config';
import { User } from 'firebase/auth';

interface State {
  user: User | null;
  isAuthReady: boolean;
}

type Action = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' } | { type: 'SET_AUTH_READY'; payload: User | null };

interface ContextState extends State {
  dispatch: Dispatch<Action>;
}

const initialState = {
  user: null,
  isAuthReady: false,
};
const AuthContext = createContext<ContextState>({
  ...initialState,
  dispatch: () => {},
});

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.payload };
      case 'LOGOUT':
        return { ...state, user: null };
      case 'SET_AUTH_READY':
        return { ...state, user: action.payload, isAuthReady: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer<Reducer<State, Action>>(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: 'SET_AUTH_READY', payload: user });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
