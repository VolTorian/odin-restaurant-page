function aboutPage() {
    const content = document.getElementById("content");

    const about = document.createElement("div");
    about.id = "about-section";
    about.classList.add("home-section");
    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("section-title");
    aboutTitle.textContent = "About";
    about.appendChild(aboutTitle);

    const aboutContent = document.createElement("div");
    aboutContent.innerHTML = `Founded in the year 20XX, we had a humble start of serving some food.
                                As time went by, we were able to grow our business and increase our selecttion
                                of available choices, such as more food.
                                <br><br>
                                Contact us at <em>(123)456-7890</em> or <em>somerestaurant@something.com</em>`;
    about.appendChild(aboutContent);

    content.appendChild(about);
}

export {aboutPage};