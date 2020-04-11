import React, { useState } from 'react';
import Board from '../board';


export const handleOnClick = ({
  i,
  history,
  setHistory,
  XIsNext,
  setXIsNext,
  step,
  setStep
}) => {
  const currentHistoryStep = history.slice(0, step +1)
  const current = currentHistoryStep[currentHistoryStep.length-1];
  const squares = current.squares.slice();
  if(calculateWinner(squares) || squares[i]){
    return
  }
  const newSquares = squares.slice();
  newSquares[i]= XIsNext ? 'X' : 'O';
  const newHistory =
     currentHistoryStep.concat([
      {
        squares : newSquares
      }
    ])

  setHistory(newHistory);
  setXIsNext(!XIsNext);
  setStep(currentHistoryStep.length)
};

  export const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export const jumpTo = ({step, setStep, setXIsNext}) => {
  setStep(step);
  setXIsNext((step % 2 === 0));
}

export const Game = () => {
  const [history, setHistory] = useState([{squares: new Array(9)}]);
  const [XIsNext, setXIsNext] = useState(true);
  const [step, setStep] = useState(0);
  const current = history[step];
  const winner = calculateWinner(current.squares);
  let status;

  const moves = history.map((step, move) => {
  const desc = move ? `Go to move #${move}` :
                      `Go to game start`;

    return (
      <li>
        <button onClick={() => jumpTo({
          step: move,
          setStep,
          setXIsNext,
        })}>
            {desc}
        </button>
      </li>
    )
});

  if(winner){
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${XIsNext? 'X' : 'O'}`
  }


  return(
  <div className='game'>
    <div className='game-board'>
        <Board squares={current.squares}
        onClick={(i) => handleOnClick({i, history, setHistory, XIsNext, setXIsNext, step, setStep})}/>
    </div>
    <div className='game-info'>
      <div>
        {status}
      </div>
      <ol>
        { moves}
      </ol>
    </div>
  </div>)
}

export default Game;
