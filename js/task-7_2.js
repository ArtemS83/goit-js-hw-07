const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
const createElement = el => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = el;
  return ingredientElement;
};
const elements = ingredients.map(createElement);
ingredientsRef.append(...elements);
