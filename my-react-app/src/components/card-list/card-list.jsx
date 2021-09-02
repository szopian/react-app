import React from "react";
import "./card-list.css";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.workers.map((worker) => (
        <h1 key={worker.id}>{worker.name}</h1>
      ))}
    </div>
  );
};
