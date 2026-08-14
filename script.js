
const recipeForm = document.getElementById("recipe-form");

const titleInput = document.getElementById("recipe-title");
const categoryInput = document.getElementById("recipe-category");
const prepInput = document.getElementById("recipe-prep");
const cookInput = document.getElementById("recipe-cook");
const servingsInput = document.getElementById("recipe-servings");
const imageInput = document.getElementById("recipe-image");
const ingredientsInput = document.getElementById("recipe-ingredients");
const instructionsInput = document.getElementById("recipe-instructions");

const recipesContainer = document.getElementById("recipes-container");
const recipeCount = document.getElementById("recipe-count");

const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

const recipeModal = document.getElementById("recipe-modal");
const modalBodyContent = document.getElementById("modal-body-content");
const modalClose = document.getElementById("modal-close");

const deleteModal = document.getElementById("delete-modal");
const cancelDelete = document.getElementById("cancel-delete");
const confirmDelete = document.getElementById("confirm-delete");

const submitBtn = document.getElementById("submit-btn");
const cancelEdit = document.getElementById("cancel-edit");

const formHeading = document.getElementById("form-heading");

const themeToggle = document.getElementById("theme-toggle");
const toast = document.getElementById("toast");

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=900";


/* =========================
   SAMPLE RECIPES
========================= */

const BUILT_IN_RECIPES = [
    {
        id: 1,
        title: "Classic Chocolate Chip Cookies",
        category: "Dessert",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: "24 cookies",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900",
        ingredients: [
            "1 cup butter, softened",
            "1 cup sugar",
            "1 cup brown sugar",
            "2 eggs",
            "3 cups flour",
            "1 tsp baking soda",
            "2 cups chocolate chips"
        ],
        instructions:
            "1. Preheat oven to 350°F (175°C).\n2. Cream butter and sugars, then beat in eggs.\n3. Stir in flour, baking soda, and chocolate chips.\n4. Drop onto baking sheet and bake for 10-12 minutes."
    },

    {
        id: 2,
        title: "Vibrant Avocado Toast",
        category: "Breakfast",
        prepTime: "5 mins",
        cookTime: "0 mins",
        servings: "2 servings",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=900",
        ingredients: [
            "2 slices sourdough bread",
            "1 ripe avocado",
            "1 tbsp lemon juice",
            "Salt and pepper",
            "Red pepper flakes"
        ],
        instructions:
            "1. Toast bread until golden.\n2. Mash avocado with lemon juice, salt, and pepper.\n3. Spread over toast.\n4. Finish with red pepper flakes."
    },

    {
        id: 3,
        title: "Creamy Garlic Parmesan Pasta",
        category: "Dinner",
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: "3 plates",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=900",
        ingredients: [
            "8 oz fettuccine",
            "2 tbsp butter",
            "3 cloves garlic",
            "1 cup heavy cream",
            "1 cup chicken broth",
            "1 cup Parmesan"
        ],
        instructions:
            "1. Boil pasta and drain.\n2. Melt butter and sauté garlic.\n3. Add cream and broth and simmer.\n4. Stir in Parmesan and toss with pasta."
    },

    {
        id: 4,
        title: "Homemade Margherita Pizza",
        category: "Dinner",
        prepTime: "20 mins",
        cookTime: "12 mins",
        servings: "2 pizzas",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=900",
        ingredients: [
            "1 pizza dough",
            "1/2 cup pizza sauce",
            "1 cup fresh mozzarella",
            "Fresh basil",
            "1 tbsp olive oil"
        ],
        instructions:
            "1. Preheat oven to 450°F (230°C).\n2. Roll dough and spread sauce.\n3. Add mozzarella.\n4. Bake until golden and finish with basil."
    },

    {
        id: 5,
        title: "Berry Bliss Smoothie Bowl",
        category: "Breakfast",
        prepTime: "5 mins",
        cookTime: "0 mins",
        servings: "1 bowl",
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=900",
        ingredients: [
            "1 cup frozen berries",
            "1 frozen banana",
            "1/2 cup almond milk",
            "1 tbsp chia seeds",
            "Granola"
        ],
        instructions:
            "1. Blend berries, banana, and almond milk.\n2. Pour into a bowl.\n3. Top with granola and chia seeds."
    },

    {
        id: 6,
        title: "Classic Fluffy Pancakes",
        category: "Breakfast",
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: "6 pancakes",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900",
        ingredients: [
            "1 cup flour",
            "2 tbsp sugar",
            "2 tsp baking powder",
            "1/2 tsp salt",
            "1 cup milk",
            "1 egg",
            "2 tbsp melted butter"
        ],
        instructions:
            "1. Whisk dry ingredients.\n2. Add milk, egg, and butter.\n3. Cook batter on a hot griddle.\n4. Flip when bubbles appear."
    },

    {
        id: 7,
        title: "Fresh Caesar Salad",
        category: "Lunch",
        prepTime: "15 mins",
        cookTime: "0 mins",
        servings: "4 servings",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=900",
        ingredients: [
            "Romaine lettuce",
            "1/2 cup croutons",
            "1/4 cup Parmesan",
            "1/3 cup Caesar dressing",
            "1 tbsp lemon juice"
        ],
        instructions:
            "1. Chop romaine.\n2. Add croutons and Parmesan.\n3. Add dressing and lemon juice.\n4. Toss and serve."
    },

    {
        id: 8,
        title: "Quick Chicken Stir-Fry",
        category: "Dinner",
        prepTime: "15 mins",
        cookTime: "10 mins",
        servings: "3 servings",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
        ingredients: [
            "1 lb chicken breast",
            "2 cups mixed vegetables",
            "3 tbsp soy sauce",
            "1 tbsp honey",
            "1 tbsp ginger",
            "2 tbsp vegetable oil"
        ],
        instructions:
            "1. Heat oil in a wok.\n2. Cook chicken until golden.\n3. Cook vegetables.\n4. Return chicken and add sauce."
    },

    {
        id: 9,
        title: "Decadent Fudgy Brownies",
        category: "Dessert",
        prepTime: "15 mins",
        cookTime: "22 mins",
        servings: "9 squares",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900",
        ingredients: [
            "1/2 cup butter",
            "1 cup sugar",
            "2 eggs",
            "1 tsp vanilla",
            "1/3 cup cocoa powder",
            "1/2 cup flour",
            "1/4 tsp salt"
        ],
        instructions:
            "1. Preheat oven to 350°F.\n2. Mix butter, sugar, eggs, and vanilla.\n3. Add cocoa, flour, and salt.\n4. Bake for 20-22 minutes."
    }
];


