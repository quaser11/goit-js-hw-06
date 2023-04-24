const categories = document.querySelector("#categories")
const categoriesLiArray = [...categories.children]
console.log(`Number of categories: ${categories.length}`)

const categoriesList = categoriesLiArray.forEach(category => {
    const headingName = category.firstElementChild.textContent
    const listItemsLength = category.children.length;
    console.log(`
    Category:${headingName}
    Elements:${listItemsLength}
    `)
});