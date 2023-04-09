import React, { useState } from "react";

function PersonalInfoForm({submitInfo}) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [preferredExercise, setPreferredExercise] = useState('');

  return (
    <form onSubmit={submitInfo}>
      <fieldset>
        <legend>Personal Info</legend>

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="height">Height (cm):</label>
        <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} required />

        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      
        <label htmlFor="preferredExercise">Preferred Exercise: </label>
        <input type="text" id="preferredExercise" name="preferredExercise" value={preferredExercise} onChange={(e) => setPreferredExercise(e.target.value)} />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}


export default PersonalInfoForm;