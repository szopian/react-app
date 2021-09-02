import React from "react";
import { Card } from "../card/card";
import "./card-list.css";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.workers.map((worker) => (
        <Card key={worker.id} worker={worker} />
      ))}
    </div>
  );
};
