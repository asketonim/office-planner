import React, { useState } from 'react';

import PlannerForm from './components/PlannerForm/PlannerForm';
import Planner from './components/Planner/Planner';
import PlannerControls from './components/PlannerControls/PlannerControls';

import './App.css';

const App = () => {
  const [size, setSize] = useState({
    height: 10,
    width: 10
  });

  const [tool, setTool] = useState({
    name: '',
    dir: ''
  });

  return (
    <div className="App">
      <div className="Controls">  
        <PlannerForm
          size={size}
          setSize={setSize}
        />
        <PlannerControls
          tool={tool}
          setTool={setTool}
        />
      </div>
      <Planner
        height={size.height}
        width={size.width}
        tool={tool}
      />
    </div>
  );
};

export default App;
