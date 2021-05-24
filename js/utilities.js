import { EMAIL_REGEX } from "./constants.js";

// TODO: Makni ovo iz index.js-a i prebaci u neki drugi file
export const validateEmail = (email) =>
  EMAIL_REGEX.test(String(email).toLowerCase());

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
