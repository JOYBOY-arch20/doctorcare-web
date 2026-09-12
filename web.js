const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menuList");

if (btn && menu) {
    // Toggle menu when clicking the image button
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.classList.toggle('hidden');
    });

    // Close the menu only if the click is completely outside the button and the menu
    window.addEventListener('click', (event) => {
        const isClickInsideButton = btn.contains(event.target);
        const isClickInsideMenu = menu.contains(event.target);

        // If it's not inside the button and not inside the menu, close it
        if (!isClickInsideButton && !isClickInsideMenu) {
            menu.classList.add('hidden');
        }
    });
  }