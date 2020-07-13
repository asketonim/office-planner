import React from 'react';

import './PlannerForm.css';

const PlannerForm = ({ size, setSize }) => {
  const formChangeHandler = (event) => {
    setSize({ ...size, [event.target.name]: event.target.value > 0 ? event.target.value : 1 });
  }

  return (
    <div className='FormHolder'>
      <div>
        <label>
          Height:
          <br />
          <input
            className='Form'
            placeholder="10"
            id="height"
            type="text"
            name="height"
            onChange={formChangeHandler}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Width:
          <br />
          <input
            className='Form'
            placeholder="10"
            id="width"
            type="number"
            name="width"
            onChange={formChangeHandler}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default PlannerForm;
