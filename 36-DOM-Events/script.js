"use strict";
const query = (ID) => document.querySelector(ID);
const modal = query(".modal");
const overlay = query(".overlay");
const btnCloseModal = query(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", showModal);
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
