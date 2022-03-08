const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validationInputs();
})

function validationInputs() {
    const firstnameValue = firstName.value;
    const lastnameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (firstnameValue === "") {
        setError(firstName, "First Name cannot be empty")
    } else {
        setSuccess(firstName);
    }

    if (lastnameValue === "") {
        setError(lastName, "Last Name cannot be empty")
    } else {
        setSuccess(lastName);
    }

    if (emailValue === "") {
        setError(email, "Looks like this is not an email")

    } else if (!checkEmail(emailValue)) {
        setError(email, "Insira um email Válido")
    } else {
        setSuccess(email)
    }
    if (passwordValue === "") {
        setError(password, "Password cannot be empty")
    } else {
        setSuccess(password);
    }

}








function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message;
    formControl.className = "form-control error";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}