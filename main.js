//create a variable for the grid-container id
const gridContainer = document.getElementById("grid-container")
//grab the color background within grid-item
const gridItemColorList = gridContainer.querySelectorAll(".background-color")
const setH3 = document.querySelector("h3")
const resetButton = document.getElementById("resetButton")
const gameBoardArray = Array.from(gridItemColorList)
let playerTurn = 1;

function playGame() {
gridItemColorList.forEach((gridItem => {
    gridItem.style.backgroundColor = '';
    //console.log(gridItemColorList)
        gridItem.addEventListener("click", evt => {
            evt.preventDefault();
            //console.log(playerTurn)
            if (playerTurn % 2 == 1) {
                gridItem.style.backgroundColor = "lightblue", playerTurn++,
                gridItem.style.pointerEvents = "none";
                setH3.innerHTML = "Player 1: Blue";
                gridItem.innerHTML = "X"
                checkWinner();
            }
            else if (playerTurn % 2 !== 1) {
                gridItem.style.backgroundColor = "red", playerTurn++,
                gridItem.style.pointerEvents = "none";
                setH3.innerHTML = "Player 2: Red";
                gridItem.innerHTML = "O"
                checkWinner();
            }
        })
    }));
    //checkWinner();
}
playGame();


resetButton.addEventListener("click",evt => {
    evt.preventDefault()
    gridItemColorList.forEach((gridItem => { 
        gridItem.style.backgroundColor = ''; 
        playerTurn == 1;
        setH3.innerHTML = '' 
    }))

})



console.log(gameBoardArray)


function checkWinner() {
    if ((gameBoardArray[0].innerHTML === gameBoardArray[1].innerHTML && gameBoardArray[1].innerHTML === gameBoardArray[2].innerHTML) || (gameBoardArray[3].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[5].innerHTML) || (gameBoardArray[6].innerHTML === gameBoardArray[7].innerHTML && gameBoardArray[7].innerHTML === gameBoardArray[8].innerHTML) || (gameBoardArray[0].innerHTML === gameBoardArray[3].innerHTML && gameBoardArray[3].innerHTML === gameBoardArray[6].innerHTML) || (gameBoardArray[1].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[7].innerHTML) || (gameBoardArray[2].innerHTML === gameBoardArray[5].innerHTML && gameBoardArray[5].innerHTML === gameBoardArray[8].innerHTML) ||
    (gameBoardArray[0].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[8].innerHTML) ||
    (gameBoardArray[2].innerHTML === gameBoardArray[4].innerHTML && gameBoardArray[4].innerHTML === gameBoardArray[6].innerHTML)) {
        alert(setH3.innerHTML + " win's")
        //setH3.innerHTML = "Blue Wins"
    } else {
        console.log("Tie. Keep Playing");
    }
}