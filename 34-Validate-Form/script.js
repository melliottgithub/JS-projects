//selectors
getID = (ID) => document.getElementById(ID);
const form = getID("form");
const password1El = getID("password1");
const password2El = getID("password2");
const messageContainer = getID(".container-message");
const message = getID("message");
//variables
let isValid = false;
//function
function validateForm() {
  isValid = form.checkValidity();
  message.textContent = "Please fill out all fields.";
}
function processFormData(e) {
  e.preventDefault();
  //validate form
  validateForm();
}
//event listeners
form.addEventListener("submit", processFormData);
