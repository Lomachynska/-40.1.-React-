import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ви ввели: ${inputValue}`);
  };

  return (
    <div>
      <h2>Контрольована форма</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default ControlledForm;
