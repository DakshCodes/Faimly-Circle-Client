import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import '../src/app.css'
import SetAvatar from './pages/SetAvatar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/setavatar" element={<SetAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
