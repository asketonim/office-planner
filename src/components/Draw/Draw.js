import React from 'react';

import Chair from '../../catalog/Chair/Chair';
import Wall from '../../catalog/Wall/Wall';

const Draw = ({ tool }) => {
  const draw = (tool) => {
    switch (tool.name) {
      case 'chair': return ( <Chair dir={tool.dir} /> )
      case 'wall': return ( <Wall /> )
      default: return null;
    }
  }

  return (
    <div style={{width: '16px', height: '16px'}}>
      { draw(tool) }
    </div>
  );
};

export default Draw;
