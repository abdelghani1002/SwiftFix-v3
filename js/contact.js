/* Get form elements */
var form = document.querySelector("#form");
var clientName = document.querySelector('#name');
var phone = document.querySelector("#phone");
var email = document.querySelector("#email");
var subject = document.querySelector("#subject");
var message = document.querySelector("#message");
var submitBtn = document.querySelector(".submit-btn");
let isValidForm;

/* Validation functions */
const validateName = (name) => {
    let min = 5, max = 30;
    let errorMessage;
    let namePattern = /^[a-zA-Zéèçà -]+$/;
    name = name.trim();
    let isValidName = namePattern.test(name) && name.length <= max && name.length >= min;
    if (!isValidName) {
        if (!name.length) errorMessage = "Name is required!";
        if (name.length < min) errorMessage = "Your name must be at least 5 characters long.";
        if (name.length > max) errorMessage = "Your name cannot be more than 30 characters long.";
    }
    return [isValidName, errorMessage];
}

const validatePhone = (phone) => {
    let phonePattern = /\+212-+(6|7)+[0-9]{8}$/;
    let errorMessage;
    phone = phone.trim();
    let isValidPhone = phonePattern.test(phone);
    if (!isValidPhone)
        !phone.length ? errorMessage = "Phone number is required" : errorMessage = "Invalide phone number"
    return [isValidPhone, errorMessage];
}

const validateEmail = (email) => {
    let emailPattern = /^[a-zA-z][a-zA-Z0-9\-\.\_]{2,12}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
    let errorMessage;
    email.trim();
    let isValidEmail = emailPattern.test(email);
    !isValidEmail ? errorMessage = "Invalide email!" : null
    return [isValidEmail, errorMessage];
}

const validateSubject = (subject) => {
    let errorMessage;
    let isValidatSubject = subject.value !== "";
    return [isValidatSubject, "Subject is required!"];
}

const validateMessage = (message) => {
    let min = 4, max = 400;
    let errorMessage;
    message.length < min ? errorMessage = "Your message must be at least 4 characters long." : null
    message.length > max ? errorMessage = "Your message cannot be more than 400 characters long." : null
    let isValidMessage = errorMessage ? false : true;
    return [isValidMessage, errorMessage];
}

/* Success & error style */
const showSuccess = (target) => {
    target.nextElementSibling.innerHTML = "<img src='./images/icons/success.png'> Valid"
    target.classList.remove('error');
    target.classList.add('success');
}

const showError = (target, errorMessage) => {
    target.nextElementSibling.innerHTML = "<img src='./images/icons/error.png'>" + errorMessage; /* Add Icon of error */
    target.classList.remove('success');
    target.classList.add('error');
}

/* Validate form */
form.addEventListener('input', (event) => {
    switch (event.target) {
        case clientName:
            let [isValidName, nameErrorMessage] = validateName(clientName.value);
            isValidName ? showSuccess(clientName) : showError(clientName, nameErrorMessage)
            break;
        case phone:
            let [isValidPhone, phoneErrorMessage] = validatePhone(phone.value);
            isValidPhone ? showSuccess(phone) : showError(phone, phoneErrorMessage)
            break;
        case email:
            let [isValidEmail, emailErrorMessage] = validateEmail(email.value);
            isValidEmail ? showSuccess(email) : showError(email, emailErrorMessage)
            break;
        case subject:
            let [isValidSubject, subjectErrorMessage] = validateSubject(subject.value);
            isValidSubject ? showSuccess(subject) : showError(subject, subjectErrorMessage)
            break;
        case message:
            !subject.value ? showError(subject, "Subject is required!") : null
            let [isValidMessage, messageErrorMessage] = validateMessage(message.value);
            isValidMessage ? showSuccess(message) : showError(message, messageErrorMessage)
            break;
    }

    /* Send button */
    isValidForm = validateName(clientName.value)[0] && validatePhone(phone.value)[0] && validateEmail(email.value)[0] && validateSubject(subject.value)[0] && validateMessage(message.value)[0]
    submitBtn.disabled = !isValidForm;
    submitBtn.ariaDisabled = submitBtn.disabled
})

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let alertMessage = document.querySelector('.alert')
    alertMessage.classList.add('show');
    setTimeout(() => {
        alertMessage.classList.remove('show');
    }, 2000);
})