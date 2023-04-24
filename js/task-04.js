const refs = {
    counterValue: document.getElementById('value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
}

let counterValue = 0
refs.decrement.addEventListener("click", minus);
refs.increment.addEventListener("click", plus);

function minus(){
    counterValue -= 1
    refs.counterValue.textContent = counterValue;
}

function plus(){
    counterValue += 1;
    refs.counterValue.textContent = counterValue;
}