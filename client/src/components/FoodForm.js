import React, { useState } from 'react';

function FoodForm({submitFood}) {
  const [foods, setFoods] = useState([{ food: "", quantity: "" }]);

  const handleChange = (index, event) => {
    const values = [...foods];
    values[index][event.target.name] = event.target.value;
    setFoods(values);
  };

  const addFood = () => {
    setFoods([...foods, { food: "", quantity: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFood(foods);
  };

  return (
    <form onSubmit={handleSubmit}>
      {foods.map((food, index) => (
        <fieldset key={index}>
          <legend>Food {index + 1}</legend>
          <label htmlFor={`food-type-${index}`}>Type of Food: </label>
          <input
            type="text"
            id={`food-type-${index}`}
            name="food"
            value={food.food}
            onChange={(event) => handleChange(index, event)}
            required
          />
          <label htmlFor={`quantity-${index}`}>Quantity: </label>
          <input
            type="text"
            id={`quantity-${index}`}
            name="quantity"
            value={food.quantity}
            onChange={(event) => handleChange(index, event)}
            required
          />
        </fieldset>
      ))}
      <button type="button" onClick={addFood}>
        Add Food
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FoodForm;

