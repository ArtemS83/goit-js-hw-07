const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validedInput);

function validedInput(event) {
  const valueInputLength = event.target.value.length;
  const validLength = Number(inputRef.dataset.length);
  if (valueInputLength !== validLength) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
}
