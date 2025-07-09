import { DiningHallMenu } from '@/types/menuTypes';

export const mealTimes = [
	{ name: 'Breakfast', time: '7:15AM - 11:00AM' },
	{ name: 'Lunch', time: '11:00AM - 4:30PM' },
	{ name: 'Dinner', time: '4:30PM - 8:00PM' },
	{ name: 'Late Night', time: '8:00PM - 11:00PM' },
];

export const menuData: DiningHallMenu = {
  'Anteatery': {
    breakfast: [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Scrambled Eggs',
            calories: 140,
            description: 'Eggs gently scrambled to fluffy perfection',
          },
          {
            name: "O'Brien Potatoes",
            calories: 140,
            description: 'Pan-fried seasoned diced potatoes and sauteed green and red peppers and onions',
          },
          {
            name: 'Turkey Sausage Link',
            calories: 110,
            description: 'Golden brown savory turkey sausage link',
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Tofu-Potato Hash',
            calories: 130,
            description: 'Crispy, golden potatoes, hearty tofu, sautéed bell peppers, onions and salsa',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Pineapple Overnight Oats (1/2 cup)',
            calories: 180,
            description: 'Chia overnight oats with diced pineapple & coconut flakes',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Carrot Raisin Mini Muffin',
            calories: 100,
            description: 'Freshly baked muffin with fresh carrots and raisins',
          },
          {
            name: 'Chocolate Donut Bites',
            calories: 220,
            description: 'Freshly baked donut bites coated with cocoa and powdered sugar',
          },
          {
            name: 'Croissant (1 each)',
            calories: 270,
            description: '',
          },
        ],
      },
    ],
    lunch: [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Carnitas Taco',
            calories: 240,
            description: 'Allergen friendly soft corn tortilla filled with shredded pork, vegan cheddar cheese, shredded lettuce, tomatoes, salsa & jalapenos',
            dietHighlights: [],
          },
          {
            name: 'Charro Beans',
            calories: 80,
            description: 'Pinto beans simmered with vegetable broth, salsa and cumin',
            dietHighlights: ['vegetarian', 'eat well'],
          },
          {
            name: 'Spanish Rice',
            calories: 100,
            description: 'Brown rice with tomatoes, onions, garlic and green peppers seasoned with cumin, oregano and sage',
            dietHighlights: ['eat well', 'whole grains'],
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Spicy Sweet Potato & Bean Taco',
            calories: 390,
            description: 'Roasted chili and cumin-seasoned sweet potatoes, black bean salsa and jicama slaw in flour tortilla',
            dietHighlights: ['vegan', 'low carbon', 'eat well'],
          },
        ],
      },
      {
        heading: 'Ember',
        foodItems: [
          {
            name: 'Cheeseburger',
            calories: 370,
            description: 'Juicy all-beef burger topped with American cheese served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Grilled Black Bean Burger',
            calories: 260,
            description: 'Gardenburger® black bean burger served hot-off-the-grill on a fresh, soft bun',
            dietHighlights: ['low carbon'],
          },
          {
            name: 'Crispy Chicken Sandwich',
            calories: 550,
            description: 'Breaded chicken breast fried to perfection served on a toasted bun with lettuce & mayo',
          },
          {
            name: 'Grilled Herb Chicken Sandwich',
            calories: 310,
            description: 'Tender boneless chicken marinated in orange juice, garlic, basil and thyme on a fresh, soft bun',
          },
          {
            name: 'Crinkle French Fries',
            calories: 170,
            description: 'Crispy crinkle cut fries',
          },
        ],
      },
      {
        heading: 'Hearth',
        foodItems: [
          {
            name: 'Classic Cheese Pizza',
            calories: 340,
            description: 'Rich tomato sauce & a generous layer of melted mozzarella cheese on a golden brown crust',
          },
          {
            name: 'Pepperoni Pizza',
            calories: 370,
            description: 'Topped with crispy pepperoni slices, rich tomato sauce and mozzarella cheese on a golden brown crust',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Croutons (1/4 cup)',
            calories: 60,
            description: 'Homestyle seasoned croutons',
          },
          {
            name: 'Cantaloupe (1/2 cup)',
            calories: 25,
            description: 'Cubed fresh cantaloupe',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Soups)',
        foodItems: [
          {
            name: 'Chicken Noodle Soup (16 fl oz)',
            calories: 150,
            description: 'Sautéed carrots, celery, onion, white meat chicken, wide egg noodles, chicken stock, thyme, bay leaf, black and white peppers',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Craveworthy® Chocolate Chip Cookie',
            calories: 240,
            description: 'Fresh baked all butter cookie with decadent chunks of semisweet chocolate',
          },
          {
            name: 'Craveworthy® Sugar Cookie',
            calories: 230,
            description: 'Fresh baked all butter sugar cookie',
          },
          {
            name: 'Craveworthy® Oatmeal Raisin Cookie',
            calories: 220,
            description: 'Fresh baked all butter oatmeal cookie with plump raisins and a dash of cinnamon',
          },
        ],
      },
      {
        heading: 'Compass',
        foodItems: [
          {
            name: 'Pozole Rojo',
            calories: 420,
            description: 'A rich, brothy stew of pork, hominy, and red chilies topped with shredded cabbage, radish, cilantro, lime, onion & avocado',
            dietHighlights: ['eat well'],
          },
        ],
      },
      {
        heading: 'Saute',
        foodItems: [
          {
            name: 'Mucho nachos',
            calories: 580,
            description: 'Crispy tortilla chips smothered with cheese sauce, seasoned turkey, Cheddar, salsa and sour cream',
          },
        ],
      },
    ],
    dinner: [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Swedish Meatballs',
            calories: 300,
            description: 'Juicy meatballs simmered in a rich, creamy sauce, served over egg noodles',
          },
          {
            name: 'Buttery Egg Noodles',
            calories: 110,
            description: 'Hot egg noodles tossed with margarine',
          },
          {
            name: 'Seasoned Peas and Carrots',
            calories: 40,
            description: 'Steamed peas and carrots seasoned with salt',
            dietHighlights: ['vegetarian', 'eat well'],
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Cauliflower Lentil Curry',
            calories: 240,
            description: 'Cauliflower, carrots and broccoli in coconut curry sauce with tumeric over lentils',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Ember',
        foodItems: [
          {
            name: 'Cheeseburger',
            calories: 370,
            description: 'Juicy all-beef burger topped with American cheese served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Grilled Black Bean Burger',
            calories: 260,
            description: 'Gardenburger® black bean burger served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Crispy Chicken Sandwich',
            calories: 550,
            description: 'Breaded chicken breast fried to perfection served on a toasted bun with lettuce & mayo',
          },
          {
            name: 'Grilled Herb Chicken Sandwich',
            calories: 310,
            description: 'Tender boneless chicken marinated in orange juice, garlic, basil and thyme on a fresh, soft bun',
          },
          {
            name: 'Crinkle French Fries',
            calories: 170,
            description: 'Crispy crinkle cut fries',
          },
        ],
      },
      {
        heading: 'Hearth',
        foodItems: [
          {
            name: 'Classic Cheese Pizza',
            calories: 340,
            description: 'Rich tomato sauce & a generous layer of melted mozzarella cheese on a golden brown crust',
          },
          {
            name: 'Pepperoni Pizza',
            calories: 370,
            description: 'Topped with crispy pepperoni slices, rich tomato sauce and mozzarella cheese on a golden brown crust',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Croutons (1/4 cups)',
            calories: 60,
            description: 'Homestyle seasoned croutons',
          },
          {
            name: 'Ranch Dressing (1 tablespoon)',
            calories: 50,
            description: 'Homestyle creamy ranch salad dressing',
          },
          {
            name: 'Cantaloupe ( 1/2 cup)',
            calories: 25,
            description: 'Cubed fresh cantaloupe',
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Craveworthy® Chocolate Chip Cookie',
            calories: 240,
            description: 'Fresh baked all butter cookie with decadent chunks of semisweet chocolate',
          },
          {
            name: 'Craveworthy® Sugar Cookie',
            calories: 230,
            description: 'Fresh baked all butter sugar cookie',
          },
          {
            name: 'Craveworthy® Oatmeal Raisin Cookie',
            calories: 220,
            description: 'Fresh baked all butter oatmeal cookie with plump raisins and a dash of cinnamon',
          },
        ],
      },
      {
        heading: 'Compass',
        foodItems: [
          {
            name: 'Penne',
            calories: 100,
            description: 'Fresh cooked al dente made-without-gluten tube pasta',
            dietHighlights: ['low carbon']
          },
        ],
      },
    ],
    'late night': [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Swedish Meatballs',
            calories: 300,
            description: 'Juicy meatballs simmered in a rich, creamy sauce, served over egg noodles',
          },
          {
            name: 'Buttery Egg Noodles',
            calories: 110,
            description: 'Hot egg noodles tossed with margarine',
          },
          {
            name: 'Seasoned Peas and Carrots',
            calories: 40,
            description: 'Steamed peas and carrots seasoned with salt',
            dietHighlights: ['vegetarian', 'eat well'],
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Cauliflower Lentil Curry',
            calories: 240,
            description: 'Cauliflower, carrots and broccoli in coconut curry sauce with tumeric over lentils',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Ember',
        foodItems: [
          {
            name: 'Cheeseburger',
            calories: 370,
            description: 'Juicy all-beef burger topped with American cheese served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Grilled Black Bean Burger',
            calories: 260,
            description: 'Gardenburger® black bean burger served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Crispy Chicken Sandwich',
            calories: 550,
            description: 'Breaded chicken breast fried to perfection served on a toasted bun with lettuce & mayo',
          },
          {
            name: 'Grilled Herb Chicken Sandwich',
            calories: 310,
            description: 'Tender boneless chicken marinated in orange juice, garlic, basil and thyme on a fresh, soft bun',
          },
          {
            name: 'Crinkle French Fries',
            calories: 170,
            description: 'Crispy crinkle cut fries',
          },
        ],
      },
      {
        heading: 'Hearth',
        foodItems: [
          {
            name: 'Classic Cheese Pizza',
            calories: 340,
            description: 'Rich tomato sauce & a generous layer of melted mozzarella cheese on a golden brown crust',
          },
          {
            name: 'Pepperoni Pizza',
            calories: 370,
            description: 'Topped with crispy pepperoni slices, rich tomato sauce and mozzarella cheese on a golden brown crust',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Croutons (1/4 cups)',
            calories: 60,
            description: 'Homestyle seasoned croutons',
          },
          {
            name: 'Ranch Dressing (1 tablespoon)',
            calories: 50,
            description: 'Homestyle creamy ranch salad dressing',
          },
          {
            name: 'Cantaloupe ( 1/2 cup)',
            calories: 25,
            description: 'Cubed fresh cantaloupe',
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Craveworthy® Chocolate Chip Cookie',
            calories: 240,
            description: 'Fresh baked all butter cookie with decadent chunks of semisweet chocolate',
          },
          {
            name: 'Craveworthy® Sugar Cookie',
            calories: 230,
            description: 'Fresh baked all butter sugar cookie',
          },
          {
            name: 'Craveworthy® Oatmeal Raisin Cookie',
            calories: 220,
            description: 'Fresh baked all butter oatmeal cookie with plump raisins and a dash of cinnamon',
          },
        ],
      },
      {
        heading: 'Compass',
        foodItems: [
          {
            name: 'Penne',
            calories: 100,
            description: 'Fresh cooked al dente made-without-gluten tube pasta',
            dietHighlights: ['low carbon']
          },
        ],
      },
    ],
  },
  'Brandywine': {
    breakfast: [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Scrambled Eggs',
            calories: 140,
            description: 'Eggs gently scrambled to fluffy perfection',
          },
          {
            name: "O'Brien Potatoes",
            calories: 140,
            description: 'Pan-fried seasoned diced potatoes and sauteed green and red peppers and onions',
          },
          {
            name: 'Turkey Sausage Link',
            calories: 110,
            description: 'Golden brown savory turkey sausage link',
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Tofu-Potato Hash',
            calories: 130,
            description: 'Crispy, golden potatoes, hearty tofu, sautéed bell peppers, onions and salsa',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Pineapple Overnight Oats (1/2 cup)',
            calories: 180,
            description: 'Chia overnight oats with diced pineapple & coconut flakes',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Carrot Raisin Mini Muffin',
            calories: 100,
            description: 'Freshly baked muffin with fresh carrots and raisins',
          },
          {
            name: 'Chocolate Donut Bites',
            calories: 220,
            description: 'Freshly baked donut bites coated with cocoa and powdered sugar',
          },
          {
            name: 'Croissant (1 each)',
            calories: 270,
            description: '',
          },
        ],
      },
    ],
    lunch: [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Carnitas Taco',
            calories: 240,
            description: 'Allergen friendly soft corn tortilla filled with shredded pork, vegan cheddar cheese, shredded lettuce, tomatoes, salsa & jalapenos',
            dietHighlights: [],
          },
          {
            name: 'Charro Beans',
            calories: 80,
            description: 'Pinto beans simmered with vegetable broth, salsa and cumin',
            dietHighlights: ['vegetarian', 'eat well'],
          },
          {
            name: 'Spanish Rice',
            calories: 100,
            description: 'Brown rice with tomatoes, onions, garlic and green peppers seasoned with cumin, oregano and sage',
            dietHighlights: ['eat well', 'whole grains'],
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Spicy Sweet Potato & Bean Taco',
            calories: 390,
            description: 'Roasted chili and cumin-seasoned sweet potatoes, black bean salsa and jicama slaw in flour tortilla',
            dietHighlights: ['vegan', 'low carbon', 'eat well'],
          },
        ],
      },
      {
        heading: 'Ember',
        foodItems: [
          {
            name: 'Cheeseburger',
            calories: 370,
            description: 'Juicy all-beef burger topped with American cheese served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Grilled Black Bean Burger',
            calories: 260,
            description: 'Gardenburger® black bean burger served hot-off-the-grill on a fresh, soft bun',
            dietHighlights: ['low carbon'],
          },
          {
            name: 'Crispy Chicken Sandwich',
            calories: 550,
            description: 'Breaded chicken breast fried to perfection served on a toasted bun with lettuce & mayo',
          },
          {
            name: 'Grilled Herb Chicken Sandwich',
            calories: 310,
            description: 'Tender boneless chicken marinated in orange juice, garlic, basil and thyme on a fresh, soft bun',
          },
          {
            name: 'Crinkle French Fries',
            calories: 170,
            description: 'Crispy crinkle cut fries',
          },
        ],
      },
      {
        heading: 'Hearth',
        foodItems: [
          {
            name: 'Classic Cheese Pizza',
            calories: 340,
            description: 'Rich tomato sauce & a generous layer of melted mozzarella cheese on a golden brown crust',
          },
          {
            name: 'Pepperoni Pizza',
            calories: 370,
            description: 'Topped with crispy pepperoni slices, rich tomato sauce and mozzarella cheese on a golden brown crust',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Croutons (1/4 cup)',
            calories: 60,
            description: 'Homestyle seasoned croutons',
          },
          {
            name: 'Cantaloupe (1/2 cup)',
            calories: 25,
            description: 'Cubed fresh cantaloupe',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Soups)',
        foodItems: [
          {
            name: 'Chicken Noodle Soup (16 fl oz)',
            calories: 150,
            description: 'Sautéed carrots, celery, onion, white meat chicken, wide egg noodles, chicken stock, thyme, bay leaf, black and white peppers',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Craveworthy® Chocolate Chip Cookie',
            calories: 240,
            description: 'Fresh baked all butter cookie with decadent chunks of semisweet chocolate',
          },
          {
            name: 'Craveworthy® Sugar Cookie',
            calories: 230,
            description: 'Fresh baked all butter sugar cookie',
          },
          {
            name: 'Craveworthy® Oatmeal Raisin Cookie',
            calories: 220,
            description: 'Fresh baked all butter oatmeal cookie with plump raisins and a dash of cinnamon',
          },
        ],
      },
      {
        heading: 'Compass',
        foodItems: [
          {
            name: 'Pozole Rojo',
            calories: 420,
            description: 'A rich, brothy stew of pork, hominy, and red chilies topped with shredded cabbage, radish, cilantro, lime, onion & avocado',
            dietHighlights: ['eat well'],
          },
        ],
      },
      {
        heading: 'Saute',
        foodItems: [
          {
            name: 'Mucho nachos',
            calories: 580,
            description: 'Crispy tortilla chips smothered with cheese sauce, seasoned turkey, Cheddar, salsa and sour cream',
          },
        ],
      },
    ],
    dinner: [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Swedish Meatballs',
            calories: 300,
            description: 'Juicy meatballs simmered in a rich, creamy sauce, served over egg noodles',
          },
          {
            name: 'Buttery Egg Noodles',
            calories: 110,
            description: 'Hot egg noodles tossed with margarine',
          },
          {
            name: 'Seasoned Peas and Carrots',
            calories: 40,
            description: 'Steamed peas and carrots seasoned with salt',
            dietHighlights: ['vegetarian', 'eat well'],
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Cauliflower Lentil Curry',
            calories: 240,
            description: 'Cauliflower, carrots and broccoli in coconut curry sauce with tumeric over lentils',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Ember',
        foodItems: [
          {
            name: 'Cheeseburger',
            calories: 370,
            description: 'Juicy all-beef burger topped with American cheese served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Grilled Black Bean Burger',
            calories: 260,
            description: 'Gardenburger® black bean burger served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Crispy Chicken Sandwich',
            calories: 550,
            description: 'Breaded chicken breast fried to perfection served on a toasted bun with lettuce & mayo',
          },
          {
            name: 'Grilled Herb Chicken Sandwich',
            calories: 310,
            description: 'Tender boneless chicken marinated in orange juice, garlic, basil and thyme on a fresh, soft bun',
          },
          {
            name: 'Crinkle French Fries',
            calories: 170,
            description: 'Crispy crinkle cut fries',
          },
        ],
      },
      {
        heading: 'Hearth',
        foodItems: [
          {
            name: 'Classic Cheese Pizza',
            calories: 340,
            description: 'Rich tomato sauce & a generous layer of melted mozzarella cheese on a golden brown crust',
          },
          {
            name: 'Pepperoni Pizza',
            calories: 370,
            description: 'Topped with crispy pepperoni slices, rich tomato sauce and mozzarella cheese on a golden brown crust',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Croutons (1/4 cups)',
            calories: 60,
            description: 'Homestyle seasoned croutons',
          },
          {
            name: 'Ranch Dressing (1 tablespoon)',
            calories: 50,
            description: 'Homestyle creamy ranch salad dressing',
          },
          {
            name: 'Cantaloupe ( 1/2 cup)',
            calories: 25,
            description: 'Cubed fresh cantaloupe',
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Craveworthy® Chocolate Chip Cookie',
            calories: 240,
            description: 'Fresh baked all butter cookie with decadent chunks of semisweet chocolate',
          },
          {
            name: 'Craveworthy® Sugar Cookie',
            calories: 230,
            description: 'Fresh baked all butter sugar cookie',
          },
          {
            name: 'Craveworthy® Oatmeal Raisin Cookie',
            calories: 220,
            description: 'Fresh baked all butter oatmeal cookie with plump raisins and a dash of cinnamon',
          },
        ],
      },
      {
        heading: 'Compass',
        foodItems: [
          {
            name: 'Penne',
            calories: 100,
            description: 'Fresh cooked al dente made-without-gluten tube pasta',
            dietHighlights: ['low carbon']
          },
        ],
      },
    ],
    'late night': [
      {
        heading: 'Grubb',
        foodItems: [
          {
            name: 'Swedish Meatballs',
            calories: 300,
            description: 'Juicy meatballs simmered in a rich, creamy sauce, served over egg noodles',
          },
          {
            name: 'Buttery Egg Noodles',
            calories: 110,
            description: 'Hot egg noodles tossed with margarine',
          },
          {
            name: 'Seasoned Peas and Carrots',
            calories: 40,
            description: 'Steamed peas and carrots seasoned with salt',
            dietHighlights: ['vegetarian', 'eat well'],
          },
        ],
      },
      {
        heading: 'The Twisted Root',
        foodItems: [
          {
            name: 'Cauliflower Lentil Curry',
            calories: 240,
            description: 'Cauliflower, carrots and broccoli in coconut curry sauce with tumeric over lentils',
            dietHighlights: ['low carbon'],
          },
        ],
      },
      {
        heading: 'Ember',
        foodItems: [
          {
            name: 'Cheeseburger',
            calories: 370,
            description: 'Juicy all-beef burger topped with American cheese served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Grilled Black Bean Burger',
            calories: 260,
            description: 'Gardenburger® black bean burger served hot-off-the-grill on a fresh, soft bun',
          },
          {
            name: 'Crispy Chicken Sandwich',
            calories: 550,
            description: 'Breaded chicken breast fried to perfection served on a toasted bun with lettuce & mayo',
          },
          {
            name: 'Grilled Herb Chicken Sandwich',
            calories: 310,
            description: 'Tender boneless chicken marinated in orange juice, garlic, basil and thyme on a fresh, soft bun',
          },
          {
            name: 'Crinkle French Fries',
            calories: 170,
            description: 'Crispy crinkle cut fries',
          },
        ],
      },
      {
        heading: 'Hearth',
        foodItems: [
          {
            name: 'Classic Cheese Pizza',
            calories: 340,
            description: 'Rich tomato sauce & a generous layer of melted mozzarella cheese on a golden brown crust',
          },
          {
            name: 'Pepperoni Pizza',
            calories: 370,
            description: 'Topped with crispy pepperoni slices, rich tomato sauce and mozzarella cheese on a golden brown crust',
          },
        ],
      },
      {
        heading: 'The Farm Stand (Salad)',
        foodItems: [
          {
            name: 'Croutons (1/4 cups)',
            calories: 60,
            description: 'Homestyle seasoned croutons',
          },
          {
            name: 'Ranch Dressing (1 tablespoon)',
            calories: 50,
            description: 'Homestyle creamy ranch salad dressing',
          },
          {
            name: 'Cantaloupe ( 1/2 cup)',
            calories: 25,
            description: 'Cubed fresh cantaloupe',
          },
        ],
      },
      {
        heading: 'Honeycakes',
        foodItems: [
          {
            name: 'Craveworthy® Chocolate Chip Cookie',
            calories: 240,
            description: 'Fresh baked all butter cookie with decadent chunks of semisweet chocolate',
          },
          {
            name: 'Craveworthy® Sugar Cookie',
            calories: 230,
            description: 'Fresh baked all butter sugar cookie',
          },
          {
            name: 'Craveworthy® Oatmeal Raisin Cookie',
            calories: 220,
            description: 'Fresh baked all butter oatmeal cookie with plump raisins and a dash of cinnamon',
          },
        ],
      },
      {
        heading: 'Compass',
        foodItems: [
          {
            name: 'Penne',
            calories: 100,
            description: 'Fresh cooked al dente made-without-gluten tube pasta',
            dietHighlights: ['low carbon']
          },
        ],
      },
    ],
  },
};
