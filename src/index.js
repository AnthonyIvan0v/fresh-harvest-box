(() => {
    const refs = {
        openMenuButton: document.querySelector('[data-menu-mobile-open]'),
        closeMenuButton: document.querySelector('[data-menu-mobile-close]'),
        menuMobile: document.querySelector('[data-menu-mobile]'),
    };

    const links = document.querySelectorAll('.mobile-menu-link');
    links.forEach((element) => {
        element.addEventListener('click', toggleModal)
    });

    refs.openMenuButton.addEventListener('click', toggleModal);
    refs.closeMenuButton.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.menuMobile.classList.toggle('is-open');
        refs.closeMenuButton.classList.toggle('is-show');
    }
})();