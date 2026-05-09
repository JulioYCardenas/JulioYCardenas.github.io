const menus = document.querySelectorAll('.menu-know');

menus.forEach(menu => {

    const icono = menu.querySelector('.folder-icon');

    menu.addEventListener('mouseenter', () => {
        icono.classList.remove('fa-folder');
        icono.classList.add('fa-folder-open');
    });

    menu.addEventListener('mouseleave', () => {
        icono.classList.remove('fa-folder-open');
        icono.classList.add('fa-folder');
    });

});
