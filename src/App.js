import { useState } from 'react';

function Square({value, onSquareClick}) {
  // const [value, setValue] = useState(null); 
  // //test of the 'set' functionality to see if I could set whatever I want. 
  // const [chungus, setChungus] = useState(null);
  
  // function handleClick(){
  //   // console.log("clicked on button with value of  "+ value);
  //   setValue("X");
  //   setChungus("chung");
  // }

  // return (
  //   <button 
  //     class="square"
  //     onClick={handleClick}
  //   >
  //     {value}
  //   </button>
  // );
  return <button className="square" onClick={onSquareClick}>{value}</button>
}  

function Row({rowId}) {
  var id = "rowId"+rowId;

  return <div id={id} class="board-row"></div>;
}

export default function Board() {
  /*Array(9).fill(null) creates an array with nine elements and sets each of them to null. 
  The useState() call around it declares a squares state variable that’s initially set to that array. 
  Each entry in the array corresponds to the value of a square*/
  const [squares, setSquares] = useState(Array(9).fill(null));

  //this makes it so that the X player always plays first on the start of the game. 
  const [xIsNext, setXIsNext] = useState(true); 

  const [status, setStatus] = useState("");

  //handle what happens when a square is clicked. 
  function handleClick(i){
    //establish nextSquares as just the squares array. Slice with no params just returns the array.
    //we do this to reinforce immutability standards
    if(squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
      setXIsNext(false);
    }else{
      nextSquares[i] = "O";
      setXIsNext(true);
    }
    setSquares(nextSquares);
    if(calculateWinner(squares)){
      setStatus(calculateWinner(squares) + " is the winner");
      return;
    }
  }  

  //for handle click, we use the () => handleClick(0) syntax
  //basically, () is just a new function that we want the square to run when clicked. 
  //this gets around the infinite looping error by establishing a function to call, 
  //not calling a function. 
  return (
    <>
      <div class='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div class='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div class='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
  
      <div><p>{status}</p></div>
    </>

  );
  // return <BuildBoard dimensions={3}/>;
}




//builds the squares of the board
function BuildBoard(dimensions) {
  // //3 columns of  3 rows of buttons. 
  // var board = null;


  // //iterate through rows
  // for (let index = 0; index < dimensions+1; index++) {
  //   var rowId = "row"+index;
  //   board += <Row id={index}/>
    
  //   //iterate through columns
  //   for (let index = 0; index < dimensions+1; index++){
  //     var row = document.getElementById("rowId"+index);
  //     row += <Square id='1'/>
  //   }
    
  // }

  // return board;
}



function calculateWinner(squares) {
  //same value on any of these lines would be a winning line. 
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    //checks to make sure that all values on the line are equivalent.
    if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
      return squares[a];
    }
  }
  return null;
}