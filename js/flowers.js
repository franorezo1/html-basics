export const flowers = [
  {
    name: "Lavanda",
    imageUrl: "./images/lavanda.jpeg",
    description: "Lorem ipsum dolor sit amet.",
    price: 20,
  },
  {
    name: "Ruža",
    imageUrl: "./images/ruza.png",
    description: "Lorem ipsum dolor sit amet.",
    price: 20,
  },
  {
    name: "Tulipan",
    imageUrl: "./images/tulipan.png",
    description: "Lorem ipsum dolor sit amet.",
    price: 20,
  },
  {
    name: "Krizantema",
    imageUrl: "./images/krizantema.jpeg",
    description: "Lorem ipsum dolor sit amet.",
    price: 20,
  },
];

// Kreira HTML element, ubaci u njega što treba i vrati ga
export function getFlowerElement(flower) {
  const articleElement = document.createElement("article"); // <article></article>
  articleElement.classList.add("flower"); // <article class="flower"></article>
  articleElement.id = flower.name.toLowerCase(); // <article id="tulipan" class="flower"> ... </article>

  // Template strings/literals
  articleElement.innerHTML = `
    <h3 class="flower__name">${flower.name}</h3>
    <img class="flower__image" src="${flower.imageUrl}" alt="${flower.name}" width="100" />
    <p class="flower__description">${flower.description}</p>
    <b class="flower__price">${flower.price}kn</b>`;

  return articleElement;
}
