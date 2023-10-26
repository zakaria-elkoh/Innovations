
const form = document.querySelector(".form-section form"),
firstName = document.querySelector(".form-section form .first-name"),
lastName = document.querySelector(".form-section form .last-name"),
message = document.querySelector(".form-section form .message"),
errorMessage = document.querySelector("form.container .error"),
email = document.querySelector(".form-section form .email");

function showError(text) {
    errorMessage.innerText = text;
    errorMessage.classList.add("show");
}

form.addEventListener("submit", (e) => {

    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(email.value);

    if(!result) {
        e.preventDefault();
        showError("Plesse enter a valid email.");
    }

    switch ("") {
        case firstName.value :
            e.preventDefault();
            showError("enter your first name.");
            break;
        case lastName.value :
            e.preventDefault();
            showError("enter your last name.");
            break;
        case email.value :
            e.preventDefault();
            showError("enter your email.");
            break;
        case message.value :
            e.preventDefault();
            showError("enter your message.");
            break;
    }




});
