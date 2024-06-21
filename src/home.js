import donerIcon from "./doner-kebab.png";

export function createHomeHero(parentElement) {
    const heroSectionDiv = document.createElement("div");
    heroSectionDiv.classList.add("hero-section");

    const leftSideWrapper = document.createElement("div");
    leftSideWrapper.classList.add("left-side-wrapper");

    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Döner King";

    const heroParagraph = document.createElement("p");
    heroParagraph.textContent = "The best Kebab in the district.";

    leftSideWrapper.appendChild(heroTitle);
    leftSideWrapper.appendChild(heroParagraph);

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("image-wrapper");

    const heroImage = document.createElement("img");
    heroImage.src = donerIcon;
    heroImage.alt = "Launch Icon";
    heroImage.style.height = "250px";
    imgWrapper.appendChild(heroImage);

    heroSectionDiv.appendChild(leftSideWrapper);
    heroSectionDiv.appendChild(imgWrapper);

    parentElement.appendChild(heroSectionDiv);
}


export function createAboutSection(parentElement) {
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


export function createHoursSection(parentElement) {
    const hoursSectionDiv = document.createElement("div");
    hoursSectionDiv.classList.add("hours-section");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";

    const hoursParagraph = document.createElement("ul");
    const hoursMondayToFriday = document.createElement("li");
    const hoursSaturday = document.createElement("li");
    const hoursSunday = document.createElement("li");

    hoursMondayToFriday.textContent = "Monday - Friday: 6am - 6pm";
    hoursSaturday.textContent = "Saturday: 8am - 10pm";
    hoursSunday.textContent = "Sunday: closed";

    hoursParagraph.appendChild(hoursMondayToFriday);
    hoursParagraph.appendChild(hoursSaturday);
    hoursParagraph.appendChild(hoursSunday);

    hoursSectionDiv.appendChild(hoursTitle);
    hoursSectionDiv.appendChild(hoursParagraph);

    parentElement.appendChild(hoursSectionDiv);
}

export function createLocationSection(parentElement) {
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

