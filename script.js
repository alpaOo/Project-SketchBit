const mainContainer = document.querySelector('.container');
let gridValue = 0;
userInput(+prompt(`enter a number: `)); //get user input using propmt then, run function userInput()

let isDragging = false; //determines whether mouse(any button) is clicked

mainContainer.style.gridTemplateColumns = `repeat(${gridValue}, calc(512px / ${gridValue}))`; // set grid parameters using user input
mainContainer.style.gridTemplateRows = `repeat(${gridValue}, calc(512px / ${gridValue}))`; // set grid parameters using user input

for (let i = 0; i < gridValue; i++) {
  for (let j = 0; j < gridValue; j++) {
    const cell = document.createElement('div');
    cell.classList.add('grid');
    mainContainer.append(cell);

    cell.addEventListener('mousedown', function () {
      isDragging = true;
      cell.classList.add('cell');
    });
    cell.addEventListener('mousemove', function () {
      if (isDragging) {
        cell.classList.add('cell');
      }
    });

    cell.addEventListener('mouseup', function () {
      isDragging = false;
    });
  }
}

function userInput(value) {
  if (value > 64) return alert('STOP');

  gridValue = value;
}
