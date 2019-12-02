//create a variable for the grid-container id
const gridContainer = document.getElementById("grid-container")
//grab the nodelist within the grid-container for each grid-item on the board
const gridItemList = gridContainer.querySelectorAll(".grid-item")
//grab the color background within grid-item
const gridItemColorList = gridContainer.querySelectorAll(".background-color")
//player one
const playerOne = 1;
const playerTwo = 0


gridItemColorList.forEach((gridItem => {
    gridItem.style.backgroundColor = '';

    gridItem.addEventListener("click", evt => {
        evt.preventDefault();
        //gridItem.style.backgroundColor = "red";
        //randomNum();
        if (player === 0) {
            return gridItem.style.backgroundColor = "lightblue";
        }
        else {
            return gridItem.style.backgroundColor = "red";
        }
        }
    })
}))