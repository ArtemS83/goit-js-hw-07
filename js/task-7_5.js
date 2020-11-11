const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', enterName);

function enterName(e) {
  const inputName = e.target.value.trim();
  spanRef.textContent = inputName;
  if (inputName === '') {
    spanRef.textContent = 'незнакомец';
  }
}
