const btnMenu = document.querySelector(".btn-menu");
const navActive = document.querySelector("nav ul");

btnMenu.addEventListener('click', function() {
    navActive.classList.toggle('active');
})