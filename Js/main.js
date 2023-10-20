
// =============== start the nav bar
const nav = document.querySelector("header nav");

window.onscroll = () => {
    if(window.scrollY > 250) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}
// =============== end the nav bar

// =============== start the menu
const burgerIcon = document.querySelector("header nav i.burger"),
      closeIcon = document.querySelector("header li.close-icon"),
      navBar = document.querySelector("header nav ul");

burgerIcon.addEventListener("click", () => {
    navBar.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    navBar.classList.remove("active");
});
// =============== end the menu

// =============== start the questions
const questions = document.querySelectorAll(".questions .question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");
    });
})
// =============== end the questions

// =============== atart the ads slider
const adsLis = document.querySelectorAll(".ads ul li"),
sliderWrapper = document.querySelector(".ads .cards-wrapper");

adsLis.forEach((li) => {
    li.addEventListener("click", () => {
        adsLis.forEach((item) => {
            item.classList.remove("active");
        });
        li.classList.add("active");
        let curentTargetLi = li.getAttribute('data-num') * 33.333;
        sliderWrapper.style.transform = `translateX(-${curentTargetLi}%)`;
    });
})
// =============== end the ads slider

// =============== start the pop up
const popUpWrapper = document.querySelector(".pop-up-wrapper"),
popUpParagraph = document.querySelector(".pop-up-wrapper .pop-up p"),
servicesPopUpLinks = document.querySelectorAll(".services .cards .card .text a");


const showPopUp = () => {
    popUpWrapper.classList.add("show");
};

servicesPopUpLinks.forEach((el) => {
    el.addEventListener("click", showPopUp);
});

popUpParagraph.addEventListener("click", (event) => {
    event.stopPropagation();
});
popUpWrapper.addEventListener("click", () => {
    console.log("clicked");
    popUpWrapper.classList.remove("show");
});

// =============== end the pop up




