const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  if (email.value === '' || password.value === '') {
    alert('All fields must be completed!');
  } else {
    loginForm.reset();
    console.log(data);
  }
}
