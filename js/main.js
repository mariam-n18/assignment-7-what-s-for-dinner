var recipes = [
  // RECIPE 0
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image: "./images/imgi_2_photo-1455619452474-d2be8b1e70cd.avif",
    difficulty: "Intermediate",
    category: "Asian",
    rating: 4.7,
    reviews: 312,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutrition: {
      calories: 420,
      protein: 26,
      carbs: 22,
      fat: 26,
      fiber: 5,
      sodium: 890,
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  // RECIPE 1
  {
    name: "Italian Pasta",
    description: "Classic Italian pasta with fresh tomato sauce and basil",
    image: "./images/Italian Pasta.jpg",
    difficulty: "Easy",
    category: "Italian",
    rating: 4.9,
    reviews: 428,
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    ingredients: [
      "200g spaghetti",
      "3 fresh tomatoes",
      "2 garlic cloves",
      "2 tablespoons olive oil",
      "Fresh basil leaves",
    ],
    instructions: [
      "Boil water in a large pot and add spaghetti.",
      "Cook pasta until al dente.",
      "Heat olive oil in a pan.",
      "Add garlic and chopped tomatoes.",
      "Cook until the sauce thickens.",
      "Add cooked pasta and mix well.",
      "Garnish with fresh basil.",
    ],
    nutrition: {
      calories: 350,
      protein: 12,
      carbs: 58,
      fat: 9,
      fiber: 4,
      sodium: 520,
    },
    tips: [
      "Use fresh tomatoes for better flavor.",
      "Save some pasta water to improve the sauce.",
    ],
  },
  // RECIPE 2
  {
    name: "Chicken Alfredo",
    description: "Creamy pasta with grilled chicken and parmesan cheese",
    image: "./images/Chicken Alfredo.jpg",
    difficulty: "Intermediate",
    category: "Italian",
    rating: 4.8,
    reviews: 256,
    prepTime: 15,
    cookTime: 30,
    servings: 3,
    ingredients: [
      "250g fettuccine pasta",
      "300g chicken breast",
      "200ml heavy cream",
      "50g parmesan cheese",
      "2 tablespoons butter",
      "2 garlic cloves",
      "Salt and black pepper",
    ],
    instructions: [
      "Cook fettuccine pasta in boiling water.",
      "Season chicken with salt and pepper.",
      "Cook chicken in a pan until golden.",
      "Melt butter and add minced garlic.",
      "Pour in heavy cream and stir.",
      "Add parmesan cheese.",
      "Mix pasta with the sauce.",
      "Slice chicken and serve over pasta.",
    ],
    nutrition: {
      calories: 560,
      protein: 35,
      carbs: 48,
      fat: 25,
      fiber: 3,
      sodium: 740,
    },
    tips: [
      "Don't boil the cream too strongly.",
      "Use freshly grated parmesan.",
      "Cook pasta until al dente.",
    ],
  },
  // RECIPE 3
  {
    name: "Creamy Tuscan Chicken",
    description:
      "Tender chicken breasts in a rich creamy sauce with spinach, garlic, and sun-dried tomatoes.",
    image: "./images/Creamy Tuscan Chicken.jpg",
    difficulty: "Intermediate",
    category: "Italian",
    rating: 4.9,
    reviews: 428,
    prepTime: 25,
    cookTime: 30,
    servings: 4,
    ingredients: [
      "4 boneless chicken breasts",
      "1 cup heavy cream",
      "2 cups fresh spinach",
      "1/2 cup sun-dried tomatoes",
      "3 cloves garlic",
      "1/2 cup Parmesan cheese",
      "2 tablespoons olive oil",
      "Salt and black pepper",
    ],
    instructions: [
      "Season the chicken breasts with salt and black pepper.",
      "Heat olive oil in a skillet and cook the chicken until golden and fully cooked.",
      "Remove the chicken and sauté minced garlic in the same skillet.",
      "Add heavy cream, Parmesan cheese, and sun-dried tomatoes.",
      "Stir in the fresh spinach until wilted.",
      "Return the chicken to the skillet and simmer for a few minutes.",
      "Serve warm with your favorite side dish.",
    ],
    nutrition: {
      calories: 485,
      protein: 42,
      carbs: 12,
      fat: 29,
      fiber: 3,
      sodium: 620,
    },
    tips: [
      "Use freshly grated Parmesan for a smoother sauce.",
      "Avoid overcooking the chicken to keep it juicy.",
      "Add a little pasta water if the sauce becomes too thick.",
    ],
  },
  // RECIPE 4
  {
    name: "Honey Garlic Salmon",
    description:
      "Flaky salmon fillets glazed with a sweet and savory honey garlic sauce.",
    image: "./images/Honey Garlic Salmon.jpg",
    difficulty: "Easy",
    category: "Seafood",
    rating: 4.8,
    reviews: 356,
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    ingredients: [
      "2 salmon fillets",
      "3 tablespoons honey",
      "3 cloves garlic",
      "2 tablespoons soy sauce",
      "1 tablespoon lemon juice",
      "1 tablespoon olive oil",
      "Salt and black pepper",
      "Fresh parsley",
    ],
    instructions: [
      "Pat the salmon fillets dry and season with salt and pepper.",
      "Mix honey, minced garlic, soy sauce, and lemon juice in a small bowl.",
      "Heat olive oil in a skillet over medium heat.",
      "Place salmon skin-side down and cook until golden.",
      "Pour the honey garlic mixture over the salmon.",
      "Cook until the sauce thickens and the salmon is cooked through.",
      "Garnish with fresh parsley and serve.",
    ],
    nutrition: {
      calories: 410,
      protein: 36,
      carbs: 18,
      fat: 22,
      fiber: 0,
      sodium: 540,
    },
    tips: [
      "Do not overcook salmon because it dries out quickly.",
      "Use fresh lemon juice for a brighter flavor.",
      "Spoon the glaze over the salmon while cooking.",
    ],
  },
  // RECIPE 5
  {
    name: "Classic Beef Lasagna",
    description:
      "Layers of rich meat sauce, creamy cheese, and tender pasta baked to perfection.",
    image: "./images/Classic Beef Lasagna.jpg",
    difficulty: "Intermediate",
    category: "Italian",
    rating: 4.9,
    reviews: 512,
    prepTime: 55,
    cookTime: 50,
    servings: 6,
    ingredients: [
      "12 lasagna noodles",
      "500g ground beef",
      "2 cups tomato sauce",
      "1 onion",
      "2 cloves garlic",
      "2 cups ricotta cheese",
      "2 cups mozzarella cheese",
      "1/2 cup Parmesan cheese",
      "1 egg",
      "Italian seasoning",
    ],
    instructions: [
      "Cook the lasagna noodles according to package instructions.",
      "Sauté chopped onion and garlic until softened.",
      "Add ground beef and cook until browned.",
      "Stir in tomato sauce and Italian seasoning and simmer.",
      "Mix ricotta cheese with the egg and Parmesan cheese.",
      "Spread meat sauce in a baking dish and add a layer of noodles.",
      "Add ricotta mixture and mozzarella cheese.",
      "Repeat the layers until all ingredients are used.",
      "Bake until the cheese is melted and golden.",
      "Let the lasagna rest before slicing and serving.",
    ],
    nutrition: {
      calories: 620,
      protein: 38,
      carbs: 48,
      fat: 29,
      fiber: 4,
      sodium: 790,
    },
    tips: [
      "Let the lasagna rest before cutting to keep its layers intact.",
      "Use a combination of mozzarella and Parmesan for better flavor.",
      "Prepare the meat sauce ahead of time to save effort.",
    ],
  },
  // RECIPE 6
  {
    name: "Avocado Chicken Wrap",
    description:
      "A fresh and satisfying wrap filled with grilled chicken, creamy avocado, and crunchy vegetables.",
    image: "./images/Avocado Chicken Wrap.jpg",
    difficulty: "Easy",
    category: "Healthy",
    rating: 4.7,
    reviews: 284,
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "2 flour tortillas",
      "1 chicken breast",
      "1 ripe avocado",
      "1 cup lettuce",
      "1 tomato",
      "1/4 cup Greek yogurt",
      "1 tablespoon lemon juice",
      "Salt and black pepper",
    ],
    instructions: [
      "Season the chicken breast with salt and pepper.",
      "Grill the chicken until fully cooked and slice it.",
      "Mash the avocado with lemon juice and Greek yogurt.",
      "Chop the lettuce and tomato into small pieces.",
      "Spread the avocado mixture over each tortilla.",
      "Add chicken, lettuce, and tomato.",
      "Roll the tortillas tightly and cut in half.",
    ],
    nutrition: {
      calories: 390,
      protein: 28,
      carbs: 35,
      fat: 16,
      fiber: 7,
      sodium: 480,
    },
    tips: [
      "Use ripe avocado for a creamy filling.",
      "Warm the tortillas slightly before rolling.",
      "Add cucumber for extra crunch.",
    ],
  },
  // RECIPE 7
  {
    name: "Homemade Chicken Biryani",
    description:
      "Aromatic basmati rice layered with spiced chicken, herbs, and caramelized onions.",
    image: "./images/Homemade Chicken Biryani.jpg",
    difficulty: "Advanced",
    category: "Asian",
    rating: 4.9,
    reviews: 637,
    prepTime: 60,
    cookTime: 55,
    servings: 6,
    ingredients: [
      "750g chicken pieces",
      "3 cups basmati rice",
      "2 onions",
      "1 cup plain yogurt",
      "2 tomatoes",
      "2 tablespoons biryani spice mix",
      "1 tablespoon ginger garlic paste",
      "Fresh coriander",
      "Fresh mint",
      "Saffron milk",
      "Salt and cooking oil",
    ],
    instructions: [
      "Wash and soak the basmati rice for 30 minutes.",
      "Marinate chicken with yogurt, spices, ginger garlic paste, and salt.",
      "Slice onions and fry until golden brown.",
      "Cook the marinated chicken with tomatoes and half the fried onions.",
      "Boil the rice until it is about 70 percent cooked.",
      "Layer the rice over the chicken mixture.",
      "Add saffron milk, mint, coriander, and remaining onions.",
      "Cover tightly and cook on low heat until the rice and chicken are fully cooked.",
      "Gently mix the layers before serving.",
    ],
    nutrition: {
      calories: 580,
      protein: 35,
      carbs: 68,
      fat: 18,
      fiber: 3,
      sodium: 710,
    },
    tips: [
      "Soaking the rice helps achieve longer and fluffier grains.",
      "Use a tight-fitting lid during the final cooking stage.",
      "Allow the biryani to rest for 10 minutes before serving.",
    ],
  },
  // RECIPE 8
  {
    name: "Chocolate Lava Cake",
    description:
      "Rich individual chocolate cakes with a warm, gooey chocolate center.",
    image: "./images/Chocolate Lava Cake.jpg",
    difficulty: "Intermediate",
    category: "Dessert",
    rating: 4.8,
    reviews: 391,
    prepTime: 50,
    cookTime: 12,
    servings: 4,
    ingredients: [
      "150g dark chocolate",
      "100g unsalted butter",
      "2 eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 tablespoons flour",
      "1 teaspoon vanilla extract",
      "Butter for greasing",
      "Cocoa powder for dusting",
    ],
    instructions: [
      "Preheat the oven to 200°C.",
      "Grease four small ramekins with butter and dust with cocoa powder.",
      "Melt dark chocolate and butter together until smooth.",
      "Whisk eggs, egg yolks, sugar, and vanilla until thick.",
      "Fold the melted chocolate mixture into the eggs.",
      "Gently fold in the flour.",
      "Divide the batter between the prepared ramekins.",
      "Bake until the edges are set but the centers remain soft.",
      "Let rest briefly, then carefully turn onto serving plates.",
    ],
    nutrition: {
      calories: 420,
      protein: 7,
      carbs: 38,
      fat: 28,
      fiber: 3,
      sodium: 160,
    },
    tips: [
      "Do not overbake because the center should remain molten.",
      "Chill the filled ramekins before baking if preparing ahead.",
      "Serve immediately for the best lava effect.",
    ],
  },
  // RECIPE 9
  {
    name: "Creamy Mushroom Risotto",
    description:
      "Rich and creamy Italian risotto cooked with mushrooms, parmesan cheese, and aromatic herbs",
    image: "./images/Creamy Mushroom Risotto.jpg",
    difficulty: "Intermediate",
    category: "Italian",
    rating: 4.8,
    reviews: 245,
    prepTime: 20,
    cookTime: 35,
    servings: 3,

    ingredients: [
      "1 cup Arborio rice",
      "200g fresh mushrooms",
      "1 small onion, chopped",
      "3 cups vegetable broth",
      "2 tablespoons butter",
      "2 tablespoons olive oil",
      "1/2 cup grated parmesan cheese",
      "2 cloves garlic, minced",
      "Salt and black pepper",
      "Fresh parsley",
    ],

    instructions: [
      "Heat olive oil and butter in a large pan.",
      "Add chopped onion and garlic, then cook until softened.",
      "Add sliced mushrooms and cook for 5 minutes.",
      "Stir in Arborio rice and cook for 2 minutes.",
      "Add vegetable broth gradually, one ladle at a time.",
      "Keep stirring until the rice absorbs the liquid and becomes creamy.",
      "Add parmesan cheese and season with salt and pepper.",
      "Garnish with fresh parsley and serve warm.",
    ],

    nutrition: {
      calories: 390,
      protein: 12,
      carbs: 58,
      fat: 13,
      fiber: 3,
      sodium: 480,
    },

    tips: [
      "Add warm broth gradually for a creamy texture.",
      "Use freshly grated parmesan for better flavor.",
      "Keep stirring the rice to prevent it from sticking.",
    ],
  },
  // RECIPE 10
  {
    name: "Classic Beef Tacos",
    description:
      "Flavorful Mexican tacos filled with seasoned ground beef, fresh vegetables, and creamy sauce",
    image: "./images/Classic Beef Tacos.jpg",
    difficulty: "Easy",
    category: "Mexican",
    rating: 4.7,
    reviews: 386,
    prepTime: 15,
    cookTime: 20,
    servings: 4,

    ingredients: [
      "500g ground beef",
      "8 small taco shells",
      "1 small onion, chopped",
      "2 cloves garlic, minced",
      "1 teaspoon paprika",
      "1 teaspoon cumin",
      "1/2 teaspoon chili powder",
      "1 cup shredded lettuce",
      "1 tomato, diced",
      "1/2 cup shredded cheddar cheese",
      "Sour cream",
      "Salt and black pepper",
    ],

    instructions: [
      "Heat a large skillet over medium heat.",
      "Add ground beef and cook until browned.",
      "Add chopped onion and garlic.",
      "Season with paprika, cumin, chili powder, salt, and pepper.",
      "Cook for another 5 minutes until the beef is fully cooked.",
      "Warm the taco shells according to package instructions.",
      "Fill each shell with the seasoned beef.",
      "Top with lettuce, tomatoes, cheddar cheese, and sour cream.",
      "Serve immediately.",
    ],

    nutrition: {
      calories: 420,
      protein: 26,
      carbs: 32,
      fat: 21,
      fiber: 4,
      sodium: 610,
    },

    tips: [
      "Drain excess fat from the beef before adding seasoning.",
      "Warm taco shells before serving for better texture.",
      "Add avocado or fresh salsa for extra flavor.",
    ],
  },
  // RECIPE 11
  {
    name: "Homemade Chicken Pot Pie",
    description:
      "A comforting golden pastry filled with tender chicken, creamy sauce, and fresh vegetables",
    image: "./images/Homemade Chicken Pot Pie.jpg",
    difficulty: "Intermediate",
    category: "American",
    rating: 4.9,
    reviews: 512,
    prepTime: 55,
    cookTime: 40,
    servings: 6,

    ingredients: [
      "2 cups cooked chicken, shredded",
      "1 sheet puff pastry",
      "1 cup diced carrots",
      "1 cup green peas",
      "1/2 cup chopped celery",
      "1 small onion, chopped",
      "3 tablespoons butter",
      "3 tablespoons flour",
      "1 1/2 cups chicken broth",
      "1/2 cup milk",
      "1 egg, beaten",
      "Salt and black pepper",
      "1/2 teaspoon dried thyme",
    ],

    instructions: [
      "Preheat the oven to 200°C.",
      "Melt butter in a large saucepan.",
      "Add onion, carrots, and celery, then cook until softened.",
      "Stir in flour and cook for one minute.",
      "Gradually add chicken broth and milk while stirring.",
      "Add shredded chicken, peas, thyme, salt, and pepper.",
      "Pour the filling into a baking dish.",
      "Cover with puff pastry and seal the edges.",
      "Brush the pastry with beaten egg.",
      "Bake for 35-40 minutes until golden brown.",
      "Allow to cool slightly before serving.",
    ],

    nutrition: {
      calories: 485,
      protein: 28,
      carbs: 38,
      fat: 24,
      fiber: 4,
      sodium: 690,
    },

    tips: [
      "Use leftover roasted chicken to save preparation time.",
      "Make small cuts in the pastry to allow steam to escape.",
      "Let the pie rest before cutting to keep the filling together.",
    ],
  },
  // RECIPE 12
  {
    name: "Greek Chicken Salad",
    description:
      "A refreshing Mediterranean salad with grilled chicken, crunchy vegetables, feta cheese, and lemon dressing",
    image: "./images/Greek Chicken Salad.jpg",
    difficulty: "Easy",
    category: "Healthy",
    rating: 4.6,
    reviews: 198,
    prepTime: 20,
    cookTime: 15,
    servings: 2,

    ingredients: [
      "2 chicken breasts",
      "2 cups chopped romaine lettuce",
      "1 cucumber, sliced",
      "1 cup cherry tomatoes",
      "1/2 red onion, thinly sliced",
      "1/2 cup feta cheese",
      "1/4 cup black olives",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "1 teaspoon dried oregano",
      "Salt and black pepper",
    ],

    instructions: [
      "Season chicken breasts with oregano, salt, and black pepper.",
      "Heat olive oil in a grill pan.",
      "Cook chicken for 6-7 minutes on each side until fully cooked.",
      "Allow chicken to rest before slicing.",
      "Combine lettuce, cucumber, tomatoes, and red onion in a large bowl.",
      "Add black olives and crumbled feta cheese.",
      "Mix olive oil and lemon juice to prepare the dressing.",
      "Add sliced chicken to the salad.",
      "Drizzle with dressing and toss gently before serving.",
    ],

    nutrition: {
      calories: 340,
      protein: 35,
      carbs: 14,
      fat: 17,
      fiber: 4,
      sodium: 570,
    },

    tips: [
      "Marinate the chicken for extra flavor.",
      "Add the dressing just before serving.",
      "Use fresh lemon juice for a brighter taste.",
    ],
  },
  // RECIPE 13
  {
    name: "Traditional Beef Moussaka",
    description:
      "A delicious Mediterranean baked casserole layered with tender eggplant, seasoned beef, and creamy béchamel sauce",
    image: "./images/Traditional Beef Moussaka.jpg",
    difficulty: "Hard",
    category: "Mediterranean",
    rating: 4.9,
    reviews: 327,
    prepTime: 65,
    cookTime: 50,
    servings: 6,

    ingredients: [
      "2 large eggplants, sliced",
      "500g ground beef",
      "1 large onion, chopped",
      "2 cloves garlic, minced",
      "2 cups tomato sauce",
      "2 tablespoons olive oil",
      "1 teaspoon cinnamon",
      "1 teaspoon dried oregano",
      "3 tablespoons butter",
      "3 tablespoons flour",
      "2 cups milk",
      "1/2 cup grated parmesan cheese",
      "Salt and black pepper",
    ],

    instructions: [
      "Preheat the oven to 190°C.",
      "Slice eggplants and arrange them on a baking tray.",
      "Brush eggplant slices with olive oil and roast until tender.",
      "Heat olive oil in a pan and cook chopped onion and garlic.",
      "Add ground beef and cook until browned.",
      "Stir in tomato sauce, cinnamon, oregano, salt, and pepper.",
      "Simmer the meat sauce for 15 minutes.",
      "Melt butter in a saucepan and stir in flour.",
      "Gradually add milk while whisking until the sauce thickens.",
      "Layer eggplant and meat sauce in a baking dish.",
      "Pour béchamel sauce over the top and sprinkle with parmesan.",
      "Bake for 40-45 minutes until golden.",
      "Allow the moussaka to rest before slicing.",
    ],

    nutrition: {
      calories: 510,
      protein: 29,
      carbs: 34,
      fat: 29,
      fiber: 6,
      sodium: 720,
    },

    tips: [
      "Salt eggplant slices before cooking to reduce excess moisture.",
      "Whisk the béchamel continuously to avoid lumps.",
      "Let the moussaka rest for at least 15 minutes before serving.",
    ],
  },
  // RECIPE 14
  {
    name: "Homemade Margherita Pizza",
    description:
      "Classic Italian pizza topped with fresh mozzarella, tomato sauce, and fragrant basil",
    image: "./images/Homemade Margherita Pizza.jpg",
    difficulty: "Intermediate",
    category: "Italian",
    rating: 4.9,
    reviews: 428,
    prepTime: 50,
    cookTime: 15,
    servings: 4,

    ingredients: [
      "2 cups all-purpose flour",
      "1 teaspoon instant yeast",
      "1 teaspoon sugar",
      "3/4 cup warm water",
      "2 tablespoons olive oil",
      "1/2 teaspoon salt",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella cheese",
      "Fresh basil leaves",
      "1 tablespoon olive oil for topping",
    ],

    instructions: [
      "Mix flour, yeast, sugar, and salt in a large bowl.",
      "Add warm water and olive oil, then knead until a smooth dough forms.",
      "Cover the dough and let it rest for 40 minutes.",
      "Preheat the oven to 220°C.",
      "Roll the dough into a round pizza base.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese and drizzle with olive oil.",
      "Bake for 12-15 minutes until the crust is golden.",
      "Add fresh basil leaves before serving.",
    ],

    nutrition: {
      calories: 285,
      protein: 13,
      carbs: 36,
      fat: 10,
      fiber: 2,
      sodium: 520,
    },

    tips: [
      "Use fresh mozzarella for the best flavor.",
      "Avoid adding too much tomato sauce to keep the crust crispy.",
      "Add fresh basil after baking to preserve its aroma.",
    ],
  },
  // RECIPE 15
  {
    name: "Strawberry Cheesecake",
    description:
      "A rich and creamy cheesecake with a buttery biscuit crust and a fresh strawberry topping",
    image: "./images/Strawberry Cheesecake.jpg",
    difficulty: "Intermediate",
    category: "Dessert",
    rating: 4.9,
    reviews: 456,
    prepTime: 50,
    cookTime: 55,
    servings: 8,

    ingredients: [
      "2 cups digestive biscuits, crushed",
      "1/2 cup melted butter",
      "500g cream cheese",
      "3/4 cup sugar",
      "2 eggs",
      "1 teaspoon vanilla extract",
      "1/2 cup sour cream",
      "1 tablespoon lemon juice",
      "1 cup fresh strawberries",
      "1/4 cup strawberry jam",
    ],

    instructions: [
      "Preheat the oven to 160°C.",
      "Mix crushed biscuits with melted butter.",
      "Press the biscuit mixture into the bottom of a springform pan.",
      "Bake the crust for 10 minutes, then let it cool.",
      "Beat cream cheese and sugar until smooth and creamy.",
      "Add eggs one at a time while mixing.",
      "Add vanilla extract, sour cream, and lemon juice.",
      "Pour the cheesecake mixture over the cooled crust.",
      "Bake for 45-50 minutes until the center is almost set.",
      "Turn off the oven and leave the cheesecake inside for 30 minutes.",
      "Refrigerate for at least 4 hours.",
      "Top with strawberry jam and fresh strawberries before serving.",
    ],

    nutrition: {
      calories: 420,
      protein: 7,
      carbs: 38,
      fat: 28,
      fiber: 1,
      sodium: 310,
    },

    tips: [
      "Use room-temperature cream cheese for a smoother filling.",
      "Avoid overmixing after adding the eggs.",
      "Refrigerate overnight for the best texture.",
      "Add fresh strawberries just before serving.",
    ],
  },
];

