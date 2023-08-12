const form = document.querySelector('form'),
    emailField = form.querySelector('.email-field'),
    emailInput = emailField.querySelector('.email'),
    passwordField = form.querySelector('.create-password'),
    passwordInput = passwordField.querySelector('.password'),
    cPasswordField = form.querySelector('.confirm-password'),
    cPasswordInput = cPasswordField.querySelector('.cPassword');


/* ==== Email Validation ====  */

function checkEmail() {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
}
/* ==== calling function on form submit ====  */
form.addEventListener('submit', (e) => {
e.preventDefault() // preventing form submission
})