/* =========================
   STATE
========================= */

let recipes =
    JSON.parse(localStorage.getItem("myRecipes")) ||
    BUILT_IN_RECIPES.map(recipe => ({
        ...recipe,
        favorite: false
    }));

let selectedCategory = "All";
let editingId = null;
let pendingDeleteId = null;


/* =========================
   INITIALIZATION
========================= */

recipeForm.addEventListener("submit", saveRecipe);

searchInput.addEventListener("input", displayRecipes);
sortSelect.addEventListener("change", displayRecipes);

modalClose.addEventListener("click", closeModal);

cancelEdit.addEventListener("click", resetForm);

cancelDelete.addEventListener("click", closeDeleteModal);

confirmDelete.addEventListener("click", confirmRecipeDelete);

themeToggle.addEventListener("click", toggleTheme);

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {

        document
            .querySelectorAll(".category-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        displayRecipes();
    });
});


recipeModal.addEventListener("click", event => {
    if (event.target === recipeModal) {
        closeModal();
    }
});

deleteModal.addEventListener("click", event => {
    if (event.target === deleteModal) {
        closeDeleteModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
        closeDeleteModal();
    }
});


loadTheme();
displayRecipes();


/* =========================
   SAVE / EDIT RECIPE
========================= */

function saveRecipe(event) {

    event.preventDefault();

    const title = titleInput.value.trim();

    const recipe = {
        id: editingId || Date.now(),

        title,

        category: categoryInput.value,

        prepTime:
            prepInput.value.trim() || "10 mins",

        cookTime:
            cookInput.value.trim() || "15 mins",

        servings:
            servingsInput.value.trim() || "2 servings",

        image:
            imageInput.value.trim() || DEFAULT_IMAGE,

        ingredients:
            ingredientsInput.value
                .split("\n")
                .map(item => item.trim())
                .filter(Boolean),

        instructions:
            instructionsInput.value.trim(),

        favorite:
            editingId
                ? recipes.find(r => r.id === editingId)?.favorite || false
                : false
    };


    if (editingId) {

        recipes = recipes.map(item =>
            item.id === editingId
                ? recipe
                : item
        );

        showToast("Recipe updated successfully!");

    } else {

        recipes.unshift(recipe);

        showToast("Recipe saved!");
    }


    saveToStorage();

    displayRecipes();

    resetForm();
}


