const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");
const closePopupEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closePopupEl.addEventListener("click", () => {
    popupContainerEl.classList.add("active");
    containerEl.classList.remove("active");
});