/**
 * Kreira element u shop meniu
 * @param {string} name Naziv cvijeta
 * @param {number} price Cijena cvijeta
 */
export function addShopItem(name, price) {
  document.getElementById("shop-menu").innerHTML = `${name} - ${price}`;
}
