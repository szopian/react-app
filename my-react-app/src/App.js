import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
class App extends Component {
  constructor() {
    super();

    this.state = {
      workers: [],
      searchField: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ workers: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { workers, searchField } = this.state;
    const filterdWorkers = workers.filter((worker) =>
      worker.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search workers"
          handleChange={this.handleChange}
        />
        <CardList workers={filterdWorkers} />
      </div>
    );
  }
}

export default App;
