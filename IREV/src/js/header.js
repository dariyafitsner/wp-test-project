document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.header_menu_item[data-dropdown-trigger]');
    let closeTimeout;

    menuItems.forEach(item => {
        const trigger = item.querySelector('.header_menu_item_inner');
        const dropdown = item.querySelector('.nav_dropdown');

        if (!trigger || !dropdown) return;

        trigger.addEventListener('mouseenter', () => {
            clearTimeout(closeTimeout);
            closeAllDropdowns();
            item.classList.add('active');
            dropdown.style.display = 'flex';
        });

        trigger.addEventListener('mouseleave', () => {
            closeTimeout = setTimeout(() => {
                if (!dropdown.matches(':hover')) {
                    closeDropdown(item, dropdown);
                }
            }, 150);
        });

        dropdown.addEventListener('mouseenter', () => clearTimeout(closeTimeout));

        dropdown.addEventListener('mouseleave', () => {
            closeTimeout = setTimeout(() => {
                closeDropdown(item, dropdown);
            }, 150);
        });
    });

    function closeDropdown(item, dropdown) {
        item.classList.remove('active');
        dropdown.style.display = 'none';
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.header_menu_item.active').forEach(activeItem => {
            const dropdown = activeItem.querySelector('.nav_dropdown');
            if (dropdown) dropdown.style.display = 'none';
            activeItem.classList.remove('active');
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAllDropdowns();
    });
});

