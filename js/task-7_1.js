// const selectedById = document.querySelector('#categories');
// const quantityСategories1 = selectedById.children.length;
// console.log(`В списке ${quantityСategories1} категории.`);

const selectedByClass = document.querySelectorAll('#categories .item');
const quantityСategories = selectedByClass.length;
console.log(`В списке ${quantityСategories} категории.`);

selectedByClass.forEach(el => {
  const category = el.firstElementChild.textContent;
  const quantityElements = el.lastElementChild.children.length;
  console.log(
    `Категория: ${category}\nКоличество элементов: ${quantityElements}`,
  );
});
