function menuPage() {
    const menu = document.createElement("div");
    menu.id = "menu-section";
    menu.classList.add("home-section");
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("home-section");
    menuTitle.textContent = "Menu";
}

export {menuPage};