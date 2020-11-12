const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', changedText);

function changedText(e) {
  const valueInput = e.target.value;
  textRef.style.fontSize = valueInput + 'px';
}
