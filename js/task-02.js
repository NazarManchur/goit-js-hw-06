const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const menu = document.querySelector("#ingredients")
const itemArr = ingredients.map((ingredient) => {
  const elem = document.createElement("li")
  elem.classList.add("item")
  elem.textContent = ingredient;
  menu.append(elem)
})
