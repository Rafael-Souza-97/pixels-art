const tabelaPixels = document.querySelector('#pixel-board');
const color = document.querySelectorAll('.color');
const botao = document.getElementById('clear-board')

function geraDivs() {
  for (let index = 0; index < 25; index += 1) {
    let criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    tabelaPixels.appendChild(criaDiv);
  }
}
geraDivs();

function selectedColor() {
  const colors = document.querySelectorAll('.color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      let searchSelected = document.querySelector('.selected');
      searchSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
selectedColor();

function applyColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      let searchSelected = document.querySelector('.selected');
      let select = getComputedStyle(searchSelected).backgroundColor;
      event.target.style.backgroundColor = select;
    });
  }
}
applyColor();

function resetButton() {
  let pixel = document.querySelectorAll('.pixel');
  botao.addEventListener('click', () => {
    for ( let index = 0 ; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
      }
    }
  )}
resetButton()
