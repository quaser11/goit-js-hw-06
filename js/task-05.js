const inputName = document.getElementById('name-input');
const resultName = document.getElementById('name-output');

inputName.addEventListener("input", (event) => { 
    const inputValue = event.currentTarget.value.trim();
    resultName.textContent = inputValue ? inputValue : "Anonymous";
})
