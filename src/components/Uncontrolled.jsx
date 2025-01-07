import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Форма надіслана з значенням: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Текстове поле:
        <input type="text" ref={inputRef} /> {/* Використовуємо ref замість state */}
      </label>
      <button type="submit">Надіслати</button>
    </form>
  );
};

export default UncontrolledForm;
