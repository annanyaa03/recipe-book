const API_KEY = "3ca320d537694f9ba68c197ff95e351f";
const recipeListEl = document.getElementById("recipe-list");

function showLoading() {
    recipeListEl.innerHTML = `<p style="text-align: center; width: 100%; grid-column: 1 / -1; font-size: 18px; color: #64748b; padding: 60px;">Fetching fresh recipes...</p>`;
}

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl = document.createElement("img");       // ✅ added const
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        const recipeTitleEl = document.createElement("h2");        // ✅ added const
        recipeTitleEl.innerText = recipe.title;

        const recipeIngredientsEl = document.createElement("p");   // ✅ added const

        // Enhance formatting: Show only first 4 ingredients to fit the card well
        const limit = 4;
        const mainIngredients = recipe.extendedIngredients.slice(0, limit).map(i => i.original).join(", ");
        const extraCount = recipe.extendedIngredients.length > limit ? `<br><br><em>+${recipe.extendedIngredients.length - limit} more ingredients</em>` : "";
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong><br>${mainIngredients}${extraCount}`;

        const recipeLinkEl = document.createElement("a");          // ✅ added const
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);                    // ✅ was missing
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)  // ✅ changed to backticks
    const data = await response.json();
    return data.recipes;
}

async function init() {
    showLoading();
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();