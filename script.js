const optionList = document.querySelector(".rating-list ul").getElementsByTagName("li");
const submitButton = document.querySelector('.rating-submit');

let selectedOption;
Array.from(optionList).forEach((option) => {
    option.addEventListener('click', () => {
        let activeElem = document.querySelector(".selected");
        if(activeElem !== null) activeElem.classList.remove("selected");
        option.classList.add("selected");
        selectedOption = option.innerHTML;
    });
});