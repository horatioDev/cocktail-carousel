//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// Cocktail Carousel
// Add an event listener to call getCocktails when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  getCocktails();
});

document.querySelector('button').addEventListener('click', getCocktails);

function getCocktails() {
  let cocktail = document.querySelector('input').value;
  
  fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail)
    .then(res => res.json())
    .then(data => {
      const cocktails = data.drinks;
      displayCocktails(cocktails)
      console.log(cocktails)
    })
    .catch(err => console.log(err))

  
};

// Display cocktails
function displayCocktails(arr) {
  const carouselSlide = document.querySelector('.carousel-slide');
  arr.forEach(drink => {
    // Each drink 
    const cocktailItem = document.createElement('div')
    cocktailItem.className = 'carousel-item';
    // Name of drink
    const cocktailName = document.createElement('h2')
    cocktailName.textContent = drink.strDrink;
    // Image of Drink
    const cocktailImg = document.createElement('img');
    cocktailImg.alt =  drink.strDrink;
    cocktailImg.src =  drink.strDrinkThumb;

    // Instruction of drink
    const cocktailInstructions = document.createElement('h3');
    cocktailInstructions.textContent = drink.strInstructions;
    
    // Add item
    cocktailItem.appendChild(cocktailName);
    cocktailItem.appendChild(cocktailImg);
    cocktailItem.appendChild(cocktailInstructions);

    // Add item to carousel
    carouselSlide.appendChild(cocktailItem);
      
    console.log(drink, cocktailItem, cocktailName, cocktailImg)
  })
  document.querySelector('input').value = '';
}
