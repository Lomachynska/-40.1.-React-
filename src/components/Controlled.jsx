import React, { useState } from 'react';

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Форма надіслана з значенням: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Текстове поле:
        <input
          type="text"
          value={inputValue} // Контролюємо значення через state
          onChange={handleChange}
        />
      </label>
      <button type="submit">Надіслати</button>
    </form>
  );
};

export default ControlledForm;
