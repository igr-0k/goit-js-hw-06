const rangeSelect = document.querySelector('#font-size-control');
const textEl = document.getElementById('text');

rangeSelect.value = 16;
rangeSelect.addEventListener('change', event => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
});
