import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";

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
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search workers"
          onChange={(e) =>
            this.setState({ searchFiled: e.target.value }, () =>
              console.log(this.state)
            )
          }
        />
        <CardList workers={this.state.workers} />
      </div>
    );
  }
}

export default App;
