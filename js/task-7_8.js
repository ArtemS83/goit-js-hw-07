const ref = {
  inputAmount: document.querySelector('#controls input'),
  buttonRender: document.querySelector('button[data-action="render"]'),
  buttonDestroy: document.querySelector('button[data-action="destroy"]'),
  boxesRendered: document.querySelector('#boxes'),
};
//==============variables=============//
let amountOnDiv;
let amountDeleteDiv = 0;
let classNumber = 0;
let styleWidth = 20;
let styleHeight = 20;
let fontSize = 8;

//==============events=============//

ref.inputAmount.addEventListener('input', e => {
  amountOnDiv = Number(e.target.value);
});

ref.buttonRender.addEventListener('click', e => {
  createBoxes(amountOnDiv);
});

ref.buttonDestroy.addEventListener('click', e => {
  destroyBoxes(amountDeleteDiv);
});

//==============function=============//

function createBoxes(amount) {
  ref.boxesRendered.insertAdjacentHTML('beforeend', getDivMarkup(amount));
  amountDeleteDiv += amountOnDiv;
}

function getDivMarkup(item) {
  const arrItemsDiv = new Array(item);

  for (let i = 0; i < item; i += 1) {
    const colorDiv = randColor();
    classNumber += 1;
    styleWidth += 10;
    styleHeight += 10;
    fontSize += 1;
    arrItemsDiv[i] = `<div class='div-${classNumber}' 
    style='width: ${styleWidth}px; height: ${styleHeight}px; 
    background-color: ${colorDiv}; ;font-size: ${fontSize}px'>${styleWidth} x ${styleHeight}</div>`;
  }
  return arrItemsDiv.join('');
}

function destroyBoxes(amount) {
  //   for (let i = 0; i < amount; i += 1) {
  //     ref.boxesRendered.lastChild.remove();
  //   }
  ref.boxesRendered.innerHTML = '';
  ref.inputAmount.value = '';
  amountOnDiv = 0;
  amountDeleteDiv = 0;
  classNumber = 0;
  styleHeight = 20;
  styleWidth = 20;
  fontSize = 8;
}

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
