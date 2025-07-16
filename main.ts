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
  const content = modalTwo.querySelector(".modal-content") as HTMLElement;
  content.offsetHeight; // trigger reflow

  content.classList.add("animate");
};

closeBtnTwo.onclick = () => {
  modalTwo.classList.remove("show");

  const content = modalTwo.querySelector(".modal-content") as HTMLElement;
  if (content) {
    content.classList.remove("animate");
  }
};

// Modal 3 example

const modalThree = document.getElementById("modalThree") as HTMLElement;
const openModalThree = document.getElementById("openModalThree") as HTMLElement;
const okBtn = document.getElementById("okBtn") as HTMLButtonElement;
const cancelBtn = document.getElementById("cancelBtn") as HTMLButtonElement;

openModalThree.onclick = () => {
  modalThree.style.display = "block";
};

okBtn.onclick = () => {
  alert("Du bekräftade!");
  modalThree.style.display = "none";
};

cancelBtn.onclick = () => {
  modalThree.style.display = "none";
};
