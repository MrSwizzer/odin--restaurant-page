function createHeroSection(parentElement) {
    const heroSectionDiv = document.createElement("div");
    heroSectionDiv.classList.add("hero-section");

    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Menu";

    heroSectionDiv.appendChild(heroTitle);

    parentElement.appendChild(heroSectionDiv);
}

function createBeveragesSection(parentElement) {
    const beveragesDiv = document.createElement("div");
    beveragesDiv.classList.add("beverages-section");

    const ayranDiv = document.createElement("div");

    const ayranTitle = document.createElement("h2");
    ayranTitle.textContent = "Ayran"

    const ayranParagraph = document.createElement("p");
}