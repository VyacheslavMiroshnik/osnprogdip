let players = ['x', 'o'];
let activePlayer = 0;
  let sizeBoard = 3;
let board = [];
function startGame() {
  board=[];
 for (let i = 0 ; i < sizeBoard  ; i++){
   board.push([]);
   for (let k = 0; k < sizeBoard ; k++){
     board[i].push('');
   };
 };
  
    
 
  renderBoard(board);
  activePlayer=0;
};

function click(row, column) {

  board[row][column] = players[activePlayer];
  renderBoard(board);
  //steps++;
  checkWinner(board, column, row);
}

function checkWinner(board, column, row) {

  let winner = false;
  let xVertical = 0;
  let oVertical = 0;
  let xDiagonalFirst = 0;
  let oDiagonalFirst = 0;
  let xDiagonalSecond = 0;
  let oDiagonalSecond = 0;

  switch (board[row].join('')) {
    case 'x'.repeat(board.length):
      winner = true;
      showWinner(activePlayer);
      break;
    case 'o'.repeat(board.length):
      winner = true;
      showWinner(activePlayer);
      break;
    default:
      break;
  };
  for (let i = 0; i < board.length; i++) {
    switch (board[i][column]) {
      case 'x':
        xVertical++;
        break;
      case 'o':
        oVertical++;
        break;
      default:
        break;
    }
  }
  if (xVertical == board.length || oVertical == board.length) {
    winner = true;
  };
  for (let i = 0; i < board.length; i++) {
    switch (board[i][i]) {
      case 'x':
        xDiagonalFirst++;
        break;
      case 'o':
        oDiagonalFirst++;
        break;
      default:
        break;
    };

    switch (board[board.length - 1 - i][i]) {
      case 'x':
        xDiagonalSecond++;
        break;
      case 'o':
        oDiagonalSecond++;
        break;
      default:
        break;
    }
  };
  if (xDiagonalFirst == board.length || oDiagonalFirst == board.length || xDiagonalSecond == board.length || oDiagonalSecond == board.length) {
    winner = true;
  };
  if (winner) {
    showWinner(activePlayer);
  } else {
    changePlayer();
  }



};



function changePlayer() {
  switch (activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    case 1:
      activePlayer = 0;
      break;
    default:
      break;
  };
};