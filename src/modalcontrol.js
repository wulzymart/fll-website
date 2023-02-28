export const openModal = (id) => {
  document.getElementById(`${id}`).classList.remove("hidden");

  document.getElementById(`${id}`).scrollIntoView();
};
export const closeModal = (id) => {
  document.getElementById(`${id}`).classList.add("hidden");
};
