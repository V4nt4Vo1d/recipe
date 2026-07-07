// Auto-generated from the original recipe archive. Do not hand-edit structure.
export type Block =
  | { type: "meta"; text: string }
  | { type: "note"; text: string }
  | { type: "subhead"; text: string }
  | { type: "ingredients"; items: string[] }
  | { type: "steps"; items: string[] }

export type Recipe = {
  id: string
  title: string
  desc: string
  category: string
  blocks: Block[]
}

export type Family = {
  slug: string
  name: string
  short: string
  blurb: string
  recipes: Recipe[]
}

export const families: Record<string, Family> = {
  "raifsnider": {
    "slug": "raifsnider",
    "name": "Raifsnider Family",
    "short": "Raifsnider",
    "blurb": "Chili, soups, breads, and more collected from the Raifsnider family.",
    "recipes": [
      {
        "id": "raifsnider-eggs-newport",
        "title": "Eggs Newport",
        "desc": "Baked eggs, bacon, and creamy mushroom sauce served over toast.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Approx. preparation time: 50 minutes. Serves 4."
          },
          {
            "type": "ingredients",
            "items": [
              "8 slices crisply cooked bacon",
              "8 hard boiled eggs, sliced",
              "1 can cream of mushroom soup (or cream of chicken soup?)",
              "1/2 cup mayonnaise",
              "1/2 cup milk",
              "1 teaspoon chives"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Slowly mix the milk with the mayonnaise and cream of mushroom soup.",
              "Add the chives and mix well.",
              "Spray a baking dish with Pam.",
              "Place half of the sliced eggs in the bottom of the dish.",
              "Cover the eggs with half of the soup mixture and top with half of the broken bacon bits.",
              "Repeat the layers with the remaining eggs, soup mixture, and bacon.",
              "Bake at 350 degrees for 20 to 30 minutes, or until hot and bubbly.",
              "Serve over toast."
            ]
          },
          {
            "type": "note",
            "text": "If using a pottery dish, place it in a cold oven and let it heat up with the oven. Bake at 350 degrees for about 30 minutes, or until hot and bubbly."
          }
        ]
      },
      {
        "id": "raifsnider-chicken-tortilla-soup",
        "title": "Chicken Tortilla Soup",
        "desc": "Creamy crockpot soup with chicken, Rotel, corn, and chili mix.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Add everything to the crockpot, heat, and serve with toppings."
          },
          {
            "type": "ingredients",
            "items": [
              "2 cans chicken broth",
              "2 cans corn, drained",
              "2 cans Rotel tomatoes",
              "2 cans chicken meat",
              "2 cans cream of chicken soup",
              "2 packets chili mix"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Add the chicken broth, drained corn, Rotel tomatoes, chicken meat, cream of chicken soup, and chili mix to a crockpot.",
              "Mix everything together well.",
              "Heat until hot and ready to serve."
            ]
          },
          {
            "type": "note",
            "text": "Once ready to serve, top with the following:"
          },
          {
            "type": "ingredients",
            "items": [
              "Avocado",
              "Shredded cheese",
              "Sour cream"
            ]
          }
        ]
      },
      {
        "id": "raifsniderBbqGreenBeans",
        "title": "BBQ Green Beans",
        "desc": "Sweet green beans with diced bacon and onions.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Stacey's Friends."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 3 hours. Serves 8."
          },
          {
            "type": "ingredients",
            "items": [
              "8 slices of bacon, diced",
              "1 onion, chopped",
              "4 (1 lb. cans) cut green beans, drained",
              "1 cup firmly packed brown sugar",
              "1 cup catsup (ketchup)"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cook bacon and onion in skillet over medium heat until bacon is crispy.",
              "Remove with a slotted spoon and place in a large bowl",
              "Add the drained green beans.",
              "Mix the sugar and catsup and add to the green beans and bacon.",
              "Mix everything together well and pour into a baking dish.",
              "Bake covered at 250 degrees for 3 hours."
            ]
          },
          {
            "type": "note",
            "text": "This can be cooked in a crockpot on low for 5-6 hours."
          }
        ]
      },
      {
        "id": "raifsnider-quiche-lorraine",
        "title": "Quiche Lorraine",
        "desc": "Classic bacon and cheese quiche in a pie shell.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 1 hour. Serves 6 pie slices."
          },
          {
            "type": "ingredients",
            "items": [
              "1 unbaked pie shell",
              "8 oz. shredded Swiss or cheddar cheese",
              "8 pieces crisply fried bacon, crumbled",
              "1 1/2 cups half n half cream",
              "4 eggs",
              "2 tablespoons flour",
              "1/2 teaspoon salt",
              "Dash of pepper"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Beat the eggs, flour, seasonings, and cream together.",
              "Spread cheese in the bottom of the pie shell and sprinkle bacon on top.",
              "Pour egg mixture over cheese and bacon.",
              "Bake in a 350 degree oven for 40-45 minutes.",
              "Let rest 5 minutes before serving."
            ]
          },
          {
            "type": "note",
            "text": "Optional: add cooked vegetables like broccoli, spinach, or zucchini."
          }
        ]
      },
      {
        "id": "raifsnider-strawberry-bread",
        "title": "Strawberry Bread",
        "desc": "Sweet quick bread with strawberries, cinnamon, and pecans.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 70 minutes. Serves 3 loaves (8x4)."
          },
          {
            "type": "ingredients",
            "items": [
              "4 eggs",
              "1 1/2 cups vegetable oil",
              "2 (10 oz.) packages frozen strawberries, thawed",
              "2 1/2 cups flour",
              "1 teaspoon soda",
              "1 teaspoon salt",
              "3 teaspoons cinnamon",
              "2 cups sugar",
              "1 cup chopped pecans"
            ]
          },
          {
            "type": "steps",
            "items": [
              "In a large bowl, mix together the first three ingredients.",
              "In another bowl, mix dry ingredients, using 1/2 cup of the flour to toss the nuts.",
              "Add flour mixture to egg mixture, blending well.",
              "Fold in nuts and flour mixture.",
              "Pour into well-greased loaf pans.",
              "Bake at 350 degrees for about 50 minutes, or until a toothpick comes out clean.",
              "Gently loosen bread from pan sides and cool on a rack."
            ]
          },
          {
            "type": "note",
            "text": "Keeps in the refrigerator up to 3 weeks and can be frozen."
          },
          {
            "type": "note",
            "text": "Tip: Tossing the nuts with flour helps keep the nuts suspended in the batter and not drop to the bottom of the bread."
          }
        ]
      },
      {
        "id": "raifsnider-pumpkin-bread",
        "title": "Pumpkin Bread",
        "desc": "Spiced pumpkin loaf recipe from Tommye Beavers.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 1 hour 45 minutes. Serves 2 loaves."
          },
          {
            "type": "ingredients",
            "items": [
              "3 cups sugar",
              "1 cup salad oil",
              "4 eggs, beaten",
              "1 can (16 oz.) pumpkin",
              "3 1/2 cups flour",
              "2 teaspoons soda",
              "1 teaspoon salt",
              "1 teaspoon baking powder",
              "1 teaspoon nutmeg",
              "1 teaspoon allspice",
              "1 teaspoon cinnamon",
              "1/2 teaspoon cloves",
              "2/3 cup water"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cream sugar and oil together.",
              "Add eggs and pumpkin, and mix well.",
              "Mix dry ingredients and add alternately with water.",
              "Pour into two well-greased 9x5 inch loaf pans.",
              "Bake at 350 degrees for 1 1/2 hours, or until tested done.",
              "Let stand 10 minutes, then loosen and remove from pans to cool on rack."
            ]
          },
          {
            "type": "note",
            "text": "If using small pans, bake less time and wrap tightly in foil."
          }
        ]
      },
      {
        "id": "raifsnider-banana-bread",
        "title": "Banana Bread",
        "desc": "Moist banana bread with chopped pecans.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 1 hour 15 minutes. Serves 1 large loaf."
          },
          {
            "type": "ingredients",
            "items": [
              "1/2 cup butter or margarine",
              "1 cup sugar",
              "2 eggs",
              "3 mashed bananas",
              "2 cups flour",
              "1 teaspoon soda",
              "1/4 teaspoon salt",
              "1/2 cup chopped pecans"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cream together butter and sugar, then add eggs.",
              "Add bananas and mix in dry ingredients until blended.",
              "Fold in nuts and place in a well-greased loaf pan.",
              "Bake at 350 degrees for one hour.",
              "Test with a toothpick by seeing if the pick comes out clean.",
              "Run knife around edges and remove from pan to cool on a rack.",
              "Wrap tightly in foil for storage."
            ]
          },
          {
            "type": "note",
            "text": "You can make two medium sized loaves and bake for 40-45 minutes."
          }
        ]
      },
      {
        "id": "raifsnider-crockpot-steak-soup",
        "title": "Crockpot Steak Soup",
        "desc": "Hearty slow-cooker soup with ground chuck and vegetables.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 8 1/2 hours. Serves 6."
          },
          {
            "type": "ingredients",
            "items": [
              "1 1/2 lbs. coarsely ground chuck roast",
              "10 oz. package frozen mixed vegetables",
              "2 small onions, chopped",
              "3 stalks celery, chopped",
              "2 carrots, sliced",
              "1 medium potato, peeled and chopped",
              "1 (1 lb.) can diced tomatoes",
              "1 teaspoon pepper",
              "3 tablespoons beef bouillon granules",
              "3 cups water",
              "1 stick butter",
              "1/2 cup flour"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Brown meat and drain.",
              "Place all ingredients except butter and flour in crockpot.",
              "Cover and cook on low for 8-10 hours.",
              "One hour before serving, turn to high.",
              "Melt butter in a small pan, add flour, and stir until smooth.",
              "Pour into crockpot and blend thoroughly until soup thickens."
            ]
          }
        ]
      },
      {
        "id": "raifsnider-texas-chili",
        "title": "Texas Chili (Crockpot)",
        "desc": "Bean chili with peppers, tomato, and warm spices.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Brad Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 8-9 hours. Serves 6-8."
          },
          {
            "type": "ingredients",
            "items": [
              "1 lb. coarsely ground beef",
              "1 (28 oz.) can diced tomatoes",
              "3 cans kidney beans",
              "1 (7 oz.) can chopped green chilies",
              "1 (12 oz.) can tomato paste",
              "1 green pepper",
              "1 red pepper",
              "2 cups onion, chopped",
              "1 can condensed tomato soup",
              "1 1/2 cups chopped celery",
              "1 can corn (served on the side)",
              "2 bay leaves",
              "2 tablespoons sugar",
              "2 teaspoons salt",
              "1 teaspoon marjoram",
              "1 teaspoon garlic powder",
              "1 teaspoon black pepper",
              "2 tablespoons chili powder (optional: more)",
              "Canned jalapeno slices (served on the side)"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Brown meat and drain.",
              "Place all ingredients except jalapenos in crockpot.",
              "Cook on low for 8-9 hours.",
              "Serve topped with shredded cheddar and jalapenos if desired."
            ]
          },
          {
            "type": "note",
            "text": "For veggie chili: use white beans, squash, and potato in place of beef."
          }
        ]
      },
      {
        "id": "raifsnider-basic-chili",
        "title": "Basic Chili",
        "desc": "Simple stove-top chili with beef, beans, and tomato.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 30 minutes. Serves 4."
          },
          {
            "type": "ingredients",
            "items": [
              "1 lb. lean ground beef",
              "1 onion, chopped",
              "1 can red kidney beans",
              "1 can tomatoes, diced",
              "1 can tomato soup",
              "2 cans water",
              "Salt and pepper to taste",
              "1 1/2 to 2 tablespoons chili powder"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Brown beef and onion together until there is no pink.",
              "If meat is too lean, lightly spray pot with Pam to prevent sticking.",
              "Add remaining ingredients and stir well.",
              "Bring to a boil, then reduce heat and simmer 15-20 minutes.",
              "Add more chili powder for a hotter chili."
            ]
          }
        ]
      },
      {
        "id": "raifsnider-potato-soup",
        "title": "Potato Soup",
        "desc": "Creamy potato and chicken broth soup with optional beans.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 50 minutes. Serves 4-6."
          },
          {
            "type": "ingredients",
            "items": [
              "1 1/2 sticks margarine",
              "1/4 cup onion, chopped",
              "14 oz. can chicken broth",
              "8 potatoes, peeled, cubed, and cooked",
              "Salt and pepper to taste",
              "1/4 cup flour",
              "2 1/2 cups half n half",
              "1 can shellie beans (optional)"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cook potatoes until just tender, but not soft.",
              "Cook onion in margarine until crisp-tender.",
              "Add broth, potatoes, salt, and pepper.",
              "In a small bowl, whisk flour with half and half.",
              "Stir mixture into soup and add beans (if using).",
              "Simmer for about 10 minutes."
            ]
          }
        ]
      },
      {
        "id": "raifsnider-garlic-mashed-potatoes",
        "title": "Garlic Mashed Potatoes",
        "desc": "Roasted-garlic mashed potatoes with rosemary.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 1 hour. Serves 6."
          },
          {
            "type": "ingredients",
            "items": [
              "2 whole garlic heads",
              "1 tablespoon olive oil",
              "6 medium baking potatoes, peeled and cubed",
              "1 cup plus 2 tablespoons milk",
              "2 tablespoons butter",
              "1 teaspoon dry rosemary, crushed",
              "1 teaspoon salt"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cut top off garlic heads so each clove is exposed.",
              "Brush with oil, wrap in foil, and bake at 350 degrees for 45 minutes or until very soft.",
              "Cool 5 minutes, remove garlic from skins, mash, and set aside.",
              "Cover potatoes with water and boil, covered, for 20-25 minutes or until tender.",
              "Drain well.",
              "Add remaining ingredients and mashed garlic.",
              "Mash and stir until light and fluffy."
            ]
          }
        ]
      },
      {
        "id": "raifsnider-french-dip",
        "title": "French Dip",
        "desc": "Slow-cooked rump roast served on sub buns with au jus.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 5 minutes plus crockpot time. Serves 8-10."
          },
          {
            "type": "ingredients",
            "items": [
              "4 1/2 to 5 lb. boneless rump beef roast",
              "1 or 2 packets dry au jus mix",
              "Sub buns"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Place roast in crockpot and cook on low for 8-10 hours.",
              "Prepare au jus mix according to package directions (about 3 cups per envelope).",
              "Thirty minutes before serving, add au jus to the roast and continue cooking on high.",
              "Remove roast and slice thinly.",
              "Serve meat on halved sub buns with au jus in bowls for dipping."
            ]
          },
          {
            "type": "note",
            "text": "Good served with Italian peppers."
          }
        ]
      },
      {
        "id": "raifsnider-chicken-pot-pie",
        "title": "Chicken Pot Pie",
        "desc": "Hearty chicken and vegetable pot pie with a simple drop crust.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Elizabeth Coblentz, Amish Cook."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 1 hour. Serves 8."
          },
          {
            "type": "ingredients",
            "items": [
              "3 cups chopped, cooked chicken",
              "2 cups peas",
              "2 cups cooked carrots, chopped",
              "1 can cream of chicken soup",
              "3 cups chicken broth",
              "Salt and pepper to taste"
            ]
          },
          {
            "type": "meta",
            "text": "Crust:"
          },
          {
            "type": "ingredients",
            "items": [
              "1 1/2 cups flour",
              "1 tablespoon baking powder",
              "3/4 teaspoon salt",
              "1 1/2 cups milk",
              "6 tablespoons melted butter"
            ]
          },
          {
            "type": "note",
            "text": "Mix crust ingredients until moistened. Do not over mix. Pour crust over filling and bake."
          }
        ]
      },
      {
        "id": "raifsnider-german-chocolate-brownies",
        "title": "German Chocolate Brownies",
        "desc": "Layered brownies with caramel, nuts, and chocolate chips.",
        "category": "Desserts",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Beth Wolf."
          },
          {
            "type": "ingredients",
            "items": [
              "1 box German chocolate cake mix",
              "1 can sweetened Eagle Brand condensed milk",
              "3/4 cup softened butter",
              "1 package caramels, unwrapped",
              "6 oz. chocolate chips",
              "1 cup chopped nuts"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Mix cake mix, 1/2 can Eagle Brand milk, and butter well.",
              "Divide mixture in half and spread first half in a greased 9x13 pan.",
              "Bake at 350 degrees for 5-6 minutes.",
              "Melt unwrapped caramels and mix with the other half of the Eagle Brand milk.",
              "Pour and spread caramel mixture over the baked layer.",
              "Top evenly with chopped nuts and chocolate chips.",
              "Spread remaining cake mixture over nuts and chips.",
              "Bake another 25 minutes at 350 degrees, then cool before serving."
            ]
          }
        ]
      },
      {
        "id": "raifsnider-buckeyes",
        "title": "Buckeyes",
        "desc": "Creamy peanut butter balls dipped in chocolate.",
        "category": "Desserts",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Barb Mixell."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 2 hours. Makes 60-65 candies."
          },
          {
            "type": "ingredients",
            "items": [
              "1 1/2 sticks margarine",
              "1 cup + 2 tablespoons crunchy peanut butter",
              "1 lb. box powdered sugar",
              "1 large package semi-sweet chocolate chips",
              "1/4 cake paraffin"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cream together margarine, peanut butter, and powdered sugar.",
              "Chill thoroughly, then form into small balls.",
              "Continue to chill and, using a toothpick, dip each ball into the chocolate mixture.",
              "Place on wax paper and chill until set.",
              "Store in refrigerator or freezer."
            ]
          },
          {
            "type": "note",
            "text": "Chocolate dip ingredients are listed on the recipe card."
          }
        ]
      },
      {
        "id": "raifsnider-vanilla-ice-cream",
        "title": "Vanilla Ice Cream",
        "desc": "Homemade custard-style ice cream with junket tablets.",
        "category": "Desserts",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Louise Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 1 hour. Makes 1 gallon."
          },
          {
            "type": "ingredients",
            "items": [
              "1/2 gallon whole milk",
              "4 eggs",
              "2 scant cups sugar",
              "2 tablespoons vanilla",
              "1 pint half-and-half cream",
              "6 junket tablets, crushed"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Heat milk just warm enough to cook eggs, but not too hot.",
              "Mix eggs and sugar together well.",
              "Slowly stir into heated milk and stir just long enough to be sure eggs have cooked.",
              "Pour into clean freezer can. Stir in cream and vanilla.",
              "Let stand if milk is too hot. It should feel no more than very warm, not hot.",
              "When cooled enough, add junket which has been dissolved in a few drops of water.",
              "Mix into the milk and egg mixture.",
              "Place can in freezer, using lots of salt and crushed ice for freezing."
            ]
          }
        ]
      },
      {
        "id": "raifsnider-chocolate-sauce",
        "title": "Chocolate Sauce",
        "desc": "Rich chocolate sauce made with Karo syrup and cream.",
        "category": "Desserts",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Louise Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 20 minutes. Makes 2 1/2 cups."
          },
          {
            "type": "ingredients",
            "items": [
              "1 1/2 cups sugar",
              "1/4 cup Karo syrup",
              "2/3 cup cream",
              "1 oz. unsweetened chocolate",
              "2 tablespoons butter"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Mix sugar, Karo, and cream together over heat.",
              "Bring to a boil for 1 minute."
            ]
          },
          {
            "type": "note",
            "text": "The longer you boil, the thicker the final sauce and the sooner the sauce will become sugary. Do not boil over 2 minutes."
          }
        ]
      },
      {
        "id": "raifsnider-sugar-cookies",
        "title": "Sugar Cookies",
        "desc": "Classic rolled sugar cookies with optional cinnamon-sugar topping.",
        "category": "Desserts",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 1 hour 45 minutes. Makes 2 dozen."
          },
          {
            "type": "ingredients",
            "items": [
              "3/4 cup butter or margarine",
              "1 cup sugar",
              "2 eggs",
              "1 teaspoon vanilla",
              "2 1/2 cups flour",
              "1 teaspoon baking powder",
              "1 teaspoon salt"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cream butter and sugar together. Add eggs and vanilla. Mix.",
              "Blend in dry ingredients, mixing well and scraping sides of bowl.",
              "Cover and chill in refrigerator at least 1 hour.",
              "Divide dough in half and roll out one half on a well-floured board to 1/4 inch thickness.",
              "Place other half of dough back in the refrigerator to keep cool.",
              "Cut into circles with a biscuit cutter or into shapes with cookie cutters.",
              "Place on an ungreased cookie sheet and bake at 375 degrees for 5-6 minutes.",
              "Repeat for the second half of dough."
            ]
          },
          {
            "type": "note",
            "text": "This time is for a soft cookie. If you bake longer, watch that the bottom of cookies do not burn."
          },
          {
            "type": "note",
            "text": "Tip: Sprinkle each cookie with a cinnamon and sugar mixture before baking. Or decorate with chocolate chips, red hots, raisins, or colored sugars. After cooling, icing may be used for decorations."
          }
        ]
      },
      {
        "id": "raifsnider-macadamia-nut-cookies",
        "title": "White Chocolate Macadamia Nut Cookies",
        "desc": "Buttery cookies with macadamia nuts and white chocolate chunks.",
        "category": "Desserts",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Tommye Beavers."
          },
          {
            "type": "meta",
            "text": "Approx. preparation time: 50 minutes. Makes 2 dozen."
          },
          {
            "type": "ingredients",
            "items": [
              "2/3 cup butter or margarine",
              "1/2 cup sugar",
              "1/2 cup brown sugar",
              "1 egg",
              "1 teaspoon vanilla",
              "1 1/2 cups flour",
              "1 jar macadamia nuts",
              "3 oz. white chocolate, chopped into chunks"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Cream butter and sugars together.",
              "Beat in egg and vanilla.",
              "Mix in flour and fold in nuts and chocolate.",
              "Chill for at least 1 hour or overnight.",
              "Shape into 1-inch balls (dough will be sticky).",
              "Bake on a greased cookie sheet at 350 degrees for 15 minutes.",
              "Cool slightly before removing to a cooling rack."
            ]
          },
          {
            "type": "note",
            "text": "You may be able to find white chocolate in chips and will not have to purchase a block that needs to be chopped."
          }
        ]
      }
    ]
  },
  "ricketts": {
    "slug": "ricketts",
    "name": "Ricketts Family",
    "short": "Ricketts",
    "blurb": "Chicken and noodles, hearty stews, and more collected from the Ricketts family.",
    "recipes": []
  },
  "beavers": {
    "slug": "beavers",
    "name": "Beavers Family",
    "short": "Beavers",
    "blurb": "A growing collection of Beavers family favorites, added by the family.",
    "recipes": []
  },
  "hoffer": {
    "slug": "hoffer",
    "name": "Hoffer Family",
    "short": "Hoffer",
    "blurb": "A growing collection of Hoffer family favorites, added by the family.",
    "recipes": []
  },
  "love": {
    "slug": "love",
    "name": "Love Family",
    "short": "Love",
    "blurb": "A growing collection of Love family favorites, added by the family.",
    "recipes": [
{
        "id": "ricketts-chicken-noodles",
        "title": "Chicken and Noodles",
        "desc": "Chicken breast simmered with egg noodles in a rich broth.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Robin Love."
          },
          {
            "type": "ingredients",
            "items": [
              "8 cups of water (plus extra if needed)",
              "1 family pack of thin sliced chicken breast",
              "10 chicken bouillon cubes",
              "1 (16 oz) bag of Reames Homestyle egg noodles",
              "About 2/3 of a solo cup of cold water (for cornstarch mix)",
              "3 heaping tablespoons of cornstarch"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Add 8 cups of water to a large pot.",
              "Add the chicken breast and 10 chicken bouillon cubes.",
              "Cook for 25 minutes, stirring occasionally. If water level drops, add an extra cup of water.",
              "Add the bag of Reames egg noodles.",
              "Cook for an additional 20 minutes.",
              "While noodles cook, fill a solo cup about 2/3 of the way with COLD water. Add 3 heaping tablespoons of cornstarch and stir well.",
              "When the timer goes off, add the cornstarch mixture a little at a time, stirring after each addition. Add more for extra thickness.",
              "Let cool - the stew will thicken more as it cools."
            ]
          }
        ]
      },
      {
        "id": "ricketts-chicken-potato-stew",
        "title": "Chicken Poop",
        "desc": "Chicken, potatoes, and green beans in a thick savory broth.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Robin Love."
          },
          {
            "type": "ingredients",
            "items": [
              "12 cups of water",
              "10 chicken bouillon cubes",
              "3 chicken breasts, cut up",
              "6 potatoes, peeled and cut",
              "Green beans (canned)",
              "2/3 of a red solo cup of cold water (for cornstarch mix)",
              "4 heaping tablespoons of cornstarch"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Add 12 cups of water to a large pot and add 10 chicken bouillon cubes.",
              "Cut 3 chicken breasts and add to the pot once boiling.",
              "Cook for 30 minutes.",
              "Peel and cut 6 potatoes and add to the pot.",
              "Boil for 25 minutes, stirring occasionally.",
              "Add green beans and cook for an additional 10 minutes, stirring occasionally.",
              "Make the cornstarch mix: fill a red solo cup 2/3 of the way with cold water, add 4 heaping tablespoons of cornstarch, and stir well.",
              "Add cornstarch mixture to the pot and stir. Add more if you want it thicker."
            ]
          }
        ]
      },
      {
        "id": "ricketts-veggie-beef-stew",
        "title": "Veggie Beef Stew",
        "desc": "Ground beef with tomato sauce, potatoes, green beans, corn, and carrots.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Robin Love."
          },
          {
            "type": "ingredients",
            "items": [
              "1 1/2 pounds of ground beef",
              "Salt and a little pepper",
              "3 small cans of tomato sauce",
              "3 1/2 cups of water",
              "3 jumbo potatoes, peeled and diced",
              "3 cans of green beans, drained",
              "1 can of corn, drained",
              "1 can of sliced carrots, drained (optional)"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Season ground beef with salt and pepper and cook in a skillet. Drain excess fat.",
              "In a large sauce pan, add 3 small cans of tomato sauce and 3 1/2 cups of water.",
              "Once beef is cooked, add it to the sauce pan.",
              "Place sauce pan on heat.",
              "Peel and dice 3 jumbo potatoes and add to the pan.",
              "Let everything boil for 20 minutes.",
              "Add the drained green beans, corn, and carrots (if using).",
              "Add water if needed. Put a lid on to help steam the green beans.",
              "Cook for 10 more minutes.",
              "Stir and serve."
            ]
          }
        ]
      },
      {
        "id": "ricketts-green-bean-sausage",
        "title": "Green Bean & Sausage",
        "desc": "Smoked sausage and green beans seasoned with salt.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Robin Love."
          },
          {
            "type": "ingredients",
            "items": [
              "2 packs of 2-pair smoked sausage",
              "4 cans of green beans",
              "Salt"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Drain most of the water from 2 cans of green beans; pour the rest in with the liquid.",
              "Pour the remaining 2 cans of green beans in as-is (liquid included).",
              "Cut up all the sausage and add to the pot.",
              "Add salt to taste.",
              "Cook for about 15 minutes until fully cooked, stirring occasionally."
            ]
          }
        ]
      },
      {
        "id": "ricketts-potato-salad",
        "title": "Potato Salad",
        "desc": "Sliced potatoes, boiled eggs, pickles, and Miracle Whip.",
        "category": "Main Dishes",
        "blocks": [
          {
            "type": "meta",
            "text": "Source: Robin Love."
          },
          {
            "type": "ingredients",
            "items": [
              "9 eggs",
              "4 jumbo potatoes",
              "Salt",
              "Bread and butter pickles (about 5 or 6 stacks of 3 pickle chips)",
              "4+ dollops of Miracle Whip"
            ]
          },
          {
            "type": "steps",
            "items": [
              "Boil 9 eggs.",
              "Fill a pot with 10 cups of water.",
              "Peel 4 jumbo potatoes, slice thin, and add to the pot with salt.",
              "Cook potatoes for 25 minutes.",
              "While potatoes cook, peel the eggs then put them in the fridge to cool.",
              "Drain the potato water, put the potatoes in a bowl and set aside.",
              "Cut the eggs and dice the bread and butter pickles.",
              "Add the eggs and pickles to the potato bowl.",
              "Add 4 dollops of Miracle Whip - add more if needed.",
              "Mix well and serve."
            ]
          }
        ]
      }
    ]
  }
}

const familyOrder = ["raifsnider", "beavers", "hoffer", "ricketts", "love"] as const

export const familyList = familyOrder.map((slug) => families[slug])

export function getFamily(slug: string): Family | undefined {
  return families[slug]
}

export function categoriesFor(family: Family): { name: string; recipes: Recipe[] }[] {
  const map = new Map<string, Recipe[]>()
  for (const r of family.recipes) {
    const key = r.category || "Recipes"
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(r)
  }
  return Array.from(map, ([name, recipes]) => ({ name, recipes }))
}
