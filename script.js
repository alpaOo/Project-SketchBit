const mainContainer = document.querySelector('.container');
const mainDiv = document.querySelector('.mainDiv');
let mainText = document.querySelector('.mainText');

let gridValue = 0;
let isDragging = false; //determines whether mouse(any button) is clicked

enterNewValue();
function enterNewValue() {
  gridInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const newGridValue = +gridInput.value;

      clearGrid();
      newGrid(newGridValue);
      gridInput.value = '';
    }
  });
}

function clearGrid() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  mainText.textContent = null;

  mainContainer.style.gridTemplateColumns = null;
  mainContainer.style.gridTemplateRows = null;
}

function newGrid(gridValue) {
  mainText.textContent = `${gridValue} x ${gridValue}`;
  mainText.classList.add('mainText');

  mainContainer.style.gridTemplateColumns = `repeat(${gridValue}, calc(512px / ${gridValue}))`;
  mainContainer.style.gridTemplateRows = `repeat(${gridValue}, calc(512px / ${gridValue}))`;

  for (let i = 0; i < gridValue; i++) {
    for (let j = 0; j < gridValue; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid');
      mainContainer.append(cell);
      mouseEvents(cell);
    }
  }
}

function mouseEvents(value) {
  value.addEventListener('mousedown', function () {
    isDragging = true;
    value.classList.add('cell');
  });
  value.addEventListener('mousemove', function () {
    if (isDragging) {
      value.classList.add('cell');
    }
  });

  value.addEventListener('mouseup', function () {
    isDragging = false;
  });
}
