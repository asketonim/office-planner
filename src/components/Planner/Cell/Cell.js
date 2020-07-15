import React from 'react';

import Draw from '../../Draw/Draw';

import './Cell.css';

const Cell = ({ index, items, setItems, tool }) => {
  const cellClickHandler = (index) => {
    setItems(items.map((row, i) => {
      return row.map((cell, j) => {
        if (i === index.i && j === index.j) return {...tool, empty: false}
        return cell;
      })
    }))
    console.log(items);
  }



  return (
    <td style={{backgroundColor: 'white'}} onClick={() => cellClickHandler(index)} className='Cell'>
      {items[index.i] ? (
        <Draw tool={{...items[index.i][index.j]}} />
      ) : null}
    </td>
  );
};

export default Cell;
