const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const passw = loginForm.elements.password.value.trim();

   if (email === '' || passw === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    passw: passw,
  };

  console.log(formData);

  loginForm.reset();
});
