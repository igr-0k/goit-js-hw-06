const rangeSelect = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeSelect.addEventListener('change', event => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
});
