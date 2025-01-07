import React, { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Помилка: {error.message}</div>;
  }

  return (
    <div>
      <h2>Дані з сервера</h2>
      <div><strong>Title:</strong> {data.title}</div>
      <div><strong>Body:</strong> {data.body}</div>
    </div>
  );
}

export default FetchData;
