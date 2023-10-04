import { FC, ReactNode, createContext, useReducer, useEffect, Reducer, Dispatch } from 'react';
import { appAuth } from '../firebase/config';
import { User } from 'firebase/auth';

interface State {
  user: User | null;
  isAuthReady: boolean;
}

type Action = { type: 'login'; payload: User } | { type: 'logout' } | { type: 'authIsReady'; payload: User };

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
      case 'login':
        return { ...state, user: action.payload };
      case 'logout':
        return { ...state, user: null };
      case 'authIsReady':
        return { ...state, user: action.payload, isAuthReady: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer<Reducer<State, Action>>(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: 'authIsReady', payload: user as User });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
