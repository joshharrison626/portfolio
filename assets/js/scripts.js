(function() {
    'use strict';

    const navListLinks = document.querySelectorAll('.nav-item > a');
    const windowHref = window.location.href;
    navListLinks.forEach(link => {
        if (link.href === windowHref) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    function toggleMenu() {
        const menu = document.querySelector('.nav-list-container');
        menu.classList.toggle('show');
        const expanded = menu.getAttribute('aria-expanded');
        menu.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
    }
    const menuButton = document.querySelector('.menu-toggle');
    menuButton.addEventListener('click', toggleMenu);
})();