const optionList = document.querySelector(".rating-list ul").getElementsByTagName("li");
const submitButton = document.querySelector('.rating-submit');

let selectedOption
for (let i = 0; i < optionList.length; i++) {
    optionList[i].addEventListener('click', () => {
        console.log(optionList[i].innerHTML);
    });
}