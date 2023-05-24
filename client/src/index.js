import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/auth.context';
import { BrowserRouter } from 'react-router-dom';
import { CalculationProvider } from './contexts/calculation.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CalculationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CalculationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
