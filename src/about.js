function aboutPage() {
    const about = document.createElement("div");
    about.id = "about-section";
    about.classList.add("home-section");
    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("home-section");
    aboutTitle.textContent = "About";
}

export {aboutPage};