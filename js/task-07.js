const inputEl = document.getElementById("font-size-control");
const span = document.getElementById("text");
inputEl.addEventListener("input", onInput);
function onInput(event) {
   span.style.fontSize = event.currentTarget.value + "px";
};

input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}