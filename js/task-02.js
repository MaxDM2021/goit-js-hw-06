const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.querySelector('#ingredients');
console.log (ulList);

const listM = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient;
  newLi.classList.add('item');
  return newLi;
}).join("");

ulList.append(listM)

// [...ingredients].forEach
