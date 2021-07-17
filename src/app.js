$(document).ready(function () {
    const hamburgerButton = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    function toggleButton() {
        console.log('Clicked Nav list');
        navList.classList.toggle('show');
    }

    hamburgerButton.addEventListener('click', toggleButton);
})


