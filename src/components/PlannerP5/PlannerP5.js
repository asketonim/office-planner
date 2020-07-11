import React from 'react';

import P5Wrapper from 'react-p5-wrapper';
import { sketch } from './sketch';

const PlannerP5 = () => {
  return (
    <div style={{display: "flex"}}>
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </div>
  );
}

export default PlannerP5;
