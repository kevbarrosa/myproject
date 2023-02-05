import React from "react";
import Dishes from "../../data/dishes.json";
import classes from "./MainMenu.module.css";

const MainMenu = () => {
  const mealsList = Dishes.dishes.map((dish) => (
    <li key={dish.id}>{dish.name}</li>
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default MainMenu;
