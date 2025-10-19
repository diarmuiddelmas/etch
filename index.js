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

let input = parseInt(prompt("Enter the number of squares per side"),10);

while (Number.isNaN(input) || input > 100 || input < 1) {
input = parseInt(prompt("Please enter a number between 1 and 100:"), 10);
}

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

            let op = parseFloat(square.dataset.opacity) || 0;
            op = Math.min(op + 0.1,1);
            square.dataset.opacity = op;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 

          square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${op}`;
          });
        }}}