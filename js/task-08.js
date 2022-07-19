
const form = document.querySelector(".login-form");


form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();
const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;

const formData = { 
    email: email,
    password: password,
}
console.log(formData)
form.reset();


if(email === '' || password === '') {
    alert('Пустые поля')
    form.reset();
    return;
}
}



