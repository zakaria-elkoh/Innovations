// =============== atart the ads slider
const adsLis = document.querySelectorAll(".ads ul li"),
sliderWrapper = document.querySelector(".ads .cards-wrapper");

sliderWrapper.id = "ma";
 
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
