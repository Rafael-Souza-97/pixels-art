window.onload;
const tabelaPixels = document.querySelector('#pixel-board')

function geraDivs () {
  for ( let index = 0; index < 25 ; index += 1 ){ 
  let criaDiv = document.createElement('div');
  criaDiv.className = "pixel";
  tabelaPixels.appendChild(criaDiv);
}
}
geraDivs ();