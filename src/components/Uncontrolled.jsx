import React, { useRef } from 'react';

// Компонент неконтрольованої форми
function UncontrolledForm({NAME}) {
  // Створення рефу для поля вводу
  const inputRef = useRef();

  // Обробка відправки форми
  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки при відправці форми
    alert(`Ви ввели: ${inputRef.current.value}`); // Показуємо значення, яке введено в поле
  };

  return (
    <div>
      <h2>Неконтрольована форма</h2>
      <form onSubmit={handleSubmit}>
        {/* Відображаємо поле вводу і зв'язуємо його з рефом */}
        <input ref={inputRef} type="text" />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
