//Modal 1 example
var modal = document.getElementById("modalOne");
var opentBtn = document.getElementById("openModalOne");
var closeBtn = document.getElementById("closeModalOne");
opentBtn.onclick = function () {
    modal.style.display = "block";
};
closeBtn.onclick = function () {
    modal.style.display = "none";
};
//Modal 2 example
var modalTwo = document.getElementById("modalTwo");
var openBtnTwo = document.getElementById("openModalTwo");
var closeBtnTwo = document.getElementById("closeModalTwo");
openBtnTwo.onclick = function () {
    modalTwo.classList.add("show");
    // Forcerar animationen: trigga reflow
    var content = modalTwo.querySelector(".modal-content");
    content.offsetHeight; // trigger reflow
    content.classList.add("animate");
};
closeBtnTwo.onclick = function () {
    modalTwo.classList.remove("show");
    var content = modalTwo.querySelector(".modal-content");
    if (content) {
        content.classList.remove("animate");
    }
};
// Modal 3 example
var modalThree = document.getElementById("modalThree");
var openModalThree = document.getElementById("openModalThree");
var okBtn = document.getElementById("okBtn");
var cancelBtn = document.getElementById("cancelBtn");
openModalThree.onclick = function () {
    modalThree.style.display = "block";
};
okBtn.onclick = function () {
    alert("Du bekräftade!");
    modalThree.style.display = "none";
};
cancelBtn.onclick = function () {
    modalThree.style.display = "none";
};