/* =========================
   DISPLAY
========================= */

function displayRecipes() {

    let filtered = [...recipes];

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    if (search) {

        filtered = filtered.filter(recipe =>
            recipe.title.toLowerCase().includes(search) ||
            recipe.category.toLowerCase().includes(search) ||
            recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(search)
            )
        );
    }


    if (selectedCategory !== "All") {

        filtered = filtered.filter(recipe =>
            recipe.category === selectedCategory
        );
    }


    const sort = sortSelect.value;

    if (sort === "newest") {

        filtered.sort((a, b) => b.id - a.id);

    } else if (sort === "oldest") {

        filtered.sort((a, b) => a.id - b.id);

    } else if (sort === "az") {

        filtered.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    } else if (sort === "za") {

        filtered.sort((a, b) =>
            b.title.localeCompare(a.title)
        );

    } else if (sort === "favorites") {

        filtered.sort((a, b) =>
            Number(b.favorite) - Number(a.favorite)
        );
    }


    recipeCount.textContent = filtered.length;

    recipesContainer.innerHTML = "";


    if (!filtered.length) {

        recipesContainer.innerHTML = `
            <div class="no-recipes">

                <div class="no-recipes-icon">🍽️</div>

                <h3>No recipes found</h3>

                <p>
                    Try another search or create a new recipe.
                </p>

            </div>
        `;

        return;
    }


    filtered.forEach(recipe => {

        const card =
            document.createElement("article");

        card.className = "recipe-card";

        card.addEventListener("click", () =>
            openModal(recipe.id)
        );


        card.innerHTML = `

            <div class="recipe-img-wrapper">

                <img
                    class="recipe-img"
                    src="${escapeAttribute(recipe.image || DEFAULT_IMAGE)}"
                    alt="${escapeAttribute(recipe.title)}"
                    onerror="this.src='${DEFAULT_IMAGE}'"
                >

                <button
                    class="favorite-btn"
                    aria-label="Favorite recipe"
                >
                    ${recipe.favorite ? "❤️" : "🤍"}
                </button>

            </div>


            <div class="recipe-content">

                <span class="recipe-category">
                    ${escapeHTML(recipe.category || "Other")}
                </span>

                <h3>
                    ${escapeHTML(recipe.title)}
                </h3>


                <div class="recipe-meta">

                    <span class="tag">
                        ⏱ ${escapeHTML(recipe.prepTime)}
                    </span>

                    <span class="tag cook">
                        🍳 ${escapeHTML(recipe.cookTime)}
                    </span>

                </div>


                <div class="card-bottom">

                    <span class="view-details">
                        View recipe →
                    </span>

                    <div class="card-actions">

                        <button
                            class="edit-btn"
                            type="button"
                        >
                            Edit
                        </button>

                        <button
                            class="delete-btn"
                            type="button"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>
        `;


        const favoriteButton =
            card.querySelector(".favorite-btn");

        favoriteButton.addEventListener("click", event => {

            event.stopPropagation();

            toggleFavorite(recipe.id);
        });


        const editButton =
            card.querySelector(".edit-btn");

        editButton.addEventListener("click", event => {

            event.stopPropagation();

            editRecipe(recipe.id);
        });


        const deleteButton =
            card.querySelector(".delete-btn");

        deleteButton.addEventListener("click", event => {

            event.stopPropagation();

            askDelete(recipe.id);
        });


        recipesContainer.appendChild(card);
    });
}


