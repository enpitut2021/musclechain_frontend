import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import HeaderBar from "./HeaderBar";
import UserInput from "./UserInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 0,
    };
  }

  handleInput(input) {
    this.setState({ goal: input });
  }
  render() {
    return (
      <div>
        <HeaderBar />
        <Graph goal={this.state.goal} />
        <UserInput
          queryText="１日の目標消費カロリーを入力(kcal)："
          handleInput={(e) => this.handleInput(e)}
        />
      </div>
    );
  }
}

export default App;
