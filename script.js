"use strict";

const commonModalClass = document.querySelectorAll(".modals");
const overlay = document.querySelector(".overlay");
const showModalBtns = document.querySelectorAll(".show-modal");
const closeModalBtns = document.querySelectorAll(".close-modal");

const modal = (idx) => document.querySelector(`.modal-${idx}`);

let currentModalIndex = -1;

//! Function toogle modal

const toggleModal = (idx) => {
  if (modal(idx)) {
    modal(idx).classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    currentModalIndex = idx - 1;
  }
};

//! CLICK SHOW
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener("click", function () {
    console.log("btn clicked");
    toggleModal(i + 1);
  });
}

//! BTN CLICK CLOSE

for (let i = 0; i < closeModalBtns.length; i++) {
  closeModalBtns[i].addEventListener("click", function () {
    console.log("close btn clicked");
    toggleModal(i + 1);
  });
}

//! OVERLAY CLICK CLOSE

overlay.addEventListener("click", function () {
  console.log("overlay clicked");
  if (currentModalIndex !== -1) {
    toggleModal(currentModalIndex + 1);
  }
});

//! ESC CLICK CLOSE

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
