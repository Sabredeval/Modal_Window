let open = document.querySelector('.open');
let close = document.querySelector('.close');
let modalContainer = document.querySelector('.modal-container');


open.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});