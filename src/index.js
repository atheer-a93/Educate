import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// Create the root element where React will mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app into the root element
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);