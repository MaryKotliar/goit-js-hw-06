const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = [];
for (let ingredient of ingredients){
  const item = document.createElement("li");
  console.log(item);
  item.textContent = ingredient ;
  console.log(item.textContent);
  item.classList.add('item');
  items.push(item);
}
console.log(items);

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);
ingredientsRef.append(...items);
