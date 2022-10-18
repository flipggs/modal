const buttonOpenModal = document.querySelector("#openModal");
const modal = document.querySelector("dialog");
const buttonCloseModal = document.querySelector("#closeModal");

buttonOpenModal.onclick = function () {
  modal.showModal();
};

buttonCloseModal.onclick = function () {
  modal.close();
};

// clique fora da modal
modal.addEventListener("click", (event) => {
  let rect = event.target.getBoundingClientRect();

  if (
    rect.left > event.clientX ||
    rect.right < event.clientX ||
    rect.top > event.clientY ||
    rect.bottom < event.clientY
  ) {
    modal.close();
  }
});
