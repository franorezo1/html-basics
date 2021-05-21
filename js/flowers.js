export const flowerFactory = flower => {
  return `<article id="${flower.id}" class="flower">
            <h3 class="flower__name">${flower.name}</h3>
            <img class="flower__image" src="${flower.imageUrl}" alt="${flower.name}" width="100" />
            <p class="flower__description">${flower.description}</p>
            <button class="flower__button">Naruči</button>
            <b class="flower__price">${flower.price}kn</b>
          </article>`;
};

/**
 * GET method that returns an array of flowers
 * @returns Returns an array of flowers
 */
export async function getFlowers() {
  // JSON - JavaScript Object Notation
  return fetch("./js/flowers.json")
    .then(response => response.json())
    .catch(error => console.error("Error occured:", error));
}

/**
 * Kreira HTML element, ubaci u njega što treba i vrati ga
 * @param {Object} template String iz kojeg se generira HTML
 * @returns HTML element
 */
export function createElement(template) {
  const templateElement = document.createElement("template");

  // Template strings/literals
  templateElement.innerHTML = template;

  return templateElement.content;
}
