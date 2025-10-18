const container = document.querySelector(".container");

let rows = 16;
let columns = 16;

      // Use a nested for loop to create the grid squares
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const square = document.createElement('div');
          square.classList.add('square');
          container.appendChild(square);

          square.addEventListener("mouseover", () => {
          square.style.backgroundColor = "red";
})
}
}

