import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      workers: [
        {
          name: "Leon",
          id: 1,
        },
        {
          name: "Johnny",
          id: 2,
        },
        {
          name: "Cliff",
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.workers.map((worker) => (
          <h1 key={worker.id}>{worker.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
