import React from 'react';

import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const Chair = ({ dir }) => {
  const chairDir = {
    down: 0,
    left: 90,
    up: 180,
    right: 270
  };

  return (
    <div style={{transform: `rotate(${chairDir.dir}deg)`}}>
      <ArrowDropDownCircleOutlinedIcon fontSize='small' />
    </div>
  );
};

export default Chair;
