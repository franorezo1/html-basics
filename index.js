let selected;

function selectElement(event) {
  selected = event.target.id;

  console.dir(event);
  console.log(selected);
}

const listElement = document.getElementById("list");
const listItems = listElement.querySelectorAll("article");

for (let i = 0; i < listItems.length; i++) {
  const titleElement = listItems[i].querySelector("h3");

  titleElement.innerHTML = `${titleElement.innerHTML} ${i}`;
}

listElement.addEventListener("click", event => (selected = event.target.id));
