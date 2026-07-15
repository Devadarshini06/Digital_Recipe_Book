// Selecting DOM Elements
const recipeForm = document.getElementById('recipe-form');
const titleInput = document.getElementById('recipe-title');
const imageInput = document.getElementById('recipe-image');
const ingredientsInput = document.getElementById('recipe-ingredients');
const instructionsInput = document.getElementById('recipe-instructions');
const recipesContainer = document.getElementById('recipes-container');

// Default backup image if the user doesn't provide one
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=600";

// Load existing recipes from LocalStorage, or start with an empty array
let recipes = JSON.parse(localStorage.getItem('myRecipes')) || [];

// --- Event Listeners ---
recipeForm.addEventListener('submit', addRecipe);

// --- Functions ---

// Initial load
displayRecipes();

function addRecipe(e) {
    e.preventDefault(); // Stop page from reloading

    const title = titleInput.value.trim();
    const image = imageInput.value.trim() || DEFAULT_IMAGE;
    // Split ingredients by new lines and clean up whitespace
    const ingredients = ingredientsInput.value
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '');
    const instructions = instructionsInput.value.trim();

    const newRecipe = {
        id: Date.now(), // Unique ID
        title,
        image,
        ingredients,
        instructions
    };

    // Add to recipes array
    recipes.push(newRecipe);

    // Save to LocalStorage
    saveToStorage();

    // Re-render UI
    displayRecipes();

    // Reset Form
    recipeForm.reset();
}

function displayRecipes() {
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipesContainer.innerHTML = `
            <div class="no-recipes">
                <p>No recipes added yet. Let's start cooking!</p>
            </div>
        `;
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        // Map ingredients array into bullet points
        const ingredientsList = recipe.ingredients
            .map(ing => `<li>${ing}</li>`)
            .join('');

        card.innerHTML = `
            <img class="recipe-img" src="${recipe.image}" alt="${recipe.title}" onerror="this.src='${DEFAULT_IMAGE}'">
            <div class="recipe-content">
                <h3>${recipe.title}</h3>
                
                <h4>Ingredients:</h4>
                <ul>${ingredientsList}</ul>

                <h4>Instructions:</h4>
                <p>${recipe.instructions}</p>

                <button class="btn-delete" onclick="deleteRecipe(${recipe.id})">Delete Recipe</button>
            </div>
        `;

        recipesContainer.appendChild(card);
    });
}

// Global function to delete recipe
window.deleteRecipe = function(id) {
    // Filter out the recipe with the matching ID
    recipes = recipes.filter(recipe => recipe.id !== id);
    
    // Save updated list to storage
    saveToStorage();
    
    // Refresh the view
    displayRecipes();
};

function saveToStorage() {
    localStorage.setItem('myRecipes', JSON.stringify(recipes));
}