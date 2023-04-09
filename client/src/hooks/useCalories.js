import { useCallback, useEffect, useState } from "react";

function useCalories() {
  const [info, setInfo] = useState({});
  const [foodCalories, setFoodCalories] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    /* console.log(info);
    console.log(calories); */
    console.log(suggestions);
  }, [info, foodCalories, suggestions]);

  const calculateAMR = (info) => {
    const weight = parseFloat(info.weight);
    const height = parseFloat(info.height);
    const age = parseFloat(info.age);
    const gender = info.gender === "male" ? 5 : -161;
    const amr = 10 * weight + 6.25 * height - 5 * age + gender;
    return amr;
  };

  const calculateRequiredCalories = (amr, foodCalories) => {
    const excessCalories = amr - foodCalories;
    return excessCalories;
  };

  const submitCalories = async (calories) => {
    setFoodCalories(calories);
    const amr = calculateAMR(info);
    const requiredCalories = calculateRequiredCalories(amr, calories);
    await getSuggestion(requiredCalories);
  }

  const getSuggestion = async (calories) => {
    // Make a POST request to the Nutritionix API to get exercise suggestions
    const exercises = info.preferredExercise || "run";
    const body = {
      query: `${calories} calories ${exercises}`,
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
      // Set the exercise suggestions in state or do something else with the data
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

  return {
    submitCalories,
    submitInfo,
    getSuggestion,
    suggestions,
  }
}
;

export default useCalories;