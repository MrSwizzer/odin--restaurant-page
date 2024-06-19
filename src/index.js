import { createHomeHero, createAboutSection, createHoursSection, createLocationSection } from "./home.js";
import { createMenuHero, createAllMenuItemCards } from './menu.js';
import { createContactHero, createAllTeamMemberCards } from "./contact.js";

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
    //Removing other elements
    removePageConent(contentDiv);
    // Calling the functions to create the home sections
    createHomeHero(contentDiv);
    createAboutSection(contentDiv);
    createHoursSection(contentDiv);
    createLocationSection(contentDiv);
})

menuButton.addEventListener("click", () => {
    //Removing other elements
    removePageConent(contentDiv);
    // Calling the functions to create the menu sections
    createMenuHero(contentDiv);
    createAllMenuItemCards(contentDiv);
})

contactButton.addEventListener("click", () => {
    //Removing other elements
    removePageConent(contentDiv);
    createContactHero(contentDiv);
    createAllTeamMemberCards(contentDiv);
})

function removePageConent(parentDiv) {
    parentDiv.textContent = "";
}

// Example data for menu items
const beverages = [
    { name: "Ayran", description: "A traditional Turkish yogurt-based drink, refreshing and slightly salty.", price: 3 },
    { name: "Fanta Exotic", description: "A tropical flavored carbonated soft drink made with a blend of fruit juices like pineapple, passion fruit, and mango.", price: 3 }
];

const sides = [
    { name: "Fries", description: "Crispy and golden potato fries, perfect as a side dish or snack.", price: 4 },
    { name: "Small Salad", description: "A fresh mix of lettuce, tomatoes, cucumbers, and dressing, a light and healthy option.", price: 4 }
];

const mainDishes = [
    { name: "Kebap", description: "Grilled or roasted meat dish, typically served with vegetables, rice, or bread, a staple of Middle Eastern cuisine.", price: 6 },
    { name: "Yufka", description: "Just like kebap but with a thin, round flatbread used in Turkish cuisine for wraps and dishes.", price: 6 },
    { name: "Pizza", description: "Delicious Italian dish with a thin crust topped with tomato sauce, cheese, and various toppings.", price: 8 }
];

console.log("Hello :D");