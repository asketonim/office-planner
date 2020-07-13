import React from 'react';

import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

import './Cell.css';

const Cell = ({ index, items, setItems }) => {
  const cellClickHandler = (index) => {
    setItems(items.map((row, i) => {
      return row.map((cell, j) => {
        if ((i === index.i && j === index.j) || cell.backgroundColor === '#5e6f64') return {backgroundColor: '#5e6f64'}
        return {backgroundColor: 'white'}
      })
    }))
  }

  return (
    <td style={items[index.i] ? items[index.i][index.j] : {backgroundColor: 'white'}} onClick={() => cellClickHandler(index)} className='Cell'>
      {/* <ArrowDropDownCircleOutlinedIcon fontSize="small" /> */}
    </td>
  );
};

export default Cell;
