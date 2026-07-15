const recipeForm = document.getElementById('recipe-form');
const titleInput = document.getElementById('recipe-title');
const prepInput = document.getElementById('recipe-prep');
const cookInput = document.getElementById('recipe-cook');
const servingsInput = document.getElementById('recipe-servings');
const imageInput = document.getElementById('recipe-image');
const ingredientsInput = document.getElementById('recipe-ingredients');
const instructionsInput = document.getElementById('recipe-instructions');
const recipesContainer = document.getElementById('recipes-container');
const recipeModal = document.getElementById('recipe-modal');
const modalBodyContent = document.getElementById('modal-body-content');

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=600";

const BUILT_IN_RECIPES = [
    {
        id: 1,
        title: "Classic Chocolate Chip Cookies",
        prepTime: "15 mins", cookTime: "12 mins", servings: "24 cookies",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600",
        ingredients: ["1 cup butter, softened", "1 cup sugar", "1 cup brown sugar", "2 eggs", "3 cups flour", "1 tsp baking soda", "2 cups chocolate chips"],
        instructions: "1. Preheat oven to 350°F (175°C).\n2. Cream butter and sugars, then beat in eggs.\n3. Stir in flour, baking soda, and chocolate chips.\n4. Drop onto baking sheet and bake for 10-12 minutes."
    },
    {
        id: 2,
        title: "Vibrant Avocado Toast",
        prepTime: "5 mins", cookTime: "0 mins", servings: "2 servings",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600",
        ingredients: ["2 slices sourdough bread", "1 ripe avocado", "1 tbsp lemon juice", "Salt and pepper to taste", "Red pepper flakes"],
        instructions: "1. Toast bread until golden and crisp.\n2. Mash avocado with lemon juice, salt, and pepper.\n3. Spread over toast and top with red pepper flakes."
    },
    {
        id: 3,
        title: "Creamy Garlic Parmesan Pasta",
        prepTime: "10 mins", cookTime: "15 mins", servings: "3 plates",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
        ingredients: ["8 oz fettuccine", "2 tbsp butter", "3 cloves garlic, minced", "1 cup heavy cream", "1 cup chicken broth", "1 cup grated Parmesan"],
        instructions: "1. Boil pasta and drain.\n2. Melt butter, sauté garlic for 1 min.\n3. Add cream and broth; simmer for 5 mins to thicken.\n4. Stir in cheese until melted, then toss with pasta."
    },
    {
        id: 4,
        title: "Homemade Margherita Pizza",
        prepTime: "20 mins", cookTime: "12 mins", servings: "2 pizzas",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600",
        ingredients: ["1 pre-made pizza dough", "1/2 cup pizza sauce", "1 cup fresh mozzarella, sliced", "Fresh basil leaves", "1 tbsp olive oil"],
        instructions: "1. Preheat oven to 450°F (230°C).\n2. Roll out dough, spread sauce, and arrange mozzarella.\n3. Bake for 10-12 minutes until crust is golden.\n4. Top with fresh basil and olive oil."
    },
    {
        id: 5,
        title: "Berry Bliss Smoothie Bowl",
        prepTime: "5 mins", cookTime: "0 mins", servings: "1 bowl",
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600",
        ingredients: ["1 cup frozen mixed berries", "1 frozen banana", "1/2 cup almond milk", "1 tbsp chia seeds", "Handful of granola"],
        instructions: "1. Blend frozen berries, banana, and almond milk until thick.\n2. Pour into a bowl.\n3. Arrange granola, chia seeds, and extra berries neatly on top."
    },
    {
        id: 6,
        title: "Classic Fluffy Pancakes",
        prepTime: "10 mins", cookTime: "15 mins", servings: "6 pancakes",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600",
        ingredients: ["1 cup all-purpose flour", "2 tbsp sugar", "2 tsp baking powder", "1/2 tsp salt", "1 cup milk", "1 egg", "2 tbsp melted butter"],
        instructions: "1. Whisk dry ingredients together.\n2. Mix in milk, egg, and melted butter until just combined.\n3. Pour batter onto a hot greased griddle.\n4. Flip when bubbles form on top, cook until golden."
    },
    {
        id: 7,
        title: "Fresh Caesar Salad",
        prepTime: "15 mins", cookTime: "0 mins", servings: "4 servings",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600",
        ingredients: ["1 large head romaine lettuce", "1/2 cup croutons", "1/4 cup shredded Parmesan", "1/3 cup Caesar dressing", "1 tbsp lemon juice"],
        instructions: "1. Chop romaine lettuce into bite-sized pieces and wash thoroughly.\n2. Place lettuce in a large bowl.\n3. Add croutons and Parmesan cheese.\n4. Drizzle with dressing and lemon juice, toss well, and serve."
    },
    {
        id: 8,
        title: "Quick Chicken Stir-Fry",
        prepTime: "15 mins", cookTime: "10 mins", servings: "3 servings",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
        ingredients: ["1 lb chicken breast, cubed", "2 cups mixed vegetables", "3 tbsp soy sauce", "1 tbsp honey", "1 tbsp minced ginger", "2 tbsp vegetable oil"],
        instructions: "1. Heat oil in a large skillet or wok over high heat.\n2. Cook chicken until golden and cooked through; remove from pan.\n3. Cook veggies for 3-4 mins until tender-crisp.\n4. Return chicken, add soy sauce, honey, and ginger. Toss for 1 min."
    },
    {
        id: 9,
        title: "Decadent Fudgy Brownies",
        prepTime: "15 mins", cookTime: "22 mins", servings: "9 squares",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
        ingredients: ["1/2 cup melted butter", "1 cup sugar", "2 eggs", "1 tsp vanilla", "1/3 cup cocoa powder", "1/2 cup flour", "1/4 tsp salt"],
        instructions: "1. Preheat oven to 350°F (175°C) and grease an 8x8 baking pan.\n2. Blend melted butter, sugar, eggs, and vanilla.\n3. Stir in cocoa, flour, and salt. Do not overmix.\n4. Bake for 20-22 minutes until a toothpick comes out mostly clean."
    },
    {
        id: 10,
        title: "Gourmet Grilled Cheese",
        prepTime: "5 mins", cookTime: "8 mins", servings: "1 sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
        ingredients: ["2 slices artisan bread", "2 slices Cheddar cheese", "1 slice Swiss cheese", "1 tbsp butter", "1 tsp mayonnaise"],
        instructions: "1. Mix butter and mayo together; spread on one side of each bread slice.\n2. Place one slice butter-side down in a skillet over medium-low heat.\n3. Layer the cheeses, top with the second slice butter-side up.\n4. Grill until deep golden brown on both sides and cheese is melted."
    },
    {
        id: 11,
        title: "Zesty Guacamole & Chips",
        prepTime: "10 mins", cookTime: "0 mins", servings: "4 servings",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
        ingredients: ["3 ripe avocados", "1 lime, juiced", "1/2 cup diced onion", "1/4 cup chopped fresh cilantro", "1 diced roma tomato", "1 bag tortilla chips"],
        instructions: "1. Flatten avocado flesh in a bowl using a fork.\n2. Mix in lime juice, salt, onions, and fresh cilantro.\n3. Gently mix in diced tomatoes.\n4. Allow to sit 10 minutes, then serve alongside crunchy tortilla chips."
    },
    {
        id: 12,
        title: "French Vanilla French Toast",
        prepTime: "5 mins", cookTime: "8 mins", servings: "2 servings",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
        ingredients: ["4 slices brioche bread", "2 large eggs", "1/4 cup whole milk", "1 tsp vanilla extract", "1/2 tsp ground cinnamon", "Maple syrup"],
        instructions: "1. Whisk eggs, milk, vanilla, and cinnamon together in a shallow dish.\n2. Dip each bread slice into the mixture, letting it soak for 10 seconds per side.\n3. Cook on a greased skillet over medium heat for 3-4 minutes per side.\n4. Serve hot with maple syrup."
    }
];

