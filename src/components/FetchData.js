import React, { useEffect, useState } from 'react';

// Компонент для завантаження та відображення даних поста
function FetchData() {
  // Стан для збереження даних, статусу завантаження та помилки
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Використовуємо useEffect для виконання запиту після завантаження компонента
  useEffect(() => {
    // Виконання fetch-запиту до API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json()) // Перетворюємо відповідь в JSON
      .then((data) => {
        setData(data); // Оновлюємо стан з отриманими даними
        setLoading(false); // Оновлюємо стан, що завантаження завершено
      })
      .catch((error) => {
        setError(error); // Якщо сталася помилка, зберігаємо її в стані
        setLoading(false); // Завершуємо завантаження
      });
  }, []); // Порожній масив залежностей означає, що ефект виконується лише один раз

  // Якщо завантаження триває, відображаємо повідомлення
  if (loading) {
    return <div>Завантаження...</div>;
  }

  // Якщо сталася помилка, відображаємо повідомлення про помилку
  if (error) {
    return <div>Помилка: {error.message}</div>;
  }

  // Якщо дані завантажено, відображаємо їх
  return (
    <div>
      <h2>Дані з сервера</h2>
      {/* Виводимо заголовок та текст поста */}
      <div><strong>Title:</strong> {data.title}</div>
      <div><strong>Body:</strong> {data.body}</div>
    </div>
  );
}

export default FetchData; // Експортуємо компонент для використання в інших частинах додатку
