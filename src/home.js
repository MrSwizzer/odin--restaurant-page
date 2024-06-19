import doenerImage from './doener.jpg';

function createHeroSection(parentElement) {
    const heroSectionDiv = document.createElement("div");
    heroSectionDiv.classList.add("hero-section");

    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Döner King";

    const heroParagraph = document.createElement("p");
    heroParagraph.textContent = "The best Kebab in the district.";

    const heroImage = document.createElement("img");
    heroImage.src = doenerImage;
    heroImage.alt = "Picture of a Döner";

    heroSectionDiv.appendChild(heroTitle);
    heroSectionDiv.appendChild(heroParagraph);
    heroSectionDiv.appendChild(heroImage);

    parentElement.appendChild(heroSectionDiv);
}

function createAboutSection(parentElement) {
    const aboutSectionDiv = document.createElement("div");
    aboutSectionDiv.classList.add("about-section");

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About";

    const aboutParagraph = document.createElement("p");
    aboutParagraph.innerHTML = "Döner King has the best kebab in all of Wisconsin. <br> We also make many other great dishes such as Pizzas and Salads. <br> With all our fresh and unique ingredients we deliver the best taste to our customers.";

    aboutSectionDiv.appendChild(aboutTitle);
    aboutSectionDiv.appendChild(aboutParagraph);

    parentElement.appendChild(aboutSectionDiv);
}


function createHoursSection(parentElement) {
    const hoursSectionDiv = document.createElement("div");
    hoursSectionDiv.classList.add("hours-section");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";

    const hoursParagraph = document.createElement("p");
    hoursParagraph.textContent = "Monday - Friday: 6am - 6pm, Saturday: 8am - 10pm, Sunday: closed";

    hoursSectionDiv.appendChild(hoursTitle);
    hoursSectionDiv.appendChild(hoursParagraph);

    parentElement.appendChild(hoursSectionDiv);
}

function createLocationSection(parentElement) {
    const locationSectionDiv = document.createElement("div");
    locationSectionDiv.classList.add("location-section");

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = "37643 Montana Stream, Howellmouth, Wisconsin";

    locationSectionDiv.appendChild(locationTitle);
    locationSectionDiv.appendChild(locationParagraph);

    parentElement.appendChild(locationSectionDiv);
}

export {createHeroSection, createAboutSection, createHoursSection, createLocationSection};