import React from "react";
import SuggestionItem from "./SuggestionItem"

function Suggestion({suggestions}) {
  return (
    <div className="suggestions">
      <h1>Suggestions</h1>
      {suggestions.map((suggestion, index) => (
        <div key={index}>
          <SuggestionItem suggestionItem={suggestion}/>
        </div>
      ))}
    </div>
  );
}

export default Suggestion;