import React from 'react';

import Chair from './Chair/Chair';
import AppsIcon from '@material-ui/icons/Apps';

const Draw = ({ tool }) => {
  const draw = () => {
    switch (tool.name) {
      case 'chair': return (<Chair dir={tool.dir} />)
      case 'wall': return (<AppsIcon style={{width: '16px', height: '16px'}} />)
      default: return null;
    }
  }

  return (
    <div style={{width: '16px', height: '16px'}}>
      { draw() }
    </div>
  );
};

export default Draw;
