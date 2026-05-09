const menus = document.querySelectorAll('.menu-know');

menus.forEach(menu => {

    const folderIcon = menu.querySelector('.folder-icon');
    const caretIcon = menu.querySelector('.caret');
    caretIcon.style.color = 'rgb(177, 177, 177)';
    folderIcon.style.color = 'rgb(0, 217, 255)';
    menu.addEventListener('mouseenter', () => {

        /* Folder */

        folderIcon.classList.remove('fa-folder');
        folderIcon.classList.add('fa-folder-open');

        /* Caret */

        caretIcon.classList.remove('fa-caret-right');
        caretIcon.classList.add('fa-caret-down');

    });

    menu.addEventListener('mouseleave', () => {

        /* Folder */

        folderIcon.classList.remove('fa-folder-open');
        folderIcon.classList.add('fa-folder');

        /* Caret */

        caretIcon.classList.remove('fa-caret-down');
        caretIcon.classList.add('fa-caret-right');

        
    });

});
