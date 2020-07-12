import React, { useState, useEffect } from 'react';

import Cell from './Cell/Cell';

import './Planner.css';

const Planner = ({ height, width }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let matrix = [];
    for (let i = 0; i < height; i++) {
        const row = []
        for (let j = 0; j < width; j++) {
          row.push({backgroundColor: '#fff'});
        }
        matrix.push(row);
    }
    setItems(matrix)
  }, [height, width]);

  const table = Array(height);

  for (let i = 0; i < height; i++) {
    const tableRow = [];
    for (let j = 0; j < width; j++) {
      tableRow.push((
        <Cell
          index={{i, j}}
          items={items}
          setItems={setItems}
          key={Math.random()}
        />
      ));
    }
    table.push((
      <tr key={Math.random()}>
        {tableRow}
      </tr>
    ));
  }


  return (
    <div>
      <table border='1'>
        <tbody>{ table }</tbody>
      </table>
    </div>
  );
};

export default Planner;
