import React from 'react';
import Login from './Pages/Login';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes path='/'>
        <Route index element={<Header />} />
				<Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
