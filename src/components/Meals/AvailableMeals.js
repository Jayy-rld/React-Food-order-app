import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 1649.99,
    image:
      "https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 1499.99,
    image:
      "https://images.pexels.com/photos/6419731/pexels-photo-6419731.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 899.99,
    image:
      "https://images.pexels.com/photos/4256561/pexels-photo-4256561.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 2099.99,
    image:
      "https://images.pexels.com/photos/185474/pexels-photo-185474.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <li>{mealsList}</li>
    </section>
  );
};

export default AvailableMeals;
