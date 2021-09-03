import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";

import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      workers: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ workers: users }));
  }

  render() {
    const { workers, searchField } = this.state;
    const filterdWorkers = workers.filter((worker) =>
      worker.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search workers"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList workers={filterdWorkers} />
      </div>
    );
  }
}

export default App;
