function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.getElementById('boxes');

const inputEl = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

let boxSize = 20;

function createBoxes(amount) {
  divEl.innerHTML = '';

  amount = Number(inputEl.value);

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    box.style.width = box.style.height = boxSize + 'px';
    divEl.append(box);
  }

  boxSize = 20;
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divEl.innerHTML = '';
}
