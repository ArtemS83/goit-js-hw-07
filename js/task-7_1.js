// const selectedById = document.querySelector('#categories');
// const quantityСategories1 = selectedById.children.length;
// console.log(`В списке ${quantityСategories1} категории.`);

const selectedByClass = document.querySelectorAll('#categories .item');
const quantityСategories2 = selectedByClass.length;
console.log(`В списке ${quantityСategories2} категории.`);

selectedByClass.forEach(el =>
  console.log(
    `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`,
  ),
);
