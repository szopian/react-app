import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hey you!",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.string}</h1>
        <button onClick={() => this.setState({ string: "Hey me!" })}>
          Change Text
        </button>
      </div>
    );
  }
}

export default App;
