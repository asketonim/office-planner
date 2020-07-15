import React, { useState } from 'react';

import Chair from '../../catalog/Chair/Chair';
import Wall from '../../catalog/Wall/Wall';
import { 
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import './PlannerControls.css';

const PlannerControls = ({ tool, setTool }) => {

  const [chairDir, setChairDir] = useState(0);

  const chairClickHandler = () => {
    if (tool.name === 'chair') setChairDir((chairDir + 90) % 360);
    setTool({ name: 'chair', dir: tool.name === 'chair' ? (chairDir + 90) % 360  : chairDir });
  };

  const wallClickHandler = () => {
    setTool({ name: 'wall', dir: 0 });
  };

  return (
    <div className='PlannerControls'>
      <h2>Controls</h2>
      <List style={{width: '100%'}}>
        <ListItem button onClick={chairClickHandler} selected={tool.name === 'chair'} >
          <ListItemIcon>
            <Chair dir={chairDir} />
          </ListItemIcon>
          <ListItemText primary="Place (click to rotate)" />
        </ListItem>
        <ListItem button onClick={wallClickHandler} selected={tool.name === 'wall'}>
          <ListItemIcon>
            <Wall />
          </ListItemIcon>
          <ListItemText primary="Wall" />
        </ListItem>
      </List>
    </div>

  );
};

export default PlannerControls;
