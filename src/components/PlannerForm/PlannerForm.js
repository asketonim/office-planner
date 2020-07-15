import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import './PlannerForm.css';

const PlannerForm = ({ size, setSize }) => {
  const [error, setError] = useState({width: '', height: ''});

  const formChangeHandler = (event) => {
    const value = parseInt(event.target.value, 10);
    if (typeof value === 'number' && value > 0 && value <= 30) {
      setError({...error, [event.target.name]: ''});
      setSize({ ...size, [event.target.name]: event.target.value > 0 ? event.target.value : 1 });
    } else {
      setError({...error, [event.target.name]: `${event.target.name} should be in 1-30 range`});
    }
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
          error={!!error.height}
          helperText={error.height}
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
          error={!!error.width}
          helperText={error.width}

        />
      </form>
    </div>
  );
};

export default PlannerForm;
