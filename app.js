const signupForm = document.querySelector('#signup-form');
const success = document.querySelector('.success-icon');
const passwordStrength = document.querySelector('.password-strength');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const username = document.querySelector('#username');
const idNumber = document.querySelector('#id-number');
const date = document.querySelector('#date');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const url = document.querySelector('#url');

const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const usernameError = document.querySelector('#username-error');
const idNumberError = document.querySelector('#id-number-error');
const dateError = document.querySelector('#date-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');
const urlError = document.querySelector('#url-error');

const firstNameIcon = document.querySelector('#first-name-icon');
const lastNameIcon = document.querySelector('#last-name-icon');
const usernameIcon = document.querySelector('#username-icon');
const idNumberIcon = document.querySelector('#id-number-icon');
const dateIcon = document.querySelector('#date-icon');
const emailIcon = document.querySelector('#email-icon');
const passwordIcon = document.querySelector('#password-icon');
const confirmPasswordIcon = document.querySelector('#confirm-password-icon');
const urlIcon = document.querySelector('#url-icon');

function validateFirstName() {
    if(!firstName.validity.valid){
        firstName.classList.add('error');
        if(firstName.validity.tooShort){
            firstNameError.innerText = 'Minimum 2 characters required';
        } else {
            firstNameError.innerText = 'Required field';
        }
    } else {
        firstName.classList.remove('error');
        firstNameIcon.style.display = 'inline-block';
        firstNameError.innerText = '';
    }
}
function validateLastName(){
    if(!lastName.validity.valid){
        lastName.classList.add('error');
        if(lastName.validity.tooShort){
            lastNameError.innerText = 'Minimum 2 characters required';
        } else {
            lastNameError.innerText = 'Required field';
        }
    } else {
        lastName.classList.remove('error');
        lastNameIcon.style.display = 'inline-block';
        lastNameError.innerText = '';
    }
}
function validateUsername(){
    if(!username.validity.valid){
        username.classList.add('error');
        if(username.validity.tooShort){
            usernameError.innerText = 'Minimum 4 characters required'
        } else {
            username.innerText = 'Required field';
        }
    } else {
        username.classList.remove('error');
        usernameIcon.style.display = 'inline-block';
        usernameError.innerText = '';
    }
}
function validateId(){
    const value = idNumber.value;
    if(!idNumber.validity.valid){
        idNumber.classList.add('error');
        if(idNumber.validity.typeMismatch){
            idNumberError.innerText = 'ASDASD';
        } else {
            idNumberError.innerText = 'Required field';
        }
    } else {
        if(value.length !== 11){
            idNumber.classList.add('error');
            idNumberError.innerText = 'Must be 11 characters long'
        } else {
            idNumber.classList.remove('error');
            idNumberError.innerText = '';
            idNumberIcon.style.display = 'inline-block';
        }
    }
}
function validateDate(){
    if(!date.validity.valid){
        date.classList.add('error');
        if(date.validity.typeMismatch){
            dateError.innerText = 'Enter valid date';
        } else {
            dateError.innerText = 'Required field';
        }
    } else {
        date.classList.remove('error');
        dateError.innerText = '';
    }
}
function validateEmail(){
    if(!email.validity.valid){
        email.classList.add('error');
        if(email.validity.typeMismatch){
            emailError.innerText = 'Please enter valid E-Mail';
        } else {
            emailError.innerText = 'Required field';
        }
    } else {
        email.classList.remove('error');
        emailIcon.style.display = 'inline-block';
        emailError.innerText = '';
    }
}
function validatePassword(){
    if(password.value.length <= 8){
        passwordError.innerText = 'Minimum 8 characters required';
    } else if(password.value.length >= 16) {
        passwordError.innerText = 'Maximum 16 characters allowed'
    } else if(password.value.length == 0) {
        passwordError.innerText = 'Required field';
    } else {
        passwordError.innerText = '';
        passwordIcon.style.display = 'inline-block';
    }
}
function validateConfirmPassword(){
    const passwordValue = document.querySelector('#password').value;
    const confirmPasswordValue = document.querySelector('#confirm-password').value;

    if(passwordValue != confirmPasswordValue) {
        confirmPasswordError.innerText = 'Password does not match';
    } else {
        confirmPasswordError.innerText = '';
        confirmPasswordIcon.style.display = 'inline-block';
    }

}
function validateUrl(){
    if(!url.validity.valid){
        url.classList.add('error');
        if(url.validity.typeMismatch){
            urlError.innerText = 'Please enter valid URL';
        } else {
            urlError.innerText = 'Required field';
        }
    } else {
        url.classList.remove('error');
        urlIcon.style.display = 'inline-block';
        urlError.innerText = '';
    }
}
function validatePasswordStrength(){
    const passwordValue = document.querySelector('#password').value;

    if(passwordValue.length == 0){
        passwordStrength.style.display = 'none';
    } else if(passwordValue.length <= 8){
        passwordStrength.style.display = 'block'
        passwordStrength.style.background = 'yellow'
        passwordStrength.style.width = '150px'
    } else if(passwordValue.length <= 16){
        passwordStrength.style.display = 'block'
        passwordStrength.style.background = 'green'
        passwordStrength.style.width = '250px'
    } else if(passwordValue.length <= 17){
        passwordStrength.style.display = 'none';
    }
}


firstName.addEventListener('input', () => {
    validateFirstName();
});
lastName.addEventListener('input', () => {
    validateLastName();
})
username.addEventListener('input', () => {
    validateUsername();
})
idNumber.addEventListener('input', () => {
    validateId();
})
date.addEventListener('input', () => {
    validateDate();
})
email.addEventListener('input', () => {
    validateEmail();
})
password.addEventListener('input', () => {
    validatePassword();
    validatePasswordStrength();
})
confirmPassword.addEventListener('input', () => {
    validateConfirmPassword();
})
url.addEventListener('input', () => {
    validateUrl();
})
passwordStrength.addEventListener('input', validatePasswordStrength())
