//Modal 1 example

const modal = document.getElementById("modalOne") as HTMLElement;
const opentBtn = document.getElementById("openModalOne") as HTMLElement;
const closeBtn = document.getElementById("closeModalOne") as HTMLElement;

opentBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

//Modal 2 example

const modalTwo = document.getElementById("modalTwo") as HTMLElement;
const openBtnTwo = document.getElementById("openModalTwo") as HTMLElement;
const closeBtnTwo = document.getElementById("closeModalTwo") as HTMLElement;

openBtnTwo.onclick = function () {
    modalTwo.classList.add("show");

    // Forcerar animationen: trigga reflow
    const content = modalTwo.querySelector('.modal-content') as HTMLElement;
    content.offsetHeight; // trigger reflow

    content.classList.add("animate");
};

closeBtnTwo.onclick = () => {
    modalTwo.classList.remove("show");

    const content = modalTwo.querySelector('.modal-content') as HTMLElement;
    if (content) {
        content.classList.remove("animate");
    }
};


console.log("Script loaded")
