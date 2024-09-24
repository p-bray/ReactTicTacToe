// import { useState } from 'react';

// function Square({value, onSquareClick}) {
//   // const [value, setValue] = useState(null); 
//   // //test of the 'set' functionality to see if I could set whatever I want. 
//   // const [chungus, setChungus] = useState(null);
  
//   // function handleClick(){
//   //   // console.log("clicked on button with value of  "+ value);
//   //   setValue("X");
//   //   setChungus("chung");
//   // }

//   // return (
//   //   <button 
//   //     class="square"
//   //     onClick={handleClick}
//   //   >
//   //     {value}
//   //   </button>
//   // );
//   return <button className="square" onClick={onSquareClick}>{value}</button>
// }  

// function Row({rowId}) {
//   var id = "rowId"+rowId;

//   return <div id={id} class="board-row"></div>;
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = 'X';
//     } else {
//       nextSquares[i] = 'O';
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// };

  
  
  
  
  


// //   // //handle what happens when a square is clicked. 
// //   // function handleClick(i){
// //   //   //establish nextSquares as just the squares array. Slice with no params just returns the array.
// //   //   //we do this to reinforce immutability standards
// //   //   if(squares[i] || calculateWinner(squares)){
// //   //     return;
// //   //   }
// //   //   const nextSquares = squares.slice();
// //   //   if(xIsNext){
// //   //     nextSquares[i] = "X";
// //   //     setXIsNext(false);
// //   //   }else{
// //   //     nextSquares[i] = "O";
// //   //     setXIsNext(true);
// //   //   }
// //   //   setSquares(nextSquares);
// //   //   if(calculateWinner(squares)){
// //   //     setStatus(calculateWinner(squares) + " is the winner");
// //   //     return;
// //   //   }
// //   // }  

// //   //for handle click, we use the () => handleClick(0) syntax
// //   //basically, () is just a new function that we want the square to run when clicked. 
// //   //this gets around the infinite looping error by establishing a function to call, 
// //   //not calling a function. 
// //   return (
// //     <>
// //       <div class='board-row'>
// //         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
// //         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
// //         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
// //       </div>
// //       <div class='board-row'>
// //         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
// //         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
// //         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
// //       </div>
// //       <div class='board-row'>
// //         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
// //         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
// //         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
// //       </div>
  
// //       <div className="status"><p>{status}</p></div>
// //     </>

// //   );
// //   // return <BuildBoard dimensions={3}/>;
// // }





// //only returns a value if there is a winner. otherwise, its null
// function calculateWinner(squares) {
//   //same value on any of these lines would be a winning line. 
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];

//   for(let i = 0; i < lines.length; i++){
//     const [a,b,c] = lines[i];
//     //checks to make sure that all values on the line are equivalent.
//     if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
//       return squares[a];
//     }
//   }
//   return null;
// }

// export default function Game(){
//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const currentSquares = history[history.length-1];

//   function handlePlay(nextSquares) {
//     setHistory([...history, nextSquares]);
//     setXIsNext(!xIsNext);
//   }

//   function jumpTo(nextMove){
//     //todo
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if(move>0){
//       description = 'go to move  3' + move;
//     }else{
//       description = 'go to game start';
//     }
//     return (
//       <li>
//         <button onClick={() => jumpTo(move)}>{description}</button>>
//       </li>
//     );
//   });

//   return (
//     <>
//       <div className='game'>
//         <div className='game-board'>
//           <Board xIsNext={xIsNext} currentSquares={currentSquares} onPlay={handlePlay}/>
//         </div>
//       </div>
//       <div className='game-info'>
//         <ol></ol>
//       </div>
//     </>
//   )
// }





// //builds the squares of the board
// function BuildBoard(dimensions) {
//   // //3 columns of  3 rows of buttons. 
//   // var board = null;


//   // //iterate through rows
//   // for (let index = 0; index < dimensions+1; index++) {
//   //   var rowId = "row"+index;
//   //   board += <Row id={index}/>
    
//   //   //iterate through columns
//   //   for (let index = 0; index < dimensions+1; index++){
//   //     var row = document.getElementById("rowId"+index);
//   //     row += <Square id='1'/>
//   //   }
    
//   // }

//   // return board;
// }

import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
}
