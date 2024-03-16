let arbitraryItemCount = 8;

function menuPage() {
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.id = "menu-section";
    menu.classList.add("home-section");
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("section-title");
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("item-container");
    menu.appendChild(menuContainer);

    for (let i = 0; i < arbitraryItemCount; i++) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("item");
        menuItem.textContent = "Some item on the menu";
        menuContainer.appendChild(menuItem);
    }

    content.appendChild(menu);
}

export {menuPage};