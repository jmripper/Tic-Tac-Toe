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
const player = "O";
const computer = "X";

let board;
let gameActive = true;
let turn = "X";
let win;
let board_full = false;
let play_board = ["", "", "", "", "", "", "", "", ""];

const squares = Array.from(document.querySelectorAll("#board div"));
const gameBoard = document.querySelector("#board");
const resetButton = document.getElementById("resetButton");
const statusDisplay = document.querySelector(".game-status");
const cell = document.querySelectorAll(".square");
const winner_statement = document.querySelector(".game-status");
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

document.querySelector("#board").addEventListener("click", handleTurn);
document.querySelector(".reset-btn").addEventListener("click", game);

/*----- functions -----*/

function getWinner() {
  let winner = null;

  winningConditions.forEach((combo, i) => {
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

function handleTurn() {
    let idx = squares.findIndex(square => {
        return square === event.target;
    })
    board[idx] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    render();
};

function game () {
  board = ["", "", "", "", "", "", "", "", ""];
  render();
};

function render() {
  board.forEach((mark, i) => {
    squares[i].textContent = mark;
  });

  statusDisplay.textContent =
    win === "T"
      ? `That's a tie, play again?`
      : win
      ? `${win} wins the game!`
      : `It's ${turn}'s turn!`;
}

game();

// const render_board = () => {
//   gameBoard.innerHTML = "";
//   play_board.forEach((e, i) => {
//     gameBoard.innerHTML += `<div id="${i}" class="square" onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
//     if (e == player || e == computer) {
//       document.querySelector(`#${i}`).classList.add("occupied");
//     }
//   });
// };

// render_board();

// const addPlayerMove = e => {
//   if (play_board[e] == "") {
//     play_board[e] = player;
//     render_board();
//     addComputerMove();
//   }
// };

// const addPlayerMove = e => {
//   if (!board_full && play_board[e] == "") {
//     play_board[e] = player;
//     game_loop();
//     addComputerMove();
//   }
// };

// const addComputerMove = () => {
//   do {
//     selected = Math.floor(Math.random() * 9);
//   } while (play_board[selected] != "");
//   play_board[selected] = computer;
//   render_board();
// };

// const check_board_complete = () => {
//   let flag = true;
//   play_board.forEach(element => {
//     if (element != player && element != computer) {
//       flag = false;
//     }
//   });
//   board_full = !flag;
// };

// const game_loop = () => {
//   render_board();
//   check_board_complete();
// };

// const check_for_winner = () => {
//   let res = check_match();
//   if (res == player) {
//     winner.innerHTML = "Winner is player!!";
//     winner.classList.add("playerWin");
//     board_full = true;
//   } else if (res == computer) {
//     winner.innerText = "Winner is computer";
//     winner.classList.add("computerWin");
//     board_full = true;
//   } else if (board_full) {
//     winner.innerText = "Draw!";
//     winner.classList.add("draw");
//   }
// };

// const check_line = (a, b, c) => {
//   return (
//     play_board[a] == play_board[b] &&
//     play_board[b] == play_board[c] &&
//     (play_board[a] == player || play_board[a] == computer)
//   );
// };

// const check_match = () => {
//   for (i = 0; i < 9; i += 3) {
//     if (check_line(i, i + 1, i + 2)) {
//       return play_board[i];
//     }
//   }
//   for (i = 0; i < 3; i++) {
//     if (check_line(i, i + 3, i + 6)) {
//       return play_board[i];
//     }
//   }
//   if (check_line(0, 4, 8)) {
//     return play_board[0];
//   }
//   if (check_line(2, 4, 6)) {
//     return play_board[2];
//   }
//   return "";
// };

// const game_loop = () => {
//   render_board();
//   check_board_complete();
//   check_for_winner();
// };

// const reset_board = () => {
//     play_board = ["", "", "", "", "", "", "", "", ""];
//     board_full = false;
//     winner.classList.remove("playerWin");
//     winner.classList.remove("computerWin");
//     winner.classList.remove("draw");
//     winner.innerText = "";
//     render_board();
// }
