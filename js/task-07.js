const rangeSelect = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

rangeSelect.value = 16;
rangeSelect.addEventListener('input', event => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
});
