import React from 'react';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';

const App = () => {
  return (
    <div className="h-[100vh">
      <Routes>
        <Route index="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main/>} />
        <Route path="*" element={<div>NO PAGE FOUND</div>} />
      </Routes>
      
    </div>
  );
};

export default App;
