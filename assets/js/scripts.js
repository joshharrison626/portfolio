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

    function closeMenu(event) {
        debugger;
        const menu = document.querySelector('.nav-list-container');
        if (!menu.contains(event.target)) {
            menu.classList.remove('show');
            menu.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', closeMenu);
        }
    }

    function openMenu() {
        debugger;
        const menu = document.querySelector('.nav-list-container');
        menu.classList.toggle('show');
        menu.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
            document.addEventListener('click', closeMenu);
        });
    }

    const menuButton = document.querySelector('.menu-toggle');
    menuButton.addEventListener('click', openMenu);
})();