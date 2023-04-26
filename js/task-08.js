const loginForm = document.querySelector(".login-form");
const useremail = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
loginForm.addEventListener("submit", onSubmit);
function onSubmit (event){
  event.preventDefault();
  const elements = {
    email: useremail.value,
    pass: password.value,
  };
  if (useremail.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  console.log(elements);
  loginForm.reset();
};