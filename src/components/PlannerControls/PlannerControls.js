import React from 'react';

import Chair from './Chair/Chair';

import './PlannerControls.css';

const PlannerControls = ({ tool, setTool }) => {
  return (
    <div className='Controls'>
      <h2>Controls</h2>
      <Chair dir='left' />
    </div>
  );
};

export default PlannerControls;
