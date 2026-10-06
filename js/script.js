document.addEventListener("DOMContentLoaded", function () {

var studentNumberPattern = /^\d{2}-\d{4}-\d{3}$/;
var emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

var registrationForm;
var studentName;
var studentNumber;
var email;
var workshop;
var terms;

var nameError;
var studentNumberError;
var emailError;
var workshopError;
var termsError;

var registerBtn;
var clearBtn;

var registrationResult;
var summaryName;
var summaryStudentNumber;
var summaryEmail;
var summaryWorkshop;

registrationForm = document.getElementById("registrationForm");

studentName = document.getElementById("studentName");
studentNumber = document.getElementById("studentNumber");
email = document.getElementById("email");
workshop = document.getElementById("workshop");
terms = document.getElementById("terms");

nameError = document.getElementById("nameError");
studentNumberError = document.getElementById("studentNumberError");
emailError = document.getElementById("emailError");
workshopError = document.getElementById("workshopError");
termsError = document.getElementById("termsError");

registerBtn = document.getElementById("registerBtn");
clearBtn = document.getElementById("clearBtn");

registrationResult = document.getElementById("registrationResult");

summaryName = document.getElementById("summaryName");
summaryStudentNumber = document.getElementById("summaryStudentNumber");
summaryEmail = document.getElementById("summaryEmail");
summaryWorkshop = document.getElementById("summaryWorkshop");

function clearErrors() {
nameError.textContent = "";
studentNumberError.textContent = "";
emailError.textContent = "";
workshopError.textContent = "";
termsError.textContent = "";
}

function validateName() {

if (studentName.value.trim() === "") {
  nameError.textContent = "Please enter your student name.";
  return false;
}

return true;

}

function validateStudentNumber() {

if (studentNumber.value.trim() === "") {
  studentNumberError.textContent = "Please enter your student number.";
  return false;
}

if (!studentNumberPattern.test(studentNumber.value.trim())) {
  studentNumberError.textContent =
    "Student number must follow the format 00-0000-000.";
  return false;
}

return true;

}

function validateEmail() {

if (email.value.trim() === "") {
  emailError.textContent = "Please enter your email address.";
  return false;
}

if (!emailPattern.test(email.value.trim())) {
  emailError.textContent = "Please enter a valid email address.";
  return false;
}

return true;

}

function validateWorkshop() {

if (workshop.value === "") {
  workshopError.textContent = "Please select a workshop.";
  return false;
}

return true;

}

function validateTerms() {

if (!terms.checked) {
  termsError.textContent =
    "You must accept the Terms and Conditions.";
  return false;
}

return true;

}

registrationForm.addEventListener("submit", function (event) {

event.preventDefault();

clearErrors();

var nameIsValid = validateName();
var studentNumberIsValid = validateStudentNumber();
var emailIsValid = validateEmail();
var workshopIsValid = validateWorkshop();
var termsIsValid = validateTerms();


if (
  nameIsValid &&
  studentNumberIsValid &&
  emailIsValid &&
  workshopIsValid &&
  termsIsValid
) {

  summaryName.textContent = studentName.value.trim();

  summaryStudentNumber.textContent =
    studentNumber.value.trim();

  summaryEmail.textContent =
    email.value.trim();

  summaryWorkshop.textContent =
    workshop.value;

  registrationResult.hidden = false;

  registrationResult.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

} else {

  registrationResult.hidden = true;

}

});

clearBtn.addEventListener("click", function () {

registrationForm.reset();

clearErrors();

registrationResult.hidden = true;

summaryName.textContent = "";
summaryStudentNumber.textContent = "";
summaryEmail.textContent = "";
summaryWorkshop.textContent = "";

studentName.focus();

});

studentName.addEventListener("input", function () {

if (studentName.value.trim() !== "") {
  nameError.textContent = "";
}

});

studentNumber.addEventListener("input", function () {

if (studentNumberPattern.test(studentNumber.value.trim())) {
  studentNumberError.textContent = "";
}

});

email.addEventListener("input", function () {

if (emailPattern.test(email.value.trim())) {
  emailError.textContent = "";
}

});

workshop.addEventListener("change", function () {

if (workshop.value !== "") {
  workshopError.textContent = "";
}

});

terms.addEventListener("change", function () {

if (terms.checked) {
  termsError.textContent = "";
}

});

});
