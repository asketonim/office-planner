import React from 'react';

import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const Chair = ({ dir }) => (
  <ArrowDropDownCircleOutlinedIcon style={{transform: `rotate(${dir}deg)`, width: '16px', height: '16px'}} fontSize='small' />
)

export default Chair;
