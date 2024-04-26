const happyHourItems = [
	{
		id: 0,
		name: "onion rings",
		category: "appetizer",
		price: "5",
		description: "Served with a side of herb aioli.",
		addOns: "Dangerously addicting!",
	},
	{
		id: 1,
		name: "nashville hot fries",
		category: "appetizer",
		price: "5",
		description: "Served with a side of ranch.",
		addOns: "",
	},
	{
		id: 2,
		name: "enchilada chips",
		category: "appetizer",
		price: "5",
		description:
			"House made enchilada sauce, red onion, cilantro, and queso fresco on a bed of chips.",
		addOns: "",
	},
	{
		id: 3,
		name: "pico & chips",
		category: "appetizer",
		price: "5",
		description: "House made pico de gallo with chips.",
		addOns: "",
	},
	{
		id: 4,
		name: "pretzel bites",
		category: "appetizer",
		price: "5",
		description: "Served with a side of queso blanco dip.",
		addOns: "",
	},
];

const snackItems = [
	{
		id: 0,
		name: "beer brined wings",
		category: "snacks",
		price: "13/21",
		description:
			"Choose from: buffalo, honey garlic BBQ, hoisin sambal, or mango habanero.",
		addOns: "Served with buttermilk ranch or blue cheese dipping sauce.",
	},
	{
		id: 1,
		name: "crispy cauliflower",
		category: "snacks",
		price: "11",
		description:
			"Choose from: buffalo, honey garlic BBQ, hoisin sambal, or mango habanero. Served with side of buttermilk ranch or blue cheese dipping sauce.",
		addOns: "",
	},
	{
		id: 2,
		name: "esquites salsa & chips",
		category: "snacks",
		price: "11",
		description:
			"Fire roasted sweet corn, pico de gallo, cilantro lime crema, Tajín, and queso fresco served with house made corn tortilla chips.",
		addOns: "",
	},
	{
		id: 3,
		name: "garbage nachos",
		category: "snacks",
		price: "14/19",
		description:
			"Grilled chipotle lime chicken, slow roasted pork belly, cheese, pico de gallo, guacamole, and cilantro lime crema loaded on house made corn tortilla chips.",
		addOns: "",
	},
	{
		id: 4,
		name: "quesadilla",
		category: "snacks",
		price: "9",
		description:
			"Served with side of pico de gallo, guacamole, and cilantro lime crema.",
		addOns:
			"Add Protein: Diablo Shrimp +6 Seasoned Ground Beef +4 Grilled Chipotle Lime Chicken +4",
	},
	{
		id: 5,
		name: "queso blanco dip & chips",
		category: "snacks",
		price: "9",
		description:
			"Hatch green chile queso blanco sauce and house made tortilla chips.",
		addOns: "",
	},
	{
		id: 6,
		name: "guacamole & chips",
		category: "snacks",
		price: "11",
		description: "Fresh-made guacamole with house made tortilla chips",
		addOns: "",
	},
	{
		id: 7,
		name: "pico de gallo & chips",
		category: "snacks",
		price: "8",
		description: "Fresh-made pico de gallo with house made tortilla chips.",
		addOns: "",
	},
	{
		id: 8,
		name: "pretzel bites",
		category: "snacks",
		price: "7",
		description: "Served with a side of queso blanco sauce.",
		addOns: "",
	},
];

const tacoItems = [
	{
		id: 0,
		name: "chicken tikka masala tacos",
		category: "tacos",
		price: "10",
		description:
			"Chipotle chicken stewed in tikka masala sauce, shaved cabbage, pickled red onion, and cilantro.",
		addOns: "",
	},
	{
		id: 1,
		name: "baja fish tacos",
		category: "tacos",
		price: "11",
		description:
			"Fresh beer battered swai, cabbage, pico de gallo, guacamole, and cilantro lime crema. Served with a side of fire roasted salsa.  The perfect Pilsner companion!",
		addOns: "",
	},
	{
		id: 2,
		name: "diablo shrimp tacos",
		category: "tacos",
		price: "10",
		description:
			"Adobo chipotle shrimp, cabbage, pico de gallo, guacamole, and cilantro lime crema.",
		addOns: "",
	},
	{
		id: 3,
		name: "pork belly tacos",
		category: "tacos",
		price: "11",
		description:
			"Slow roasted hoisin sambal glazed pork belly, cabbage, pickled Fresno chilies, crispy onion, herb aioli, and cilantro. Get your taste buds ready!",
		addOns: "",
	},
	{
		id: 4,
		name: "pulled prok tacos",
		category: "tacos",
		price: "10",
		description:
			"Slow roasted pork shoulder, mango salsa, cabbage, and queso fresco.",
		addOns: "",
	},
	{
		id: 5,
		name: "street tacos",
		category: "tacos",
		price: "9",
		description:
			"Seasoned ground beef, pico de gallo, crema, and pickled red onion.",
		addOns: "",
	},
];

