import React, { useState } from 'react';

// Компонент для контрольованої форми
function ControlledForm() {
  // Створення стану для збереження введеного значення
  const [inputValue, setInputValue] = useState('');

  // Обробник зміни значення поля вводу
  const handleChange = (e) => {
    // Оновлюємо стан зі значенням, яке ввів користувач
    setInputValue(e.target.value);
  };

  // Обробник відправки форми
  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки при відправці
    alert(`Ви ввели: ${inputValue}`); // Показуємо значення, яке введено в поле
  };

  return (
    <div>
      <h2>Контрольована форма</h2>
      <form onSubmit={handleSubmit}>
        {/* Поле вводу, яке підключене до стану через value */}
        <input
          type="text"
          value={inputValue} // Показує поточне значення з inputValue
          onChange={handleChange} // Оновлює стан при кожній зміні значення
        />
        <button type="submit">Відправити</button> {/* Кнопка для відправки форми */}
      </form>
    </div>
  );
}

export default ControlledForm; // Експортуємо компонент
