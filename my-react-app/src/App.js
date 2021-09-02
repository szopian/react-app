import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";

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
        <CardList workers={this.state.workers} />
      </div>
    );
  }
}

export default App;
