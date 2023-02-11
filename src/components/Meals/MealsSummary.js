import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1 className={classes["rainbow-text"]}>
        Delicious Food, Delivered To You
      </h1>
    </section>
  );
};

export default MealsSummary;
