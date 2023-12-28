//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector('button').addEventListener('click', async () => {
//   const MY_COCKTAIL_KEY = '1'
//   const inputVal = document.querySelector("input").value;
//   const COCKTAIL_URL = `https://www.thecocktaildb.com/api/json/v1/${MY_COCKTAIL_KEY}/search.php?s=${inputVal}`

//   try {
//     const cocktailResponse = await fetch(COCKTAIL_URL)
//     if (!cocktailResponse.ok) throw new Error(`HTTP error! status: ${cocktailResponse.status}`)

//     const cocktailImgData = await cocktailResponse.json()

//     document.querySelector('img').src = cocktailImgData.drinks[0].strDrinkThumb
//     document.querySelector('h2').innerText = cocktailImgData.drinks[0].strDrink
//     document.querySelector('h3').innerText = cocktailImgData.drinks[0].strInstructions
//   } catch (error) {
//     console.log('Caught an error!', error.message)
//   }
// })

// Cocktail Carousel
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
