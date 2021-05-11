import { flowers, getFlowerElement } from "./flowers.js";

// Generiranje HTML template-a za cvijet
for (let i = 0; i < flowers.length; i++) {
  const flower = flowers[i];
  const flowerElement = getFlowerElement(flower);
  document.querySelector("#list").append(flowerElement);
}
