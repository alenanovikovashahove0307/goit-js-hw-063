const inputText = document.getElementById("validation-input");
inputText.addEventListener('blur', borderColor);
const dataLength = inputText.getAttribute('data-length');
function borderColor(event) {
    const valueLength = event.target.value.trim().length;
    if (Number(dataLength) === valueLength) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }
    else {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
}