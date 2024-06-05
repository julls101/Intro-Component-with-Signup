const form = document.getElementById('form');
const btn = document.getElementById('button');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorTextFirst = document.querySelector(".error-text-first");
const errorTextLast = document.querySelector(".error-text-last");
const errorTextEmail = document.querySelector(".error-text-email");
const errorTextPass = document.querySelector(".error-text-pass");
const firstWarning = document.querySelector("#first-warning");
const lastWarning = document.querySelector("#last-warning");
const emailWarning = document.querySelector("#email-warning");
const revealPassword = document.querySelector("#reveal-password");


//console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorTextFirst.innerHTML = "First Name cannot be empty";
    firstWarning.style.display = "block";
  
  } else {
    firstName.classList.remove('error');
    errorTextFirst.innerHTML = '';
    firstWarning.style.display = "none"
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorTextLast.innerHTML = "Last Name cannot be empty";
    lastWarning.style.display = "block";

  } else {
    lastName.classList.remove('error');
    errorTextLast.innerHTML = '';
    lastWarning.style.display = "none";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorTextEmail.innerHTML = "Looks like this is not an email";
    emailWarning.style.display = "block";

  } else {
    email.classList.remove('error');
    errorTextEmail.innerHTML = '';
    emailWarning.style.display = "none";
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorTextPass.innerHTML = "Password cannot be empty";
    revealPassword.src = "./images/icon-error.svg";

  } else {
    password.classList.remove('error');
    errorTextPass.innerHTML = '';
  }

});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



revealPassword.addEventListener('click', () =>{
  if(password.type === 'password'){
    password.type = 'text';
    revealPassword.src = "./images/eye-solid.svg";
  }else{
    password.type = 'password';
    revealPassword.src = "./images/eye-slash-solid.svg";
  }
})
