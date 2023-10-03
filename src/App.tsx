import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import NotFound from './pages/notfound/NotFound';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { isAuthReady, user } = useAuthContext();

  return (
    <div>
      {isAuthReady ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />}></Route>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />}></Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default App;
