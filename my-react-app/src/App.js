import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      workers: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ workers: users }));
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
