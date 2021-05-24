import { flowerFactory, getFlowers } from "./flowers.js";
import { addShopItem } from "./shop.js";
import { createElement, validateEmail } from "./utilities.js";

const flowers = await getFlowers();
const shoppingBasket = [];

const listEl = document.querySelector("#list");
flowers.forEach((flower) => {
  const flowerTemplate = flowerFactory(flower);

  listEl.append(createElement(flowerTemplate));
});

const buttons = document.querySelectorAll("button.flower__button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

document
  .getElementById("toggle-menu")
  .addEventListener("click", handleToggleMenu);

function handleButtonClick(event) {
  const clickedButton = event.currentTarget; // kliknuti <button> element
  const parentElement = clickedButton.parentElement; // parent element je zapravo <article> element

  const shopItem = flowers.find(({ id }) => id == parentElement.id);

  shoppingBasket.push(shopItem);

  addShopItem(shopItem);
}

function handleToggleMenu() {
  document.getElementById("shop-menu").classList.toggle("closed");
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Spriječimo default-no refreshanje stranice i podatke u URL-u

  const formData = new FormData(event.target); // Dohvatimo podatke iz forme preko submit event-a
  const messageData = {
    subject: formData.get("subject"), // Svaki dio forme dohvaćamo s ".get()"
    email: formData.get("email"),
    message: formData.get("message"),
  };
  console.log("messageData:", messageData);

  // Validacija email-a da mora imat određenu strukturu, npr. moj@mail.com

  // ... ovdje dodati validaciju ...

  const isValid = validateEmail(messageData.email);
  console.log("isValid:", isValid);
  if (isValid) {
    // napravi nešto s podacima
  } else {
    // upozori korisnika da nešto ne valja
  }
});
