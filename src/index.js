import {createHeroSection, createAboutSection, createHoursSection, createLocationSection } from "./home.js";

const contentDiv = document.querySelector("#content");

createHeroSection(contentDiv);
createAboutSection(contentDiv);
createHoursSection(contentDiv);
createLocationSection(contentDiv);

console.log("Hello :)");