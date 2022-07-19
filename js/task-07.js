
const input = document.querySelector('#font-size-control');
const lableEl = document.querySelector('#text');


input.addEventListener('input', onInputChange);

function onInputChange (event) {
    lableEl.style.fontSize = `${event.currentTarget.value}px`
}
