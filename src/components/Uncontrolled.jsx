import React, { useRef } from 'react';

function UncontrolledForm({NAME}) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ви ввели: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Неконтрольована форма</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
