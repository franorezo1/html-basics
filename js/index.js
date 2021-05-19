import { getFlowers, getFlowerElement } from "./flowers.js";

const flowers = await getFlowers();

const listEl = document.querySelector("#list");
flowers.forEach((flower) => listEl.append(getFlowerElement(flower)));
