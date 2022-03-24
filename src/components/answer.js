import React from "react";
import Card from "./card";
import Choice from "./choice";

export default function Answer({ card1, card2, card3 }) {
  return (
    <div className="card-result-container">
      <div className="card-result">
        <Card value={card3} />
      </div>
      <Choice card1={card1} card2={card2} card3={card3} />
    </div>
  );
}
