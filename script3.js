const BODY = document.querySelector("body");

// Récupération des données via appel à une API
async function fetchRecipes() {
  const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://dummyjson.com/recipes")}`);
  const jsonRecipes = await response.json();
  const data = JSON.parse(jsonRecipes.contents);
  let recipes = data.recipes;

  // Création et injection dynamique dans le HTML des données récupérées
  for ( let i = 0; i < recipes.length; i ++){
    BODY.innerHTML += `<h2> ${recipes[i].name}</h2>`;
    const newRecipe = document.createElement('div');
    BODY.appendChild(newRecipe);
    newRecipe.innerHTML += `<img src=${recipes[i].image}>` ;
    
    const listOfIngredients = recipes[i].ingredients;
    const titleListOfIngredients = document.createElement('h3');
    const displayedListIng = document.createElement('ul');
    titleListOfIngredients.innerHTML = " Ingredients :";
    displayedListIng.appendChild(titleListOfIngredients);
    for (ingredient of listOfIngredients){
      displayedListIng.innerHTML += `<li> ${ingredient}</li>`;
    }
    newRecipe.appendChild(displayedListIng);

    const listOfInstructions = recipes[i].instructions;
    const displayedListInstr = document.createElement('ol');
    const titleListOfInstructions = document.createElement('h3');
    titleListOfInstructions.innerHTML = " Instructions :";
    displayedListInstr.appendChild(titleListOfInstructions);
    newRecipe.appendChild(displayedListInstr);
      for (instruction of listOfInstructions){
        displayedListInstr.innerHTML += `<li> ${instruction}</li>`;
      }
  }

}

fetchRecipes();