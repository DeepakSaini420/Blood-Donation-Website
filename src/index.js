import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { BloodStateContext } from './context/bloodDonaters.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BloodStateContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BloodStateContext>
  </React.StrictMode>
);
