import React from "react";

export default function Card({ value }) {
  return (
    <div className="card-container">
      <div className="card-name">{value}</div>
    </div>
  );
}
