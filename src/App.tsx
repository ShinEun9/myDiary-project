import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  const user = null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />}></Route>
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
