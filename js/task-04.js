let counterValue = 0;
const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const span = document.querySelector("#value");
const counter = document.querySelector("#counter");
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);