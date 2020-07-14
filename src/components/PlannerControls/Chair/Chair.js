import React from 'react';

import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const Chair = ({ dir }) => (
  <ArrowDropDownCircleOutlinedIcon style={{transform: `rotate(${dir}deg)`}} fontSize='small' />
)

export default Chair;
