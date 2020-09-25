const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//functions
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const smallText = formControl.querySelector("small");
  smallText.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid.");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    console.log(getFieldName(input));

    input.value.trim() === ""
      ? showError(input, `${getFieldName(input)} is required`)
      : showSuccess(input);
  });
}
// check password match
function checkPasswordMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input2, "Passwords do not match.");
  }
}

// get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkLengthUser(input, min) {
  input.value.length < min
    ? showError(
        input,
        `${getFieldName(input)} must be more than ${min} characters.`
      )
    : showSuccess(input);
}
function checkLengthPass(input, min) {
  input.value.length < min
    ? showError(
        input,
        `${getFieldName(input)} must be more than ${min} characters.`
      )
    : showSuccess(input);
}

//Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);

  checkLengthUser(username, 3);
  checkLengthPass(password, 6);
  checkEmail(email);
  checkPasswordMatch(password, password2);

  //////////////// There is a better way above//////////
  // username.value === ""
  //   ? showError(username, "Username is required")
  //   : showSuccess(username);

  // if (email.value === "") {
  //   showError(email, "Email is required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Email is not valid");
  // } else {
  //   showSuccess(email);
  // }

  // password.value === ""
  //   ? showError(password, "Password is required")
  //   : showSuccess(password);
  // password2.value === ""
  //   ? showError(password2, "Password is required")
  //   : showSuccess(password2);
});
