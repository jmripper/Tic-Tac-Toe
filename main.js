//create a variable for the grid-container id
const gridContainer = document.getElementById("grid-container")
//grab the color background within grid-item
const gridItemColorList = gridContainer.querySelectorAll(".background-color")
const setH3 = document.querySelector("h3")
let playerTurn = 1;

function playGame() {
gridItemColorList.forEach((gridItem => {
    gridItem.style.backgroundColor = '';
        gridItem.addEventListener("click", evt => {
            evt.preventDefault();
            //console.log(playerTurn)
            if (playerTurn % 2 == 1) {
                gridItem.style.backgroundColor = "lightblue", playerTurn++,
                gridItem.style.pointerEvents = "none";
                setH3.innerHTML = "Player 1: Blue";
            }
            else if (playerTurn % 2 !== 1) {
                gridItem.style.backgroundColor = "red", playerTurn++,
                gridItem.style.pointerEvents = "none";
                setH3.innerHTML = "Player 2: Red";
            }
         })
    }));
}
playGame();

const resetButton = document.getElementById("resetButton")

resetButton.addEventListener("click", evt => {
    gridItemColorList.forEach((gridItem => { 
        gridItem.style.backgroundColor = ''; 
        playerTurn == 1;
    }))
})