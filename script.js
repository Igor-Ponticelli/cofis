const btnMenu = document.getElementById('btn-mobile'); //

function toggleMenu(){
const nav = document.getElementById('nav'); //
nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);