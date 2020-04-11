import React from 'react';
import style from './style.css';

export const Square = (props) =>  {
  return (
    <button
    className='square'
    onClick= {
    props.onClick}
    >

    {props.squareIndex}

  </button>)

}

export default Square;