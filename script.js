const color = document.querySelectorAll('.color');
const botao = document.getElementById('clear-board');
const vqv = document.getElementById('generate-board');
const inputBtn = document.getElementById('board-size');

function selectedColor() {
  const colors = document.querySelectorAll('.color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      const searchSelected = document.querySelector('.selected');
      searchSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
selectedColor();

function applyColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('mousedown', (event) => {
      const searchSelected = document.querySelector('.selected');
      const select = getComputedStyle(searchSelected).backgroundColor;
      const eventTarget = event.target;
      eventTarget.style.backgroundColor = select;
    });
  }
}
applyColor();

function resetButton() {
  const pixel = document.querySelectorAll('.pixel');
  botao.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
resetButton();

function geraDivs(size) {
  const sizeCollum = size;
  for (let index = 0; index < sizeCollum; index += 1) {
    const tabela = document.getElementById('pixel-board');
    const linha = document.createElement('div');
    tabela.className = 'linha';
    tabela.appendChild(linha);
    for (let i = 0; i < sizeCollum; i += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixel';
      tabela.appendChild(pixelLine);
    }
  }
  applyColor();
  resetButton();
}
geraDivs(5);

const removePixels = document.querySelector('.linha');

vqv.addEventListener('click', () => {
  removePixels.innerHTML = '';
  if (inputBtn.value === '') {
    window.alert('Board inválido!');
    geraDivs(5);
  } else if (inputBtn.value > 50) {
    geraDivs(50);
  } else if (inputBtn.value < 5) {
    geraDivs(5);
  } else {
    geraDivs(inputBtn.value);
  }
});

// Mentoria Débora:

function randomColors() {
  for (let index = 1; index < color.length; index += 1) {
    const red = parseInt(Math.random() * 255, 10);
    const green = parseInt(Math.random() * 255, 10);
    const blue = parseInt(Math.random() * 255, 10);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    color[index].style.backgroundColor = rgb;
  }
}
window.onload = randomColors;