/* =========================
   MODAL
========================= */

function openModal(id) {

    const recipe =
        recipes.find(item => item.id === id);

    if (!recipe) return;


    modalBodyContent.innerHTML = `

        <img
            class="modal-hero-img"
            src="${escapeAttribute(recipe.image || DEFAULT_IMAGE)}"
            alt="${escapeAttribute(recipe.title)}"
            onerror="this.src='${DEFAULT_IMAGE}'"
        >


        <div class="modal-body">

            <div class="modal-category">
                ${escapeHTML(recipe.category || "Recipe")}
            </div>

            <h2>
                ${escapeHTML(recipe.title)}
            </h2>


            <div class="modal-meta-row">

                <span class="tag">
                    ⏱ Prep: ${escapeHTML(recipe.prepTime)}
                </span>

                <span class="tag cook">
                    🍳 Cook: ${escapeHTML(recipe.cookTime)}
                </span>

                <span class="tag">
                    👥 ${escapeHTML(recipe.servings)}
                </span>

            </div>


            <h4>Ingredients</h4>

            <ul>
                ${
                    recipe.ingredients
                        .map(item => `<li>${escapeHTML(item)}</li>`)
                        .join("")
                }
            </ul>


            <h4>Instructions</h4>

            <div class="instructions">
                ${escapeHTML(recipe.instructions)}
            </div>

        </div>
    `;


    recipeModal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeModal() {

    recipeModal.style.display = "none";

    document.body.style.overflow = "";
}


/* =========================
   FAVORITES
========================= */

function toggleFavorite(id) {

    recipes = recipes.map(recipe =>
        recipe.id === id
            ? {
                ...recipe,
                favorite: !recipe.favorite
            }
            : recipe
    );

    saveToStorage();

    displayRecipes();

    showToast("Favorites updated");
}


/* =========================
   EDIT
========================= */

function editRecipe(id) {

    const recipe =
        recipes.find(item => item.id === id);

    if (!recipe) return;


    editingId = id;

    titleInput.value = recipe.title;

    categoryInput.value =
        recipe.category || "Dinner";

    prepInput.value =
        recipe.prepTime || "";

    cookInput.value =
        recipe.cookTime || "";

    servingsInput.value =
        recipe.servings || "";

    imageInput.value =
        recipe.image || "";

    ingredientsInput.value =
        recipe.ingredients.join("\n");

    instructionsInput.value =
        recipe.instructions || "";


    formHeading.textContent = "Edit Recipe";

    submitBtn.innerHTML = "✓ Update Recipe";

    cancelEdit.hidden = false;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   RESET FORM
========================= */

function resetForm() {

    recipeForm.reset();

    editingId = null;

    formHeading.textContent = "New Recipe";

    submitBtn.innerHTML =
        "<span>＋</span> Save Recipe";

    cancelEdit.hidden = true;
}


/* =========================
   DELETE
========================= */

function askDelete(id) {

    pendingDeleteId = id;

    deleteModal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function confirmRecipeDelete() {

    if (!pendingDeleteId) return;


    recipes =
        recipes.filter(recipe =>
            recipe.id !== pendingDeleteId
        );


    saveToStorage();

    displayRecipes();

    closeDeleteModal();

    showToast("Recipe deleted");
}


function closeDeleteModal() {

    deleteModal.style.display = "none";

    pendingDeleteId = null;

    document.body.style.overflow = "";
}


/* =========================
   STORAGE
========================= */

function saveToStorage() {

    localStorage.setItem(
        "myRecipes",
        JSON.stringify(recipes)
    );
}


/* =========================
   DARK MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "culinaryTheme",
        dark ? "dark" : "light"
    );

    themeToggle.textContent =
        dark ? "☀️" : "🌙";
}


function loadTheme() {

    const dark =
        localStorage.getItem("culinaryTheme") === "dark";

    if (dark) {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀️";
    }
}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================
   SECURITY / HTML HELPERS
========================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function escapeAttribute(value) {

    return escapeHTML(value);
}