const riceBowlItems = [
	{
		id: 0,
		name: "teriyaki chicken rice bowl",
		category: "rice bowl",
		price: "15",
		description: "",
		addOns: "",
	},
	{
		id: 1,
		name: "pretzel bites",
		category: "sweet chili crispy cauliflower rice bowl",
		price: "15",
		description: "",
		addOns: "",
	},
	{
		id: 2,
		name: "hoisin sambal glazed pork belly rice bowl",
		category: "rice bowl",
		price: "16",
		description: "",
		addOns: "",
	},
	{
		id: 3,
		name: "enchilada rice bowl",
		category: "rice bowl",
		price: "12",
		description:
			"Enchilada sauce, pico de gallo, iceberg lettuce, and green onion on a bed of jasmine rice",
		addOns:
			"Add Protein: Diablo Shrimp +6 Seasoned Ground Beef +4 Grilled Chipotle Lime Chicken +4",
	},
	{
		id: 4,
		name: "chicken tikka masala rice bowl",
		category: "rice bowl",
		price: "16",
		description:
			"Chicken stewed in tikka masala sauce smothered over a bed of jasmine rice.",
		addOns: "",
	},
];

const friesItems = [
	{
		id: 0,
		name: "side of fries",
		category: "fries",
		price: "6",
		description:
			"Kennebec potatoes cooked ’til golden brown and delicious.  Served with a side of fry sauce.",
		addOns: "",
	},
	{
		id: 1,
		name: "side of onion rings",
		category: "fries",
		price: "7",
		description: "Served with a side of buttermilk ranch.",
		addOns: "",
	},
	{
		id: 2,
		name: "TIKKA MASALA FRIES",
		category: "fries",
		price: "12/17",
		description:
			"Oaxaca cheese, pickled red onion, tikka masala sauce, and cilantro smothered over a bed of crispy golden-brown French fries.",
		addOns:
			"Add Protein: Diablo Shrimp +6 Seasoned Ground Beef +4 Grilled Chipotle Lime Chicken +4",
	},
	{
		id: 3,
		name: "ENCHILADA FRIES",
		category: "fries",
		price: "11/16",
		description:
			"Oaxaca cheese, shaved red onion, enchilada sauce, cilantro, and cilantro lime crema, loaded on a bed of crispy golden-brown French fries.",
		addOns:
			"Add Protein: Diablo Shrimp +6 Seasoned Ground Beef +4 Grilled Chipotle Lime Chicken +4",
	},
	{
		id: 4,
		name: "HANGOVER FRIES",
		category: "fries",
		price: "12/18",
		description:
			"Seasoned chopped burger, American cheese, pickled Fresno chilies, and fry sauce loaded on a bed of crispy golden-brown French fries.",
		addOns: "",
	},
	{
		id: 5,
		name: "LOADED NASHVILLE FRIES",
		category: "fries",
		price: "11/16",
		description:
			"Hatch green chile queso, pico de gallo, and bacon, loaded on a bed of Nashville Hot seasoned fries.",
		addOns:
			"Add Protein: Diablo Shrimp +6 Seasoned Ground Beef +4 Grilled Chipotle Lime Chicken +4",
	},
	{
		id: 6,
		name: "GARBAGE FRIES",
		category: "fries",
		price: "13/19",
		description:
			"Grilled chipotle lime chicken, slow roasted pork belly, cheese, pico de gallo, guacamole, and cilantro lime crema loaded on a bed of golden-brown French fries.",
		addOns: "",
	},
];

