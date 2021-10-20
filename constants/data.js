export const discounts = [
	{
		id: "1",
		name: "Grab & Go Foods East Legon",
		price: "3.00",
		rating: "3.0",
		discount: "50%",
		image: require("../assets/images/food/fried-rice.jpg"),
	},
	{
		id: "2",
		name: "Aseda Restaurant",
		price: "4.00",
		rating: "3.0",
		discount: "50%",
		image: require("../assets/images/food/pizza.jpg"),
	},
	{
		id: "3",
		name: "KFC East Legon",
		price: "2.00",
		rating: "4.0",
		discount: "50%",
		image: require("../assets/images/food/chicken.jpg"),
	},
	{
		id: "4",
		name: "Rocomamas",
		price: "5.00",
		rating: "4.5",
		discount: "50%",
		image: require("../assets/images/food/rocomamas.jpg"),
	},
];

export const restaurants = [
	{
		id: "1",
		name: "Grab & Go Foods East Legon",
		price: "3.00",
		rating: "3.0",
		discount: "50%",
		image: require("../assets/images/food/fried-rice.jpg"),
		menu: [
			{
				id: "1",
				name: "Rice Meals",
				items: [
					{
						id: "1",
						name: "Fried Rice",
						price: "3.00",
					},
					{
						id: "2",
						name: "Jollof Rice",
						price: "3.00",
					},
					{
						id: "3",
						name: "Curry Rice",
						price: "3.00",
					},
					{
						id: "4",
						name: "Steamed Rice",
						price: "3.00",
					},
				],
			},
			{
				id: "2",
				name: "Noodles",
				items: [
					{
						id: "1",
						name: "Chicken Indomie",
						price: "3.00",
					},
					{
						id: "2",
						name: "Beef Indomie",
						price: "3.00",
					},
					{
						id: "3",
						name: "Pork Indomie",
						price: "3.00",
					},
					{
						id: "4",
						name: "Vegetable Noodles",
						price: "3.00",
					},
				],
			},
		],
	},
	{
		id: "2",
		name: "Aseda Restaurant",
		price: "4.00",
		rating: "3.0",
		image: require("../assets/images/food/pizza.jpg"),
		menu: [
			{
				id: "1",
				name: "Pizza Combo",
				items: [
					{
						id: "1",
						name: "Meat Lovers Pizza",
						price: "38.00",
						image: require("../assets/images/restaurant_foods/meat-lovers.jpg"),
					},
					{
						id: "2",
						name: "Hawaian Pizza",
						price: "34.00",
						image: require("../assets/images/restaurant_foods/hawaian.jpg"),
					},
					{
						id: "3",
						name: "Fully Loaded Pizza",
						price: "39.00",
						image: require("../assets/images/restaurant_foods/fully-loaded.jpg"),
					},
					{
						id: "4",
						name: "Pepperoni Pizza",
						price: "76.00",
						image: require("../assets/images/restaurant_foods/pepperoni.jpg"),
					},
				],
			},
			{
				id: "2",
				name: "Burgers",
				items: [
					{
						id: "1",
						name: "Beef Burger",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/beef-burger.jpg"),
					},
					{
						id: "2",
						name: "Chicken Burgers",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/chicken-burger.jpg"),
					},
					{
						id: "3",
						name: "Vegan Burger",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/vegan-burger.jpg"),
					},
					{
						id: "4",
						name: "Fish Filet Burger",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/fish-burger.jpg"),
					},
				],
			},
		],
	},
	{
		id: "3",
		name: "KFC East Legon",
		price: "2.00",
		rating: "4.0",
		image: require("../assets/images/food/chicken.jpg"),
		menu: [
			{
				id: "1",
				name: "Streetwise Meals",
				items: [
					{
						id: "1",
						name: "Streetwise 3",
						description: "Chicken, Beef, Pork, Vegetable",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/streetwise-3.jpg"),
					},
					{
						id: "2",
						name: "Streetwise 10",
						description: "Chicken, Beef, Pork, Vegetable",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/streetwise-10.jpg"),
					},
					{
						id: "3",
						name: "Streetwise 2 with Mini Loaf",
						description: "Chicken, Beef, Pork, Vegetable",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/streetwise-2.jpg"),
					},
					{
						id: "4",
						name: "Streetwise 5",
						description: "Chicken, Beef, Pork, Vegetable",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/streetwise-5.jpg"),
					},
				],
			},
			{
				id: "2",
				name: "Chicken Pieces and Chicken Buckets",
				items: [
					{
						id: "1",
						name: "1 piece chicken",
						description: "Chicken",
						price: "3.00",
						discount: "1.50",
						image: require("../assets/images/restaurant_foods/1-piece.jpg"),
					},
					{
						id: "2",
						name: "2 Piece chicken",
						description: "Chicken",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/2-piece.jpg"),
					},
					{
						id: "3",
						name: "12 piece bucket",
						description: "Chicken",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/12-piece.jpg"),
					},
					{
						id: "4",
						name: "18 piece chicken",
						description: "Chicken",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/18-piece.jpg"),
					},
				],
			},
		],
	},
	{
		id: "4",
		name: "Rocomamas",
		price: "5.00",
		rating: "4.5",
		discount: "50%",
		image: require("../assets/images/food/rocomamas.jpg"),
		menu: [
			{
				id: "1",
				name: "Smashed",
				items: [
					{
						id: "1",
						name: "Chilli Cheese Smashed burger",
						description: "Chicken",
						price: "3.00",
						discount: "50.00",
						isPopular: true,
						image: require("../assets/images/restaurant_foods/bacon-burger.jpg"),
					},
					{
						id: "2",
						name: "Bacon, Cheese and Guacamole burger",
						description: "Chicken",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/bacon-burger.jpg"),
					},
					{
						id: "3",
						name: "Mushroom Burger",
						description: "Chicken",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/mushroom-burger.jpg"),
					},
					{
						id: "4",
						name: "Cheese and Bacon burger",
						description: "Chicken",
						price: "3.00",
						image: require("../assets/images/restaurant_foods/bacon-burger.jpg"),
						isUnavailable: true,
					},
				],
			},
			{
				id: "2",
				name: "Black Line Burgers",
				items: [
					{
						id: "1",
						name: "Blackstar burger",
						description: "Chicken",
						price: "3.00",
						isPopular: true,
						image: require("../assets/images/restaurant_foods/blackstar-burger.jpg"),
					},
				],
			},
		],
	},
];

