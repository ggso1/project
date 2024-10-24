const modal = document.querySelector('.backdrop');
const madalBtnOpen = document.querySelector('.modal-btn-open');
const madalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

madalBtnOpen.addEventListener('click', toggleModal);
madalBtnClose.addEventListener('click', toggleModal)

