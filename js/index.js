import { getFlowers, getFlowerElement } from "./flowers.js";
import { addShopItem } from "./shop.js";

const flowers = await getFlowers();

const listEl = document.querySelector("#list");
flowers.forEach((flower) => listEl.append(getFlowerElement(flower)));

const buttons = document.querySelectorAll("button.flower__button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  console.log(this); // "this" je jednak "event.currentTarget"
  const clickedButton = event.currentTarget; // kliknuti <button> element
  const parentElement = clickedButton.parentElement; // parent element je zapravo <article> element
  const name = parentElement.querySelector("h3.flower__name").innerText; // ili: .textContent
  const price = parentElement.querySelector("b.flower__price").innerText; // ili: .textContent

  // Ili koristiti "parseInt()" ili "Number()" umjesto plusa
  const priceNumber = +price.split("k")[0]; // "20kn" smo razdvojili prema znaku "k" i uzeli sve ispred njega

  addShopItem(name, priceNumber);
}

// Domaći rad:
// Kad se klikne na button, pretražiti listu "flowers" da se nađe cvijet na koji smo kliknuli
// i izvući "name" i "price" iz pronađenog "flower"-a
