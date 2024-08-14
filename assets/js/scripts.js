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
})();