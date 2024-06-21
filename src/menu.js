import menuIcon from "./menu.svg";

export function createMenuHero(parentElement) {
    const heroSectionDiv = document.createElement("div");
    heroSectionDiv.classList.add("hero-section");

    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Our Menu";

    const heroImage = document.createElement("img");
    heroImage.src = menuIcon;
    heroImage.alt = "Menu Icon";
    heroImage.style.height = "250px";

    heroSectionDiv.appendChild(heroTitle);
    heroSectionDiv.appendChild(heroImage);
    parentElement.appendChild(heroSectionDiv);
}

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

function createMenuItemCard(item) {
    const card = document.createElement("div");

    const name = document.createElement("h2");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.textContent = item.price + "€";

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);
    card.classList.add("card");

    return card;
}

export function createAllMenuItemCards(parentElement) {
    const beveragesSection = document.createElement("div");
    const sidesSection = document.createElement("div");
    const mainDishesSection = document.createElement("div");

    beverages.forEach(item => {
        const itemCard = createMenuItemCard(item);
        beveragesSection.appendChild(itemCard);
    });

    sides.forEach(item => {
        const itemCard = createMenuItemCard(item);
        sidesSection.appendChild(itemCard);
    });

    mainDishes.forEach(item => {
        const itemCard = createMenuItemCard(item);
        mainDishesSection.appendChild(itemCard);
    });

    parentElement.appendChild(beveragesSection);
    parentElement.appendChild(sidesSection);
    parentElement.appendChild(mainDishesSection);
}