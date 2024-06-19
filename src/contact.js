export function createContactHero(parentElement) {
    const heroSectionDiv = document.createElement("div");
    heroSectionDiv.classList.add("hero-section");

    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Contact Us";

    heroSectionDiv.appendChild(heroTitle);
    parentElement.appendChild(heroSectionDiv);
}

const teamMembers = [
    { name: "Willie Behm", role: "Manager", email: "willie.behm@fakerestaurant.com", tel: "123-456-7890" },
    { name: "John Castaneda", role: "Chef", email: "john.castaneda@fakerestaurant.com", tel: "123-456-7891" },
    { name: "Marco Pool", role: "Waitress", email: "marco.pool@fakerestaurant.com", tel: "123-456-7892" }
];

function createTeamMemberCard(member) {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    const name = document.createElement("h2");
    name.textContent = member.name;

    const role = document.createElement("h3");
    role.textContent = member.role;

    const email = document.createElement("p");
    email.textContent = "Email: " + member.email;

    const tel = document.createElement("p");
    tel.textContent = "Tel: " + member.tel;

    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(email);
    card.appendChild(tel);

    return card;
}

export function createAllTeamMemberCards(parentElement) {
    const teamSection = document.createElement("div");

    teamMembers.forEach(member => {
        const memberCard = createTeamMemberCard(member);
        teamSection.appendChild(memberCard);
    });

    parentElement.appendChild(teamSection);
}