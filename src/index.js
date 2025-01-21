import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the app with BrowserRouter and set the basename
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Educate">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);