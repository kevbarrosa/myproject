import React from "react";
import { Button } from "react-bootstrap";
const Review = (props) => {
  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div>
      <div>Meal: {props.formData.meal}</div>
      <div>People: {props.formData.people}</div>
      <div>Restaurant: {props.formData.restaurant}</div>
      <div>
        Dishes:{" "}
        {props.formData.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </div>
      <br />
      <div>
        <Button onClick={prevStep}>Previous</Button>
      </div>
    </div>
  );
};

export default Review;
