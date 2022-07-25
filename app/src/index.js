import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login/index';
import Header from './components/Header/index';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="header" element={<App />} />
      </Routes>
     </BrowserRouter> 
 
);