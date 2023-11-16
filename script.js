"use strict";

const commonModalClass = document.querySelectorAll(".modals");
const overlay = document.querySelector(".overlay");
const showModalBtns = document.querySelectorAll(".show-modal");
const closeModalBtns = document.querySelectorAll(".close-modal");

const modal = (idx) => document.querySelector(`.modal-${idx}`);

let currentModalIndex = -1;

//! Function show modal

const showModal = (idx) => {
  if (modal(idx)) {
    modal(idx).classList.remove("hidden");
    overlay.classList.remove("hidden");
    currentModalIndex = idx - 1;
  }
};

//! Function hide modal
const hideModal = (idx) => {
  if (modal(idx)) {
    modal(idx).classList.add("hidden");
    overlay.classList.add("hidden");
    currentModalIndex = -1;
  }
};

//! CLICK SHOW
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener("click", function () {
    console.log("btn clicked");
    showModal(i + 1);
  });
}

//! BTN CLICK CLOSE

for (let i = 0; i < closeModalBtns.length; i++) {
  closeModalBtns[i].addEventListener("click", function () {
    console.log("close btn clicked");
    hideModal(i + 1);
  });
}

//! OVERLAY CLICK CLOSE

overlay.addEventListener("click", function () {
  console.log("overlay clicked");
  if (currentModalIndex !== -1) {
    hideModal(currentModalIndex + 1);
  }
});

document.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.key);
  for (let i = 0; i < commonModalClass.length; i++) {
    if (
      e.key === "Escape" &&
      !commonModalClass[i].classList.contains("hidden")
    ) {
      commonModalClass[i].classList.add("hidden");
      overlay.classList.add("hidden");
      currentModalIndex = -1;
    }
  }
});
