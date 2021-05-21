export const shopItemFactory = ({ name, price }) => {
  return `<li>${name} - ${price}</li>`;
};

/**
 * Kreira element u shop meniu
 * @param {name:string, price:number} shopItem Cvijet u kosarici
 */
export function addShopItem(shopItem) {
  const shoppingItemTemplate = shopItemFactory(shopItem);
  const shoppingBasketElement = document.getElementById("shop-menu");

  shoppingBasketElement.append(createElement(shoppingItemTemplate));
}
