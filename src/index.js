import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { BloodStateContext } from './context/bloodDonaters.context';
import { UserProvider } from './context/user.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BloodStateContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BloodStateContext>
    </UserProvider>
  </React.StrictMode>
);
