import { useCallback, useEffect, useState } from "react";

function useCalories() {
  const [info, setInfo] = useState({});
  const [foodCalories, setFoodCalories] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [amr, setAmr] = useState(0);
  const [excessCalories, setExcessCalories] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (excessCalories <= 0) {
      setSuggestions([
        {
          name: "No exercise needed",
          duration_min: 0,
          nf_calories: 0,
        }
      ]);
      return;
    }
    getExerciseSuggestion();
  }, [excessCalories]);

  useEffect(() => {
    calculateAMR(info);
  }, [info]);

  useEffect(() => {
    calculateExcessCalories(amr, foodCalories);
  }, [amr, foodCalories])

  const calculateAMR = (info) => {
    const weight = parseFloat(info.weight);
    const height = parseFloat(info.height);
    const age = parseFloat(info.age);
    const gender = info.gender === "male" ? 5 : -161;
    const amr = 10 * weight + 6.25 * height - 5 * age + gender;
    setAmr(amr);
  };

  const calculateExcessCalories = (amr, foodCalories) => {
    const excessCalories = foodCalories - amr;
    setExcessCalories(excessCalories);
  };

  const getExerciseSuggestion = async () => {
    const exercises = info.preferredExercise || "run";
    const body = {
      query: `${excessCalories} calories ${exercises}`,
      gender: info.gender,
      weight_kg: info.weight,
      height_cm: info.height,
      age: info.age,
    };
  
    try {
      const response = await fetch('https://trackapi.nutritionix.com/v2/natural/exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': '24869883',
          'x-app-key': '67c0154ff9b501174f90555512dc7672',
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error('Unable to get exercise suggestions.');
      }
  
      const data = await response.json();
      setSuggestions(data.exercises);
    } catch (error) {
      console.error(error);
    }
  };  

  const submitInfo = useCallback(async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const age = data.get('age');
    const weight = data.get('weight');
    const height = data.get('height');
    const gender = data.get('gender');
    const preferredExercise = data.get('preferredExercise');
    setInfo({
      age,
      weight,
      height,
      gender,
      preferredExercise,
    });
  }, []);



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
      setFoodCalories(totalCalories);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return {
    submitInfo,
    submitFood,
    suggestions,
    isLoading,
    error,
  }
}
;

export default useCalories;