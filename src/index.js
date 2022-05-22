import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UseData } from './context/DataContext';
import App from './App';
import Day1 from './routes/Day1';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <Routes>
    <Route path='/weather-app' element={<App />} />
    <Route path='/weather-app/routes/Day1' element={<Day1/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
