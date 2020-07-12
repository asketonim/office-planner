import React, { useState } from 'react';

import Planner from './components/Planner/Planner';
import PlannerP5 from './components/PlannerP5/PlannerP5';

import './App.css';

const App = () => {
  const [size, setSize] = useState({
    height: 10,
    width: 10
  });

  const formChangeHandler = (event) => {
    setSize({ ...size, [event.target.name]: event.target.value || 1 });
  }

  return (
    <div>
      <div className='FormHolder'>
        <div>
          <label>
            Height:
            <br />
            <input
              className='Form'
              placeholder="Enter height"
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
              placeholder="Enter width"
              id="width"
              type="text"
              name="width"
              onChange={formChangeHandler}
              required
            />
          </label>
        </div>

        {/* <button
          className='btn'
          type="button"
          onClick={submitSizeHandler}
        >
          Sign in
        </button> */}

      </div>

      <div className="App">
        <Planner
          height={size.height}
          width={size.width}
        />
        <PlannerP5 />
      </div>
    </div>
  );
};

export default App;
