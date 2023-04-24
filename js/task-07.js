const input = document.getElementById('font-size-control');
const text = document.getElementById('text')

text.style.fontSize = `${input.value}px`;

input.addEventListener('input', sizeOfText)

function sizeOfText(event){
const value = event.currentTarget.value
text.style.fontSize = `${value}px`;
}