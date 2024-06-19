export function createMenuItem(name, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h2");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("price");
    itemPrice.textContent = "Price: " + price + "€";

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    return menuItem;
}

export function createMenuSection(parentElement, sectionTitle, items) {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add(sectionTitle.toLowerCase().replace(/\s/g, '-'));

    const sectionTitleElement = document.createElement("h2");
    sectionTitleElement.textContent = sectionTitle;

    sectionDiv.appendChild(sectionTitleElement);

    items.forEach(item => {
        const menuItem = createMenuItem(item.name, item.description, item.price);
        sectionDiv.appendChild(menuItem);
    });

    parentElement.appendChild(sectionDiv);
}
