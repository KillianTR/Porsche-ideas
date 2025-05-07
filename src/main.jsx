import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // si no lo estás importando en App.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
