//create a variable for the grid-container id
const gridContainer = document.getElementById("grid-container")
//grab the nodelist within the grid-container for each grid-item on the board
const gridItemList = gridContainer.querySelectorAll(".grid-item")
//grab the color background within grid-item
const gridItemColorList = gridContainer.querySelectorAll(".background-color")
let playerTurn = 1;

function playGame() {
gridItemColorList.forEach((gridItem => {
    gridItem.style.backgroundColor = '';
        gridItem.addEventListener("click", evt => {
            evt.preventDefault();
            console.log(playerTurn)
            if (playerTurn % 2 == 1) {
                gridItem.style.backgroundColor = "lightblue", playerTurn++;
            }
            else if (playerTurn % 2 !== 1) {
                gridItem.style.backgroundColor = "red", playerTurn++;
            }
         })
    }));
}
playGame();