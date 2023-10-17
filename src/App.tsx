import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import NotFound from './pages/notfound/NotFound';
import useAuthContext from './hooks/useAuthContext';
import useTitle from './hooks/useTitle';

function App() {
  const { isAuthReady, user } = useAuthContext();
  useTitle();

  return (
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
  );
}

export default App;
