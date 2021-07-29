import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import HeaderBar from "./HeaderBar";
import UserInput from "./UserInput";

class App extends Component {
  render() {
      return (
	  <div>
	      <HeaderBar />
	      <Graph />
	      <UserInput queryText="１日の目標消費カロリーを入力(kcal)："/>
	  </div>
      );
  }
}

export default App;