let recipes = JSON.parse(localStorage.getItem('myRecipes')) || BUILT_IN_RECIPES;

if (!localStorage.getItem('myRecipes')) {
    saveToStorage();
}

recipeForm.addEventListener('submit', addRecipe);
displayRecipes();

window.onclick = function(event) {
    if (event.target === recipeModal) {
        closeModal();
    }
}

function addRecipe(e) {
    e.preventDefault(); 

    const title = titleInput.value.trim();
    const prepTime = prepInput.value.trim() || "10 mins";
    const cookTime = cookInput.value.trim() || "15 mins";
    const servings = servingsInput.value.trim() || "2 servings";
    const image = imageInput.value.trim() || DEFAULT_IMAGE;
    const ingredients = ingredientsInput.value.split('\n').map(i => i.trim()).filter(i => i !== '');
    const instructions = instructionsInput.value.trim();

    const newRecipe = { id: Date.now(), title, prepTime, cookTime, servings, image, ingredients, instructions };

    recipes.push(newRecipe);
    saveToStorage();
    displayRecipes();
    recipeForm.reset();
}

function displayRecipes() {
    recipesContainer.innerHTML = '';
    if (recipes.length === 0) {
        recipesContainer.innerHTML = `<div class="no-recipes"><p>No recipes left. Add a new one!</p></div>`;
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.setAttribute('onclick', `openModal(${recipe.id}, event)`);

        const finalPrep = recipe.prepTime || "10 mins";
        const finalCook = recipe.cookTime || "15 mins";

        card.innerHTML = `
            <div class="recipe-img-wrapper">
                <img class="recipe-img" src="${recipe.image}" alt="${recipe.title}" onerror="this.src='${DEFAULT_IMAGE}'">
            </div>
            <div class="recipe-content">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta-tags">
                    <span class="tag">⏱️ Prep: ${finalPrep}</span>
                    <span class="tag cook">🍳 Cook: ${finalCook}</span>
                </div>
                <div class="click-hint">View full details &rarr;</div>
                <button class="btn-delete" onclick="deleteRecipe(${recipe.id}, event)">Delete Recipe</button>
            </div>
        `;
        recipesContainer.appendChild(card);
    });
}

