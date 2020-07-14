import React, { useState } from 'react';

import Chair from './Chair/Chair';
import AppsIcon from '@material-ui/icons/Apps';
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
    setTool({ name: 'chair', dir: chairDir });
  };

  const wallClickHandler = () => {
    setTool({ name: 'wall', dir: 0 });
  };

  return (
    <div className='Controls'>
      <h2>Controls</h2>
      <List component="nav">
        <ListItem button onClick={chairClickHandler} selected={tool.name === 'chair'} >
          <ListItemIcon>
            <Chair dir={chairDir} />
          </ListItemIcon>
          <ListItemText primary="Place (click to rotate)" />
        </ListItem>
        <ListItem button onClick={wallClickHandler} selected={tool.name === 'wall'}>
          <ListItemIcon>
            <AppsIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary="Wall" />
        </ListItem>
      </List>
    </div>

  );
};

export default PlannerControls;
