import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create the root element where React will mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);