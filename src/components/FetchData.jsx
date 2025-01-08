import React, { useState, useEffect } from 'react';

// Компонент для завантаження та відображення постів
function FetchData() {
  // Стан для збереження отриманих даних
  const [data, setData] = useState(null);

  // Стан для визначення, чи триває завантаження
  const [loading, setLoading] = useState(true);

  // Стан для збереження помилок
  const [error, setError] = useState(null);

  // Використовуємо useEffect для виконання запиту при монтуванні компонента
  useEffect(() => {
    // Виконуємо запит до API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())  // Перетворюємо відповідь в JSON
      .then((data) => {
        setData(data);    // Оновлюємо стан з даними
        setLoading(false); // Оновлюємо стан завантаження
      })
      .catch((error) => {
        setError(error);    // Встановлюємо помилку, якщо сталася
        setLoading(false);  // Завершуємо процес завантаження
      });
  }, []); // Порожній масив залежностей, тому запит виконується лише один раз при завантаженні компонента

  // Якщо ще триває завантаження, показуємо повідомлення
  if (loading) return <div>Loading...</div>;

  // Якщо сталася помилка, відображаємо її повідомлення
  if (error) return <div>Error: {error.message}</div>;

  // Якщо дані успішно завантажені, відображаємо список постів
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li> // Виводимо заголовок кожного посту
        ))}
      </ul>
    </div>
  );
}

export default FetchData; // Експортуємо компонент для використання в іншому місці
