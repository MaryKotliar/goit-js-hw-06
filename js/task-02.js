const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = ingredients.map((ingredient) => {

  const item = document.createElement("li");
  console.log(item);
  item.textContent = `${ingredient}`;
  console.log(item.textContent);
  item.classList.add('item')
  return item;
}
)
console.log(items);

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);
ingredientsRef.append(...items);
