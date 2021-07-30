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
	activity: []
    };

      this.get_activity_data();
      this.getGoalData();
  }

    get_activity_data() {
	console.log('Getting activity data...');
	let handler = (data, e) => {
	    console.log(e);
	    console.log('Activity data attrieved!');
	    console.log(data);
	    this.setState({
		activity: data
	    });
	};
	this.getJSONData.bind(this)('http://8fadfda12fb8.ngrok.io/calories', handler);
    }

    getGoalData() {
	let handler = (data, e) => {
	    console.log(e);
	    console.log('Goal data attrieved!');
	    console.log(data);
	    this.setState({
		goal: data["ret_goal"]
	    });
	};
	this.getJSONData.bind(this)('http://0961809a7fd9.ngrok.io/goals', handler);
    }

    getJSONData(url, handler) {
	let data;
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	xhr.onload = (e) => {
	    console.log(e);
	    data = xhr.response;
	    // console.log('Data from ' + url + 'attrieved!');
	    // console.log(data);
	    handler(JSON.parse(data), e);
	};
	xhr.send(null);
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
