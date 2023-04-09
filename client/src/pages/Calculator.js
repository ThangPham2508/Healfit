import React from "react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import FoodForm from "../components/FoodForm";
import Suggestion from "../components/Suggestion";

import useFood from "../hooks/useFood";
import useCalories from "../hooks/useCalories";

function Calculator() {
  const { submitFood } = useFood();
  const { submitInfo, getSuggestion, suggestions } = useCalories();

  return (
    <div>
      <h1>Calculator</h1>
      <PersonalInfoForm submitInfo={submitInfo}/>
      <FoodForm submitFood={submitFood}/>
      <button onClick={getSuggestion}>Get Suggestion</button>
      <Suggestion suggestions={suggestions}/>
    </div>
  );
}

export default Calculator;