// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';  // (Якщо є глобальні стилі, якщо ні — можна видалити цей рядок)
import App from './App.js';  // Імпортуємо основний компонент App

// Рендеримо компонент App в елемент з id='root' в index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // цей елемент має бути в public/index.html
);
