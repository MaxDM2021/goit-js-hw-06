
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body')
const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color')


buttonEl.addEventListener('click', onChangeColor);


function onChangeColor() {
  const changeColor = getRandomHexColor(); 
body.style.backgroundColor = changeColor;
colorEl.textContent = `${body.style.backgroundColor}`;
}







