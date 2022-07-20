function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputLn = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]'); 
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesLn = document.querySelector('#boxes'); 


createBtn.addEventListener('click', () => createBoxes(inputLn.value));
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1){
   let newBox = document.createElement('div');
   newBox.classList.add('boxstile')
   newBox.style.width = `${30 + ( i - 1 ) * 10}px`;
   newBox.style.margin = `${5}px`;
   newBox.style.height = `${30 + ( i - 1 ) * 10}px`;
   const changeColor = getRandomHexColor(); 
   newBox.style.backgroundColor = changeColor;
   boxesLn.appendChild(newBox); 
  }
}

function destroyBoxes() {
  boxesLn.innerHTML = '';
}