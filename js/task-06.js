const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  if (event.currentTarget.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  } else if (event.currentTarget.value.trim().length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