export const popularFoods = [
	"Fast Food",
	"Chinese",
	"Italian",
	"Japanese",
	"Thai",
	"Indian",
	"Korean",
	"Vietnamese",
	"Malaysian",
	"Mediterranean",
	"Mexican",
	"Middle Eastern",
	"Pizza",
	"Seafood",
	"Steak",
	"Sushi",
	"Vegetarian",
	"Vegan",
	"Venezuelan",
];

export const myOrders = [
	{
		id: "1",
		name: "Grab & Go Foods East Legon",
		price: "3.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/fried-rice.jpg"),
	},
	{
		id: "2",
		name: "Aseda Restaurant",
		price: "4.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/pizza.jpg"),
	},
	{
		id: "3",
		name: "KFC East Legon",
		price: "2.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/chicken.jpg"),
	},
	{
		id: "4",
		name: "Rocomamas",
		price: "5.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/rocomamas.jpg"),
	},

	{
		id: "5",
		name: "Grab & Go Foods East Legon",
		price: "3.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/fried-rice.jpg"),
	},
	{
		id: "6",
		name: "Aseda Restaurant",
		price: "4.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/pizza.jpg"),
	},
	{
		id: "7",
		name: "KFC East Legon",
		price: "2.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/kfc.png"),
	},
	{
		id: "8",
		name: "Rocomamas",
		price: "5.00",
		date: "13 Oct, 2021 8:52 PM",
		status: "Delivered",
		image: require("../assets/images/food/burger.jpg"),
	},
];

export const profileTabs = [
	{
		id: "1",
		name: "Payment",
		icon: "creditcard",
	},
	{
		id: "2",
		name: "Settings",
		icon: "ios-settings-outline",
	},
	{
		id: "4",
		name: "About",
		icon: "information-circle-outline",
	},
	{
		id: "3",
		name: "Help",
		icon: "ios-help-circle-outline",
	},
];
