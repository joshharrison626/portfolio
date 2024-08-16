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
        const menu = document.querySelector('.nav-list-container');
        if (!menu.contains(event.target)) {
            menu.classList.remove('show');
            menu.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', closeMenu);
        }
    }

    function openMenu() {
        const menu = document.querySelector('.nav-list-container');
        menu.classList.toggle('show');
        menu.setAttribute('aria-expanded', 'true');
        menu.querySelectorAll('a').forEach((link) => {
            link.setAttribute('tabindex', '-1');
        });
        menu.querySelector('a').focus();
        menu.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                const nextLink = event.target.parentElement.nextElementSibling.firstElementChild;
                if (nextLink) {
                    nextLink.focus();
                } else {
                    menu.querySelector('a').focus();
                }
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                const prevLink = event.target.parentElement.previousElementSibling.firstElementChild;
                if (prevLink) {
                    prevLink.focus();
                } else {
                    menu.querySelector('a:last-child').focus();
                }
            } else if (['Escape', 'Tab'].includes(event.key)) {
                closeMenu(event);
            }
        });
        setTimeout(() => {
            document.addEventListener('click', closeMenu);
        });
    }

    const menuButton = document.querySelector('.menu-toggle');
    menuButton.addEventListener('click', openMenu);
    menuButton.addEventListener('keydown', (event) => {
        ['Escape', 'Tab'].includes(event.key) && closeMenu(event);
    });
})();