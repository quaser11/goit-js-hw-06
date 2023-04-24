const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.getElementById('ingredients')


const theList = ingredients.map(ingredient => {
  const theLi = document.createElement('li')
  theLi.append(ingredient)
  theLi.classList.add('item')

  return theLi
})

ulList.append(...theList)