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

  const [currentCell, setCurrentCell] = useState({
    i: 0,
    j: 0,
    empty: true,
    backgroundImg: null
  });

  const [tool, setTool] = useState({
    name: '',
    dir: ''
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
      <PlannerControls
        tool={tool}
        setTool={setTool}
      />
    </div>
  );
};

export default App;
