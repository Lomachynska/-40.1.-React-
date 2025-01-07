import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Імпорт компонента App

// Створюємо корінь рендеру
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеримо компонент App всередину елемента з id='root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
