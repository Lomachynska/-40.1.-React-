import React from 'react';
import ControlledForm from './components/Controlled.jsx';  //  .jsx
import UncontrolledForm from './components/Uncontrolled.jsx';  //  .jsx
import FetchData from './components/FetchData.js';  // .js
import useEffect from './components/useEffect.jsx'; // .jsx

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
