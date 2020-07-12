import React, {useState} from 'react';

import Cell from './Cell/Cell';

import './Planner.css';

const Planner = ({ height, width }) => {
  const [items, setItems] = useState([]);

  const table = Array(height);

  for (let i = 0; i < height; i++) {
    const tableRow = [];
    for (let j = 0; j < width; j++) {
      tableRow.push((
        <Cell />
      ));
    }
    table.push((
      <tr>
        {tableRow}
      </tr>
    ));
  }


  return (
    <div>
      <table
        border='1'
        // height={height * 10}
        // width={width * 10}
      >
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
};

export default Planner;
