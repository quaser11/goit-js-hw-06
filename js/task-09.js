function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
const textToChange = document.querySelector('.color')
const colorBtn = document.querySelector('.change-color')

colorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  textToChange.textContent = randomColor;
  body.style.backgroundColor = textToChange.textContent
})
