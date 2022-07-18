const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsMarker = ingredientsArray => {
  return ingredientsArray.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = ingredient;
return  liEl;
  });
};

const elements = ingredientsMarker(ingredients);
const ingredientsContainer = document.querySelector('#ingredients');
ingredientsContainer.append(...elements);

console.log(ingredientsContainer);