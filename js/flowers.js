export const flowerFactory = (flower) => {
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
  return fetch("http://localhost:61859/api/flowers") // Upisati ispravan URL na kojem se "vrti" backend
    .then((response) => response.json())
    .catch((error) => console.error("Error occured:", error));
}
