import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <h1>{props.worker.name}</h1>
    </div>
  );
};
