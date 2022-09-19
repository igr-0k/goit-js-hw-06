const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  if (email.value === '' || password.value === '') {
    alert('All fields must be completed!');
  }
  loginForm.reset();
  console.log(data);
}
