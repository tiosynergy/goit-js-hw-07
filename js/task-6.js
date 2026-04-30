function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inp = document.querySelector('#controls input');
const crtBtn = document.querySelector('[data-create]');
const dstBtn = document.querySelector('[data-destroy]');
const bxsCnt = document.querySelector('#boxes');

function crtBxs(amnt) {
  bxsCnt.innerHTML = '';

  for (let i = 0; i < amnt; i++) {
    const sz = 30 + i * 10;

    const bx = document.createElement('div');
    bx.style.cssText = `
      width: ${sz}px;
      height: ${sz}px;
      background-color: ${getRandomHexColor()};
      border-radius: 4px;
    `;
    
    bxsCnt.append(bx);
  }
}


function dstBxs() {
  bxsCnt.innerHTML = '';
}


crtBtn.addEventListener('click', () => {
  const amnt = Number(inp.value);
  
  if (amnt >= 1 && amnt <= 100) {
    crtBxs(amnt);
    inp.value = '';
  }
});

dstBtn.addEventListener('click', dstBxs);