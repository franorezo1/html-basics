import { getFlowers, createElement, flowerFactory } from "./flowers.js";
import { addShopItem } from "./shop.js";

const flowers = await getFlowers();
const shoppingBasket = [];

const listEl = document.querySelector("#list");
flowers.forEach(flower => {
  const flowerTemplate = flowerFactory(flower);

  listEl.append(createElement(flowerTemplate));
});

const buttons = document.querySelectorAll("button.flower__button");
buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

document.getElementById("toggle-menu").addEventListener("click", handleToggleMenu);

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
