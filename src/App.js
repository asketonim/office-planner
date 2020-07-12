import React, { useState } from 'react';

import Planner from './components/Planner/Planner';

import './App.css';

const App = () => {
  const [size, setSize] = useState({
    height: 10,
    width: 10
  });

  const formChangeHandler = (event) => {
    setSize({ ...size, [event.target.name]: event.target.value > 0 ? event.target.value : 1 });
  }

  return (
    <div>

      <div className="App">
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
        <Planner
          height={size.height}
          width={size.width}
        />
      </div>
    </div>
  );
};

export default App;
