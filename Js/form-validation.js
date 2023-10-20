// =============== start the input validation
const passwordInput = document.querySelector("form .password-input"),
errorMessage = document.querySelector("form .error-message"),
registerBtn = document.querySelector("form .btn"),
formSubmitionAlert = document.querySelector(".form-submition-alert"),
passwordConfirmInput = document.querySelector("form .password-confirm-input");

const form = document.querySelector("form");


console.log(formSubmitionAlert);
form.addEventListener('submit', (e) => {
    if(passwordInput.value !== passwordConfirmInput.value) {
        errorMessage.classList.add("show");
        e.preventDefault();
    } else {
        errorMessage.classList.remove("show");
        formSubmitionAlert.classList.add("show");
    }
});
// =============== end the input validation