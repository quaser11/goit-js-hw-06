const input = document.getElementById('validation-input')
input.addEventListener('blur', inputValidation)
const dataLength = input.getAttribute('data-length')

function inputValidation(event){
    const valueLength = event.currentTarget.value.trim().length 

    if(Number(dataLength) === valueLength){
    input.classList.remove('invalid')
    input.classList.add('valid')
    }else{
    input.classList.remove('valid')
    input.classList.add('invalid')
    }

  
}




