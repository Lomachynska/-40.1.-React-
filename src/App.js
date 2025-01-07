import React from 'react';
import ControlledForm from './components/Controlled.jsx';  // змінили на .jsx
import UncontrolledForm from './components/Uncontrolled.jsx';  // змінили на .jsx
import FetchData from './components/FetchData.js';  // не змінили, бо це вже .js

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React: Контрольовані та Неконтрольовані компоненти</h1>
      
      <ControlledForm />
      <hr />
      <UncontrolledForm NAME={'AWD'} />
      <hr />
      <FetchData />
    </div>
  );
}

export default App;
