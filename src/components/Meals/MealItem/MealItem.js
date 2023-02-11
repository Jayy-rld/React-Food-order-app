import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `₦${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <ul className={classes.meal}>
      <div>
        <img alt="Meal" src={props.image} />
        <h3>{props.name}</h3>
        <div className={classes.price}>{price}</div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
      <div></div>
    </ul>
  );
};

export default MealItem;
