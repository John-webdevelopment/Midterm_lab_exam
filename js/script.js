document.addEventListener("DOMContentLoaded", function () {

    const registrationForm =
        document.getElementById("registrationForm");

    const studentName =
        document.getElementById("studentName");

    const studentNumber =
        document.getElementById("studentNumber");

    const email =
        document.getElementById("email");

    const workshop =
        document.getElementById("workshop");

    const terms =
        document.getElementById("terms");


    const nameError =
        document.getElementById("nameError");

    const studentNumberError =
        document.getElementById("studentNumberError");

    const emailError =
        document.getElementById("emailError");

    const workshopError =
        document.getElementById("workshopError");

    const termsError =
        document.getElementById("termsError");


    const registerBtn =
        document.getElementById("registerBtn");

    const clearBtn =
        document.getElementById("clearBtn");


    const registrationResult =
        document.getElementById("registrationResult");


    const summaryName =
        document.getElementById("summaryName");

    const summaryStudentNumber =
        document.getElementById("summaryStudentNumber");

    const summaryEmail =
        document.getElementById("summaryEmail");

    const summaryWorkshop =
        document.getElementById("summaryWorkshop");


    registrationResult.hidden = true;


    function validateStudentInfo(name, studentNumber, email) {

        const namePattern = /^[A-Za-z\s]+$/;

        const studentNumberPattern = /^\d{2}-\d{4}-\d{3}$/;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        const cleanName = name.trim();

        const cleanStudentNumber =
            studentNumber.trim();

        const cleanEmail =
            email.trim();


        const validName =
            cleanName.length >= 3 &&
            namePattern.test(cleanName);


        const validStudentNumber =
            studentNumberPattern.test(
                cleanStudentNumber
            );


        const validEmail =
            emailPattern.test(
                cleanEmail
            );


        return (
            validName &&
            validStudentNumber &&
            validEmail
        );
    }


    window.validateStudentInfo =
        validateStudentInfo;


    registrationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            nameError.textContent = "";
            studentNumberError.textContent = "";
            emailError.textContent = "";
            workshopError.textContent = "";
            termsError.textContent = "";


            registrationResult.hidden = true;


            const nameValue =
                studentName.value.trim();

            const studentNumberValue =
                studentNumber.value.trim();

            const emailValue =
                email.value.trim();


            let valid = true;


            const namePattern =
                /^[A-Za-z\s]+$/;


            if (
                nameValue.length < 3 ||
                !namePattern.test(nameValue)
            ) {

                nameError.textContent =
                    "Enter a valid student name.";

                valid = false;
            }


            const studentNumberPattern =
                /^\d{2}-\d{4}-\d{3}$/;


            if (
                !studentNumberPattern.test(
                    studentNumberValue
                )
            ) {

                studentNumberError.textContent =
                    "Enter a valid student number.";

                valid = false;
            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(emailValue)
            ) {

                emailError.textContent =
                    "Enter a valid email address.";

                valid = false;
            }


            if (workshop.value === "") {

                workshopError.textContent =
                    "Please select a workshop.";

                valid = false;
            }


            if (!terms.checked) {

                termsError.textContent =
                    "You must accept the Terms and Conditions.";

                valid = false;
            }


            if (!valid) {
                return;
            }


            if (
                !validateStudentInfo(
                    nameValue,
                    studentNumberValue,
                    emailValue
                )
            ) {
                return;
            }


            summaryName.textContent =
                nameValue;

            summaryStudentNumber.textContent =
                studentNumberValue;

            summaryEmail.textContent =
                emailValue;

            summaryWorkshop.textContent =
                workshop.value;


            registrationResult.hidden = false;

        }
    );


    clearBtn.addEventListener(
        "click",
        function () {

            studentName.value = "";

            studentNumber.value = "";

            email.value = "";

            workshop.value = "";

            terms.checked = false;


            nameError.textContent = "";

            studentNumberError.textContent = "";

            emailError.textContent = "";

            workshopError.textContent = "";

            termsError.textContent = "";


            summaryName.textContent = "";

            summaryStudentNumber.textContent = "";

            summaryEmail.textContent = "";

            summaryWorkshop.textContent = "";


            registrationResult.hidden = true;

        }
    );

});
