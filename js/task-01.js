// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoryEl = document.querySelectorAll(".item");
const numberCategoryEl = categoryEl.length;
console.log("Number of categories: ", numberCategoryEl);

[...categoryEl].forEach(function (el) {
  const numberOfElements = el.querySelectorAll("li").length;
  const nameOfElemets = el.querySelector("h2").textContent;
  console.log("Category: ", `${nameOfElemets}`);
  console.log("Elements: ", `${numberOfElements}`);
});
