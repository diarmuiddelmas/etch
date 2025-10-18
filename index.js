const container = document.querySelector(".container");
const button = document.querySelector("button");

let squares = [];
let rows = 16;

document.documentElement.style.setProperty("--rows", rows);

createGrid(rows);

    //   for (let i = 0; i < rows; i++) {
        // for (let j = 0; j < rows; j++) {
          
        //   const square = document.createElement("div");
        //    square.classList.add("square");
        //    container.appendChild(square);
        //    squares.push(square);

        //   square.addEventListener("mouseover", () => {
        //   square.style.backgroundColor = "red";

// })
// }
// }

button.addEventListener("click", () => {

let input = parseInt(prompt("Enter the number of squares per side"),);
rows = input;
document.documentElement.style.setProperty("--rows", rows);

container.replaceChildren();
squares = [];
createGrid(rows);
});

function createGrid (rows) {
    
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
          
          const square = document.createElement("div");
           square.classList.add("square");
           
           container.appendChild(square);
           squares.push(square);

          square.addEventListener("mouseover", () => {
          square.style.backgroundColor = "red";
          });

        }}}
