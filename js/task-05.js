const refs ={
    input: document.querySelector('#name-input'),
    nameLable: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
     refs.nameLable.textContent = event.currentTarget.value || 'Anonymous';
}

