import { createHomeHero, createAboutSection, createHoursSection, createLocationSection } from "./home.js";
import { createMenuHero, createAllMenuItemCards } from './menu.js';
import { createContactHero, createAllTeamMemberCards } from "./contact.js";
import "./content-style.css"

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const contactButton = document.querySelector("#contactButton");

// Initially load home tab
// Calling the functions to create the home sections
createHomeHero(contentDiv);
createAboutSection(contentDiv);
createHoursSection(contentDiv);
createLocationSection(contentDiv);

homeButton.addEventListener("click", () => {
    //Scroll to the top of the Tab
    scrollToTop()
    //Removing other elements
    removePageConent(contentDiv);
    // Calling the functions to create the home sections
    createHomeHero(contentDiv);
    createAboutSection(contentDiv);
    createHoursSection(contentDiv);
    createLocationSection(contentDiv);
})

menuButton.addEventListener("click", () => {
    //Scroll to the top of the Tab
    scrollToTop()
    //Removing other elements
    removePageConent(contentDiv);
    // Calling the functions to create the menu sections
    createMenuHero(contentDiv);
    createAllMenuItemCards(contentDiv);
})

contactButton.addEventListener("click", () => {
    //Scroll to the top of the Tab
    scrollToTop()
    //Removing other elements
    removePageConent(contentDiv);
    // Calling the functions to create the contact sections
    createContactHero(contentDiv);
    createAllTeamMemberCards(contentDiv);
})

function scrollToTop() {
    window.scrollTo({
        top: 0
    });
}

function removePageConent(parentDiv) {
    parentDiv.textContent = "";
}