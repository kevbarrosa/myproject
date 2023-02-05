import React, { useState } from "react";

import classes from "./Home.module.css";
import Card from "../UI/Card/Card";
import MainMenu from "../Menu/MainMenu";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import Review from "../Review";
import Dishes from "../../data/dishes.json";

const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    meal: "breakfast",
    people: "1",
    restaurant: "",
    dishes: [],
  });

  const [restos, setRestos] = useState([]);
  const [activeDishes, setActiveDishes] = useState([]);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange = (input) => (e) => {
    const value = e.target.value;

    if (input == "meal") {
      setRestos([
        ...new Set(
          Dishes.dishes
            .map((dishes) => {
              if (dishes.availableMeals.indexOf(value) > -1) {
                return dishes.restaurant;
              }
            })
            .filter(function (element) {
              return element !== undefined;
            })
        ),
      ]);
    }
    if (input == "restaurant") {
      setActiveDishes(
        Dishes.dishes.filter(function (element) {
          return (
            element.restaurant == value &&
            element.availableMeals.indexOf(formData.meal) > -1
          );
        })
      );
    }

    console.log(activeDishes);
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <Card className={classes.home}>
          <StepOne
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        </Card>
      );
    case 2:
      return (
        <Card className={classes.home}>
          <StepTwo
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
            restaurants={restos}
          />
        </Card>
      );
    case 3:
      return (
        <Card className={classes.home}>
          <StepThree
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
            dishes={activeDishes}
          />
        </Card>
      );
    case 4:
      return (
        <Card className={classes.home}>
          <Review
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        </Card>
      );
    default:
      <Card className={classes.home}>
        <MainMenu />
      </Card>;
  }
};

export default Home;
