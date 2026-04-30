function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const chngClrBtn = document.querySelector('.change-color');
const clrSpn = document.querySelector('.color');
const body = document.body;

chngClrBtn.addEventListener('click', () => {
  const rndmClr = getRandomHexColor();

  body.style.backgroundColor = rndmClr;
  clrSpn.textContent = rndmClr;
});