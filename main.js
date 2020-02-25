//create a variable for the grid-container id
// const gridContainer = document.getElementById("grid-container")
// //grab the color background within grid-item
// const gridItemColorList = gridContainer.querySelectorAll(".background-color")
// const setH3 = document.querySelector("h3")
// const resetButton = document.getElementById("resetButton")
// const gameBoardArray = Array.from(gridItemColorList)
// let playerTurn = 1;

// function playGame() {
// gridItemColorList.forEach((gridItem => {
//     gridItem.style.backgroundColor = '';
//     //console.log(gridItemColorList)
//         gridItem.addEventListener("click", evt => {
//             evt.preventDefault();
//             console.log(playerTurn)
//             if (playerTurn % 2 == 1) {
//                 gridItem.style.backgroundColor = "lightblue", playerTurn++,
//                 gridItem.style.color = "black";
//                 gridItem.style.pointerEvents = "none";
//                 setH3.innerHTML = "Player 1: Blue";
//                 gridItem.innerHTML = "X"
//                 checkWinner();
//             }
//             else if (playerTurn % 2 !== 1) {
//                 gridItem.style.backgroundColor = "red", playerTurn++,
//                 gridItem.style.pointerEvents = "none";
//                 setH3.innerHTML = "Player 2: Red";
//                 gridItem.style.color = "black";
//                 gridItem.innerHTML = "O"
//                 checkWinner();
//             }
//         })
//     }));
//     //checkWinner();
// }
// playGame();

// resetButton.addEventListener("click",evt => {
//     evt.preventDefault()
//     gridItemColorList.forEach((gridItem => {
//         gridItem.style.backgroundColor = '';
//         gridItem.style.color = "transparent",
//         playerTurn == 1;
//         setH3.innerHTML = ''
//     }))

// })

// function checkWinner() {
//     if ((gameBoardArray[0].innerHTML === gameBoardArray[1].innerHTML && gameBoardArray[1].innerHTML === gameBoardArray[2].innerHTML) || (gameBoardArray[3].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[5].innerHTML) || (gameBoardArray[6].innerHTML === gameBoardArray[7].innerHTML && gameBoardArray[7].innerHTML === gameBoardArray[8].innerHTML) || (gameBoardArray[0].innerHTML === gameBoardArray[3].innerHTML && gameBoardArray[3].innerHTML === gameBoardArray[6].innerHTML) || (gameBoardArray[1].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[7].innerHTML) || (gameBoardArray[2].innerHTML === gameBoardArray[5].innerHTML && gameBoardArray[5].innerHTML === gameBoardArray[8].innerHTML) ||
//     (gameBoardArray[0].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[8].innerHTML) ||
//     (gameBoardArray[2].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[6].innerHTML)) {
//         alert(setH3.innerHTML + " win's")
//         //setH3.innerHTML = "Blue Wins"
//     } else {
//         console.log("Tie. Keep Playing");
//     }
// }

/*----- variables -----*/

let board;

let turn = "X";

let win;

const squares = Array.from(document.querySelectorAll("#board div"));

const elementBoard = document.querySelector("#board");

const resetButton = document.getElementById("resetButton");

const h3Text = document.querySelector("h3");

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*----- functions -----*/

function game() {
  board = ["", "", "", "", "", "", "", "", ""];

  render();
}

game();

function render() {
  board.forEach((mark, i) => {
    squares[i].textContent = mark;
  });

  h3Text.innerHTML =
    win === "T"
      ? `Dang that's a tie.`
      : win
      ? `${win} wins the game!`
      : `It's ${turn}'s turn.`;
}

elementBoard.addEventListener("click", evt => {
  //console.log("square clicked")
  let squareID = squares.findIndex(square => {
    return square === evt.target;
  });

  board[squareID] = turn;

  win = getWinner();

  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }

  render();
});

function getWinner() {
  let winner = null;

  winningCombos.forEach((combo, i) => {
    if (
      board[combo[0]] &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      winner = board[combo[0]];
    }
    console.log(winner);
  });

  return winner ? winner : board.includes("") ? null : "T";
}

resetButton.addEventListener("click", evt => {
  game();
});