const burgerItems = [
	{
		id: 0,
		name: "ADD FRIES OR SALAD",
		category: "burgers",
		price: "6",
		description: "",
		addOns: "",
	},
	{
		id: 1,
		name: "BUTTERMILK FRIED CHICKEN SANDWICH",
		category: "burgers",
		price: "13",
		description:
			"Lettuce, tomatoes, pickles, and mayo. Choose from: Nashville Hot, Buffalo, Honey Garlic BBQ, or Mango Habanero Warning:  Nashville Hot is VERY spicy. Not for the faint of heart.",
		addOns: "Add avocado, fried egg or bacon +2",
	},
	{
		id: 2,
		name: "CRAFT BURGER*",
		category: "burgers",
		price: "12",
		description:
			"Lettuce, tomatoes, pickles, caramelized onion, American cheese, and fry sauce.  Cooked to medium-well unless requested otherwise.",
		addOns: "Add avocado, fried egg or bacon +2",
	},
	{
		id: 3,
		name: "ENCHILADA BURGER*",
		category: "burgers",
		price: "13.5",
		description:
			"Lettuce, tomatoes, Oaxaca cheese, queso fresco, cilantro, shaved red onion, smothered in enchilada sauce.  Cooked to medium-well unless requested otherwise.",
		addOns: "Add avocado, fried egg or bacon +2",
	},
	{
		id: 4,
		name: "BBQ BACON BURGER*",
		category: "burgers",
		price: "14",
		description:
			"American cheese, candied bacon, and onion rings, and honey garlic BBQ sauce. Cooked to medium-well unless requested otherwise.",
		addOns: "Add avocado, fried egg or bacon +2",
	},
	{
		id: 5,
		name: "HOT PASTRAMI SANDWICH",
		category: "burgers",
		price: "17",
		description:
			"1/2 lb shaved pastrami, Oaxaca cheese, pickled red onion, dill pickles, Dijonnaise, and pickled Fresno chilies. Explosion of flavors in every bite!",
		addOns: "",
	},
	{
		id: 6,
		name: "SIGNATURE BBQ PORK BÁNH MÌ**",
		category: "burgers",
		price: "13",
		description:
			"Lemongrass honey soy glazed pork, pickled veggies, fresh cucumber, cilantro, jalapeno, and mayo.",
		addOns: "",
	},
	{
		id: 7,
		name: "CRISPY CAULIFLOWER BÁNH MÌ",
		category: "burgers",
		price: "13",
		description:
			"Sweet chili glazed cauliflower, pickled veggies, fresh cucumber, cilantro, jalapeño, and mayo.",
		addOns: "",
	},
	{
		id: 8,
		name: "VEGAS-STYLE CHOPPED CHEESE",
		category: "burgers",
		price: "13",
		description:
			"Seasoned chopped burger, American cheese, caramelized onion, lettuce, tomatoes, pickles, mayo, and enchilada sauce.",
		addOns: "",
	},
	{
		id: 9,
		name: "PULLED PORK SANDWICH",
		category: "burgers",
		price: "14",
		description:
			"Slow roasted pork shoulder, cabbage slaw, shaved apple, carrots, and red onion. Served with a side of BBQ sauce.",
		addOns: "",
	},
	{
		id: 10,
		name: "BLTA",
		category: "burgers",
		price: "12",
		description:
			"Thick-cut bacon, lettuce, tomatoes, avocado, pickled Fresno chilies, and mayo",
		addOns: "",
	},
];

const saladItems = [
	{
		id: 0,
		name: "CLASSIC WEDGE SALAD",
		category: "salad",
		price: "12",
		description:
			"Iceberg, cherry tomatoes, blue cheese, pickled red onion, and slow roasted pork belly lardons.",
		addOns: "",
	},
	{
		id: 1,
		name: "CHEF'S COBB SALAD",
		category: "salad",
		price: "14",
		description:
			"Chopped romaine, bacon, cherry tomatoes, cucumber, soft boiled egg, and blue cheese.",
		addOns: "",
	},
	{
		id: 2,
		name: "TACO SALAD",
		category: "salad",
		price: "17",
		description:
			"Chopped romaine, house cheese blend, pico de gallo, guacamole, cilantro lime crema, fire roasted salsa, with choice of chipotle chicken or seasoned ground beef.",
		addOns: "",
	},
	{
		id: 3,
		name: "ADD ONS",
		category: "salad",
		price: "",
		description:
			"Soft-boiled Egg – 2 Thick-cut Bacon – 2 Grilled Chipotle Chicken – 4 Seasoned Ground Beef – 4 Diablo Shrimp – 6 Slow Roasted Pork Belly – 6",
		addOns: "",
	},
];
