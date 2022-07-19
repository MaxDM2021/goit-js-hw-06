

const input = document.querySelector('#validation-input');
const validLength = parseInt(input.getAttribute("data-length"))



input.addEventListener('blur', onInputBlur);

function onInputBlur(event){
event.currentTarget.value.length === validLength ? 
event.currentTarget.classList.add('valid') && 
event.currentTarget.classList.remove('invalid'): 
event.currentTarget.classList.add('invalid') && 
event.currentTarget.classList.remove('valid')
 }
