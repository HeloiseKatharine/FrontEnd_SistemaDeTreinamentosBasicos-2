// import logo from './logo.svg';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login';
import Header from './components/Header';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

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
