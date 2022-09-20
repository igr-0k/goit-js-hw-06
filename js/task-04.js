const valueDisp = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  valueDisp.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
  valueDisp.textContent = counterValue += 1;
});
