// =============== start the pop up
const popUpWrapper = document.querySelector(".pop-up-wrapper"),
popUpDiv = document.querySelector(".pop-up-wrapper .pop-up div"),
popUpImg = document.querySelector(".pop-up-wrapper .pop-up img"),
popUpP = document.querySelector(".pop-up-wrapper .pop-up p"),
popUpHeading = document.querySelector(".pop-up-wrapper .pop-up h2"),
servicesPopUpLinks = document.querySelectorAll(".services .cards .card .text a");

servicesPopUpLinks.forEach((el) => {
    
    el.addEventListener('click', () => {
        const targetCard = el.getAttribute("data-num");

        popUpImg.src = document.querySelector(`.services .card-${targetCard} img`).getAttribute("src");
        popUpHeading.innerText = document.querySelector(`.services .card-${targetCard} h5`).innerText;
        popUpP.innerText = document.querySelector(`.services .card-${targetCard} p`).innerText;
        
        popUpWrapper.classList.add("show");
    });

});

popUpDiv.addEventListener("click", (event) => {
    event.stopPropagation();
});
popUpWrapper.addEventListener("click", () => {
    popUpWrapper.classList.remove("show");
});

// =============== end the pop up

