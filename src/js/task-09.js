function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const changeColorButton = document.querySelector('button.change-color');

const spanEl = document.querySelector('span.color');

changeColorButton.addEventListener('click', onClick);
function onClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
