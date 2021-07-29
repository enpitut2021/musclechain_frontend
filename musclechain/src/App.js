import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import HeaderBar from "./HeaderBar";

class App extends Component {
  render() {
      return (
	  <div>
	      <HeaderBar />
	      <Graph />
	  </div>
      );
  }
}

export default App;
