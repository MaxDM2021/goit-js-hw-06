let refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueLn: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener("click", onMouseEnter);
refs.incrementBtn.addEventListener("click", onMouseLeave);

let counterValue = 0;

function onMouseEnter() {
  counterValue -= 1;
  refs.valueLn.textContent = counterValue;
}

function onMouseLeave() {
  counterValue += 1;
  refs.valueLn.textContent = counterValue;
}
