const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemArr = ingredients.map((ingredient) => {
  return `<li>${ingredient}</li>`
})
const listElements = `<ul>${itemArr.join('')}</ul>`;
document.body.insertAdjacentHTML("beforeend", listElements)
