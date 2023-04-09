import React, { useEffect, useState } from "react";

function SuggestionItem({suggestionItem}) {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    setSuggestion(suggestionItem);
    console.log(suggestionItem);
  }, [suggestionItem]);

  return (
    <div className="suggestion-item">
      <h2>Activity: {suggestion.name}</h2>
      <p>Minimum duration: {suggestion.duration_min}</p>
      <p>Calories burned: {suggestion.nf_calories}</p>
    </div>
  );
}

export default SuggestionItem;