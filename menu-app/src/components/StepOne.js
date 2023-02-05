import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const StepOne = (props) => {
  const nextStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      <Form onSubmit={nextStep}>
        Step One
        <br />
        <br />
        <div className="relative w-full lg:max-w-sm">
          Please Select A Meal &nbsp;
          <select
            className="w-full p-2.5 text-grey-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={props.handleChange("meal")}
            value={props.formData.meal}
          >
            <option key="Breakfast" value="breakfast">
              Breakfast
            </option>
            <option key="Lunch" value="lunch">
              Lunch
            </option>
            <option key="Dinner" value="dinner">
              Dinner
            </option>
          </select>
          <br />
          Please Select Number of people &nbsp;
          <input
            type="number"
            onChange={props.handleChange("people")}
            value={props.formData.people}
            min={1}
            max={10}
          />
        </div>
        <br />
        <div>
          <Button variant="primary" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StepOne;
