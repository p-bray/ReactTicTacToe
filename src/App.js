import { useState } from 'react';


function Square() {
  const [value, setValue] = useState(null); 
  const [chungus, setChungus] = useState(null);
  
  function handleClick(){
    // console.log("clicked on button with value of  "+ value);
    setValue("X");
    setChungus("chung");
  }

  return (
    <button 
      class="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Row({rowId}) {
  var id = "rowId"+rowId;

  return <div id={id} class="board-row"></div>;
}

export default function Board() {
  return (
    <>
      <div class='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div class='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div class='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
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