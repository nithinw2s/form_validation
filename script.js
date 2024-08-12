
function validateForm() {
    // get the field items
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // get all span using id
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // set the span content as empty
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;


    //  check if the field is empty
    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    return isValid;
}

function validate_login_Form() {
    // get field value from input
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;

    //get span value
    const login_email_error = document.getElementById('login_email-error');
    const login_password_error = document.getElementById('login_password-error');

    //set span value as empty
    login_email_error.textContent = '';
    login_password_error.textContent = '';

    let isValid = true;

    if (email=="" || !email.includes('@')) {
        login_email_error.textContent = "enter the valid email"
        isValid = false
    }

    if (password=="" || password.length <6 ) {
        login_password_error.textContent = "enter the password least 6 characters"
        isValid = false
    }

    return isValid

}