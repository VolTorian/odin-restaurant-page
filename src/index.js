import './styles.css';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

const content = document.getElementById("content");
const tabs = document.querySelectorAll("#nav-bar button");
const tabNames = ["Home", "Menu", "About"];
tabs.forEach((tabButton, index) => {
    tabButton.addEventListener("click", (e) => {
        loadTab(e, tabNames[index]);
    })
});

function loadTab(e, tabName) {
    content.innerHTML = "";
    tabs.forEach((tabButton) => {tabButton.classList.remove("active")});
    e.target.classList.add("active");

    if (tabName === "Home") {
        homePage();
    }
    else if (tabName === "Menu") {
        menuPage();
    }
    else if (tabName === "About") {
        aboutPage();
    }
    else {
        console.log("O.o what error loading what page?");
    }
}

homePage();