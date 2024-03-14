function homePage() {
    const content = document.getElementById("content");

    const mainTitle = document.createElement("div");
    mainTitle.id = "main-title";
    mainTitle.classList.add("home-section");
    mainTitle.textContent = "Some Restaurant";
    content.appendChild(mainTitle);
    content.appendChild(document.createElement("br"));
    
    const mainDescription = document.createElement("div");
    mainDescription.id = "main-description";
    mainDescription.classList.add("home-section");
    const descriptionTitle = document.createElement("div");
    descriptionTitle.classList.add("section-title");
    descriptionTitle.textContent = "Some Restaurant";
    mainDescription.append(descriptionTitle, `is exactly that: just some restaurant. Take a look at our menu to see some of the stuff we serve.
                                            If you're interested, maybe check us out, otherwise, do carry on and have a great day.`);
    content.appendChild(mainDescription);
    content.appendChild(document.createElement("br"));
    
    const mainHours = document.createElement("div");
    mainHours.id = "main-hours";
    mainHours.classList.add("home-section");
    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add("section-title");
    hoursTitle.textContent = "Hours";
    mainHours.appendChild(hoursTitle);
    mainHours.innerHTML += `Sunday: closed<br>
                            Monday: 7am - 8pm<br>
                            Tuesday: 7am - 8pm<br>
                            Wednesday: 7am - 8pm<br>
                            Thursday: 7am - 8pm<br>
                            Friday: 7am - 8pm<br>
                            Saturday: 8am - 8pm`;
    content.appendChild(mainHours);
    content.appendChild(document.createElement("br"));

    const mainLocation = document.createElement("div");
    mainLocation.id = "main-location";
    mainLocation.classList.add("home-section");
    const locationTitle = document.createElement("div");
    locationTitle.classList.add("section-title");
    locationTitle.textContent = "Location";
    mainLocation.append(locationTitle, `123 Some Place Street, Some City, Some State`);
    content.appendChild(mainLocation);
}

export {homePage};