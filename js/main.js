//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

<<<<<<< HEAD
// Cocktail Carousel
// Add an event listener to call getCocktails when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    getCocktails();
  });

  getCocktailsOnLoad();
});

function getCocktailsOnLoad() {
  const input = document.querySelector('input');
  const cocktail = input.value.trim();

  if (cocktail === '') {
    getCocktails();
  } else {
    // If the button is clicked later, this will set the value for fetching
    input.value = cocktail;
  }
};

// Cocktail Carousel
// Add an event listener to call getCocktails when the DOM is fully loaded

function getCocktails() {
  let cocktail = document.querySelector('input').value.trim();

  if (hasWhiteSpace(cocktail)) {
    cocktail = cocktail.split(' ').join('%20');
  }

  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json())
    .then(data => {
      const cocktails = data.drinks;
      displayCocktails(cocktails);
    })
    .catch(err => console.log(err));
};

function displayCocktails(arr) {
  const carouselSlide = document.querySelector('.carousel-slide');
  // Clear previous items
  carouselSlide.innerHTML = '';

  arr.forEach(drink => {
    const cocktailItem = document.createElement('div');
    cocktailItem.className = 'carousel-item';

    const cocktailName = document.createElement('h2');
    cocktailName.textContent = drink.strDrink;

    const cocktailImg = document.createElement('img');
    cocktailImg.alt = drink.strDrink;
    cocktailImg.src = drink.strDrinkThumb;

    const cocktailInstructions = document.createElement('h3');
    cocktailInstructions.textContent = drink.strInstructions;

    cocktailItem.appendChild(cocktailName);
    cocktailItem.appendChild(cocktailImg);
    cocktailItem.appendChild(cocktailInstructions);

    carouselSlide.appendChild(cocktailItem);
  });

  document.querySelector('input').value = '';
};

function hasWhiteSpace(str) {
  return /\s/g.test(str);
};
