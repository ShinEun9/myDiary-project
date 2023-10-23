import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuthContext from './hooks/useAuthContext';
import useTitle from './hooks/useTitle';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const Signup = lazy(() => import('./pages/signup/Signup'));
const NotFound = lazy(() => import('./pages/notfound/NotFound'));

function App() {
  const { isAuthReady, user } = useAuthContext();
  useTitle();

  return (
    <Suspense fallback={<div className="loading">loading...</div>}>
      <div>
        {isAuthReady ? (
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />}></Route>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />}></Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        ) : (
          <div className="loading">loading...</div>
        )}
      </div>
    </Suspense>
  );
}

export default App;
