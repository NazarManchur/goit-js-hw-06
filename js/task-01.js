const elementList = document.querySelector("ul#categories");
console.log(`Number of categories ${elementList.children.length}`);

[...elementList.children].forEach((elem) => {
  console.log(`Categories: ${elem.firstElementChild.textContent}`)
  console.log(`Elements: ${elem.lastElementChild.children.length}`)
})
