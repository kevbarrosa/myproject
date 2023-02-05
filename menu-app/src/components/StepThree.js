import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const StepThree = (props) => {
  const nextStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const onChangeDish = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <div>
      <Form onSubmit={nextStep}>
        Step Three
        <br />
        <br />
        Please Select A Dish &nbsp;&nbsp;# Of Servings
        <br />
        <div>
          <select name="dishes">
            {props.dishes.map((dish) => (
              <option key={dish.id} value={dish.id}>
                {dish.name}
              </option>
            ))}
          </select>{" "}
          &nbsp; &nbsp;
          <input name="qty" type="number" defaultValue={1} min={1} max={10} />
        </div>
        <br />
        {/* <select
          name="dishes"
          className="w-full p-2.5 text-grey-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          //onChange={onChangeDish}
        >
          {props.dishes.map((dish) => (
            <option key={dish.id} value={dish.id}>
              {dish.name}
            </option>
          ))}
        </select>
        &nbsp; &nbsp;
        <input
          type="number"
          //onChange={props.handleChange("people")}
          //value={props.formData.people}
          defaultValue={1}
          min={1}
          max={10}
        /> */}
        {/* <br />
        <select
          name="dishes"
          className="w-full p-2.5 text-grey-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          onChange={onChangeDish}
        >
          {props.dishes.map((dish) => (
            <option key={dish.id} value={dish.id}>
              {dish.name}
            </option>
          ))}
        </select>
        &nbsp; &nbsp;
        <input
          type="number"
          //onChange={props.handleChange("people")}
          //value={props.formData.people}
          defaultValue={1}
          min={1}
          max={10}
        /> */}
        <br />
        <br />
        <Button>Add new dish</Button>
        <br />
        <br />
        <div>
          <Button onClick={prevStep}>Previous</Button>&nbsp;
          <Button type="submit">Next</Button>
        </div>
      </Form>
    </div>
  );
};

export default StepThree;
