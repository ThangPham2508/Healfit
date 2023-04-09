import { useState } from 'react';

import useCalories from './useCalories';

function useFood() {
  const { submitCalories } = useCalories();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitFood = async (foods) => {
    setIsLoading(true);

    const body = {
      query: foods.map((food) => `${food.food} ${food.quantity}`).join('\n'),
    };

    try {
      const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': '24869883',
          'x-app-key': '67c0154ff9b501174f90555512dc7672',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Unable to submit food.');
      }

      setIsLoading(false);
      const data = await response.json();

      const totalCalories = data.foods.reduce((sum, food) => sum + food.nf_calories, 0);
      submitCalories(totalCalories);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return {
    submitFood,
    isLoading,
    error,
  };
}

export default useFood;
