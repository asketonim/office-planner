import React from 'react';

import TextField from '@material-ui/core/TextField';

import './PlannerForm.css';

const PlannerForm = ({ size, setSize }) => {
  const formChangeHandler = (event) => {
    setSize({ ...size, [event.target.name]: event.target.value > 0 ? event.target.value : 1 });
  }

  return (
    <div className='FormHolder'>
      <h2>Size</h2>
      <form className='Form' noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Height"
          variant="standard"
          name='height'
          onChange={formChangeHandler}
          style={{
            margin: '8px 0'
          }}
        />
        <TextField
          id="outlined-basic"
          label="Width"
          variant="standard"
          name='width'
          onChange={formChangeHandler}
          style={{
            margin: '8px 0'
          }}
        />
      </form>
    </div>
  );
};

export default PlannerForm;
