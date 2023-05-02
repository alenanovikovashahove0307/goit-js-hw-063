const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// for (const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item");
//   const ulIngredients = document.querySelector("#ingredients");
//   ulIngredients.appendChild(liEl);
// }
const ulIngredients = document.querySelector("#ingredients");
const imgEl = images
  .map((image) => `<li><img src=${image.url} alt=${image.alt}></img></li>`)
  .join("");

list.insertAdjacentHTML("beforeend", imgEl);