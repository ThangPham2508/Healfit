import React, { useState, useEffect } from "react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import FoodForm from "../components/FoodForm";

import useFood from "../hooks/useFood";

function Calculator() {
  const { submitFood } = useFood();

  return (
    <div>
      <h1>Calculator</h1>
      <PersonalInfoForm />
      <FoodForm submitFood={submitFood}/>
    </div>
  );
}

export default Calculator;