const btnMenu = document.getElementById('menu'); //

function toggleMenu(){
const nav = document.getElementById('nav'); //
nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu);