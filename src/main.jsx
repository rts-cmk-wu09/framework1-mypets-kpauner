import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Onboarding from './pages/Onboarding';
import Details from './pages/Details';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
