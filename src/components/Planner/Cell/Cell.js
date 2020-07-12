import React from 'react';

import './Cell.css';

const Cell = ({ index, items, setItems }) => {
  const cellClickHandler = (index) => {
    setItems(items.map((row, i) => {
      return row.map((cell, j) => {
        if ((i === index.i && j === index.j) || cell.backgroundColor === 'red') return {backgroundColor: 'red'}
        return {backgroundColor: 'white'}
      })
    }))
  }

  return (
    <td style={items[index.i] ? items[index.i][index.j] : {backgroundColor: 'white'}} onClick={() => cellClickHandler(index)} className='Cell'>

    </td>
  );
};

export default Cell;