// dom variables
var recipeName = document.getElementById("recipe-name");
var recipeDescription = document.getElementById("recipe-description");
var recipeImage = document.getElementById("recipe-image");
var recipeDifficulty = document.getElementById("recipe-difficulty");
var recipeCategory = document.getElementById("recipe-category");
var recipeRating = document.getElementById("recipe-rating");
var recipeReviews = document.getElementById("recipe-reviews");
var recipePrepTime = document.getElementById("recipe-prep-time");
var recipeCookTime = document.getElementById("recipe-cook-time");
var recipeServings = document.getElementById("recipe-servings");
var ingredientsList = document.getElementById("Ingredients-list");
var instructionsList = document.getElementById("instructions-list");
var tipsList = document.getElementById("Tips-list");
var recipeCalories = document.getElementById("recipe-calories");
var recipeProtein = document.getElementById("recipe-protein");
var recipeCarbs = document.getElementById("recipe-carbs");
var recipeFat = document.getElementById("recipe-fat");
var recipeFiber = document.getElementById("recipe-fiber");
var recipeSodium = document.getElementById("recipe-sodium");
var prepWarning = document.getElementById("prep-warning");

// display Recipe function
function displayRecipe(recipe) {
  recipeName.textContent = recipe.name;
  recipeDescription.textContent = recipe.description;
  recipeImage.src = recipe.image;
  recipeDifficulty.textContent = recipe.difficulty;
  recipeCategory.textContent = recipe.category;
  recipeRating.textContent = recipe.rating;
  recipeReviews.textContent = `(${recipe.reviews} reviews)`;
  recipePrepTime.textContent = `${recipe.prepTime} min`;
  recipeCookTime.textContent = `${recipe.cookTime} min`;
  recipeServings.textContent = `${recipe.servings} people`;

  //prep time warning
  if (recipe.prepTime > 45) {
    prepWarning.classList.remove("d-none");
  } else {
    prepWarning.classList.add("d-none");
  }

  //ingredients
  ingredientsList.innerHTML = "";
  var newIngredients = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    newIngredients += ` <li class="d-flex">
                            <div class="d-flex circle rounded-circle align-items-center justify-content-center">${i + 1}</div>
                                <span>${recipe.ingredients[i]}</span>
                              </li> `;
  }
  ingredientsList.innerHTML = newIngredients;

  //instructions
  instructionsList.innerHTML = "";
  var newInstructions = "";
  for (var i = 0; i < recipe.instructions.length; i++) {
    newInstructions += `<li class="d-flex">                            
     <div class="square d-flex justify-content-center align-items-center">${i + 1}</div>
                              <p>${recipe.instructions[i]}</p>
                            </li>`;
  }
  instructionsList.innerHTML = newInstructions;

  //chef tips
  tipsList.innerHTML = "";
  var newTips = "";
  for (var i = 0; i < recipe.tips.length; i++) {
    newTips += `<li class="d-flex">
                              <i class="fa-solid fa-circle-check"></i>
                              <p>${recipe.tips[i]}</p>
                        </li>`;
  }
  tipsList.innerHTML = newTips;

  //nutrition
  recipeCalories.textContent = `${recipe.nutrition.calories} kcal`;
  recipeProtein.textContent = `${recipe.nutrition.protein}g`;
  recipeCarbs.textContent = `${recipe.nutrition.carbs}g`;
  recipeFat.textContent = `${recipe.nutrition.fat}g`;
  recipeFiber.textContent = `${recipe.nutrition.fiber}g`;
  recipeSodium.textContent = `${recipe.nutrition.sodium}mg`;
}

function changeRecipe() {
  var lastRecipeIndex = sessionStorage.getItem("lastRecipeIndex");
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * recipes.length);
  } while (lastRecipeIndex !== null && randomIndex === Number(lastRecipeIndex));

  sessionStorage.setItem("lastRecipeIndex", randomIndex);

  var randomRecipe = recipes[randomIndex];
  displayRecipe(randomRecipe);
}
changeRecipe();
