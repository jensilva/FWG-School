import React from 'react';
import Square from '../square'
import style from './style.css'

export const renderSquare = ({
  i,
  squares,
  onClick
}) => (
     <Square squareIndex= {squares[i]}
     onClick= {() =>  onClick(i)}
     />
  );

export const Board = ({squares, onClick}) => {
  return (
    <div>
      <div className='board-row'>
          {renderSquare({i:0,squares, onClick})}
          {renderSquare({i:1,squares, onClick})}
          {renderSquare({i:2,squares, onClick})}
      </div>
      <div className='board-row'>
          {renderSquare({i:3,squares, onClick})}
          {renderSquare({i:4,squares, onClick})}
          {renderSquare({i:5,squares, onClick})}
      </div>
      <div className='board-row'>
          {renderSquare({i:6,squares, onClick})}
          {renderSquare({i:7,squares, onClick})}
          {renderSquare({i:8,squares, onClick})}
      </div>

    </div>
  )
};




export default Board;