import React, { Component } from "react";

export default function Choice({ card1, card2, card3 }) {
  console.log(card1);
  console.log(card2);
  console.log(card3);
  if (card1 === card2)
    return (
      <React.Fragment>
        <button>Higher</button>
        <button>Lower</button>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <button>Deal</button>
      <button>No Deal</button>
    </React.Fragment>
  );
}