window.openModal = function(id, event) {
    if (event && event.target.classList.contains('btn-delete')) return;

    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const finalPrep = recipe.prepTime || "10 mins";
    const finalCook = recipe.cookTime || "15 mins";
    const finalServes = recipe.servings || "2 people";

    const ingredientsList = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

    modalBodyContent.innerHTML = `
        <img class="modal-hero-img" src="${recipe.image}" alt="${recipe.title}" onerror="this.src='${DEFAULT_IMAGE}'">
        <div class="modal-body">
            <h2>${recipe.title}</h2>
            <div class="modal-meta-row">
                <span class="tag">⏱️ Prep Time: ${finalPrep}</span>
                <span class="tag cook">🍳 Cook Time: ${finalCook}</span>
                <span class="tag status-tag">👥 Servings: ${finalServes}</span>
            </div>
            
            <h4>Ingredients Required</h4>
            <ul>${ingredientsList}</ul>

            <h4>Step-by-Step Instructions</h4>
            <p>${recipe.instructions}</p>
        </div>
    `;
    recipeModal.style.display = "flex";
}

window.closeModal = function() {
    recipeModal.style.display = "none";
}

window.deleteRecipe = function(id, event) {
    if (event) event.stopPropagation(); 
    recipes = recipes.filter(recipe => recipe.id !== id);
    saveToStorage();
    displayRecipes();
};

function saveToStorage() {
    localStorage.setItem('myRecipes', JSON.stringify(recipes));
}