const registrationForm = document.getElementById("registrationForm");
const studentName = document.getElementById("studentName");
const studentNumber = document.getElementById("studentNumber");
const email= document.getElementById("email");
const workshop= document.getElementById("workshop");
const terms= document.getElementById("terms");


const nameError = document.getElementById("nameError");
const studentNumberError = document.getElementById("studentNumberError");
const emailError= document.getElementById("emailError");
const workshopError= document.getElementById("workshopError");
const termsError= document.getElementById("termsError");

const registrationResult = document.getElementById("registrationResult");
const summaryName = document.getElementById("summaryName");
const summaryStudentNumber = document.getElementById("summaryStudentNumber");
const summaryEmail = document.getElementById("summaryEmail");
const summaryWorkshop = document.getElementById("summaryWorkshop");




function isValidStudentName(value) {
    return value.trim().length >= 3;
}

function isValidStudentNumber(value) {
    return /^\d{2}-\d{4}-\d{3}$/.test(value.trim());
}
function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateStudentName() {

    if (!isValidStudentName(studentName.value)) {

        setError(
            studentName,
            studentNameError,
            "Enter your full name with at least 3 characters."
        );

        return false;
    }

    clearError(studentName, studentNameError);

    return true;
}


function validateStudentNumber() {

    if (!isValidStudentNumber(studentNumber.value)) {

        setError(
            studentNumber,
            studentNumberError,
            "Use this format: 24-0952-781."
        );

        return false;
    }

    clearError(
        studentNumber,
        studentNumberError
    );

    return true;
}


function validateEmail() {

    if (!isValidEmail(email.value)) {

        setError(
            email,
            emailError,
            "Enter a valid emai."
        );

        return false;
    }

    clearError(
        email,
        emailError,
    );

    return true;
}


