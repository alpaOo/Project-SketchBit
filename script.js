const mainContainer = document.querySelector('.container');
let isDragging = false;

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('grid');
    mainContainer.append(cell);
  }
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
