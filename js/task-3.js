const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  const trimValue = inputName.value.trim();

  if (trimValue === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = trimValue;
  }
});