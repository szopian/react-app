import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="worker"
        src={`https://robohash.org/${props.worker.id}?set=set2&size100x100`}
      />
      <h3>{props.worker.name}</h3>
      <p>{props.worker.email}</p>
    </div>
  );
};
