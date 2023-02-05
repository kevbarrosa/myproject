import React from "react";
import { Form, Button } from "react-bootstrap";

const StepTwo = (props) => {
  const nextStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div>
      <Form onSubmit={nextStep}>
        Step Two
        <br />
        <br />
        Please Select A Restaurant &nbsp;
        <select
          name="restaurant"
          className="w-full p-2.5 text-grey-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          onChange={props.handleChange("restaurant")}
          value={props.formData.restaurant}
        >
          {props.restaurants.map((restaurant) => (
            <option key={restaurant} value={restaurant}>
              {restaurant}
            </option>
          ))}
        </select>
        <br />
        <br />
        <div>
          <Button onClick={prevStep}>Previous</Button>&nbsp;
          <Button variant="primary" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StepTwo;
