import React, { useState } from 'react';

import PlannerForm from './components/PlannerForm/PlannerForm';
import Planner from './components/Planner/Planner';

import './App.css';

const App = () => {
  const [size, setSize] = useState({
    height: 10,
    width: 10
  });

  return (
    <div className="App">
      <PlannerForm
        size={size}
        setSize={setSize}
      />
      <Planner
        height={size.height}
        width={size.width}
      />
    </div>
  );
};

export default App;
