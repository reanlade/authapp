import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Signup from './signup.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
