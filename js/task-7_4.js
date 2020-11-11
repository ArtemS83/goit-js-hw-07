let counterValue = 0;

const ref = {
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  valueHtml: document.querySelector('#value'),
};

ref.buttonDecrement.addEventListener('click', decrementFn);
ref.buttonIncrement.addEventListener('click', incrementFn);

function decrementFn() {
  counterValue -= 1;
  render();
}
function incrementFn() {
  counterValue += 1;
  render();
}
function render() {
  ref.valueHtml.textContent = counterValue;
}
