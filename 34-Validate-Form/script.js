//selectors
getID = (ID) => document.getElementById(ID);
const form = getID("form");
const password1El = getID("password1");
const password2El = getID("password2");
const messageContainer = document.querySelector(".container-message");
const message = getID("message");
//variables
let isValid = false;
let passwordsMatch = false;
//function
function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  //pass it to a server
  console.log(user);
}
function processFormData(e) {
  e.preventDefault();
  //validate form
  validateForm();
  //submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
//event listeners
form.addEventListener("submit", processFormData);
