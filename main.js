//create a variable for the grid-container id
const gridContainer = document.getElementById("grid-container")
//grab the nodelist within the grid-container for each grid-item on the board
const gridItemList = gridContainer.querySelectorAll(".grid-item")
//grab the color background within grid-item
const gridItemColorList = gridContainer.querySelectorAll(".background-color")


gridItemColorList.forEach((gridItem => {

    gridItem.addEventListener("click", evt => {
        evt.preventDefault();
        gridItem.style.backgroundColor = "lightblue";
    })
    //console.log(gridItem)
}))