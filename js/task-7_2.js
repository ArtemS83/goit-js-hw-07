const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
/*========Вариант создания "в ручную" при помощи document.createElement()=========*/

// const ingredientsRef = document.querySelector('#ingredients');
// const li1 = document.createElement('li');
// li1.textContent = ingredients[0];
// const li2 = document.createElement('li');
// li2.textContent = ingredients[1];
// const li3 = document.createElement('li');
// li3.textContent = ingredients[2];
// const li4 = document.createElement('li');
// li4.textContent = ingredients[3];
// const li5 = document.createElement('li');
// li5.textContent = ingredients[4];
// const li6 = document.createElement('li');
// li6.textContent = ingredients[5];
// ingredientsRef.append(li1, li2, li3, li4, li5, li6);

/*========Вариант создания через цикл for при помощи document.createElement()=========*/

// const ingredientsRef = document.querySelector('#ingredients');
// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredients[i];
//   elements.push(liEl);
// }

// ingredientsRef.append(...elements);

/*========Вариант создания через .map при помощи document.createElement()========*/

const ingredientsRef = document.querySelector('#ingredients');
const createElement = el => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = el;
  return ingredientElement;
};
const elements = ingredients.map(createElement);
ingredientsRef.append(...elements);
