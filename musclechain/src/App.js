import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import HeaderBar from "./HeaderBar";
import UserInput from "./UserInput";
import Balance from "./Balance";

const api_url = 'https://682e44032f57.ngrok.io/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 0,
	activity: [],
	balance: 100
    };
  }

    componentDidMount() {
	this.get_activity_data();
	this.getGoalData();
	this.getBalance();
    }

    // 理想的じゃない関数のまとめ方になってるから直したい
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
	this.getJSONData(api_url + 'calories', handler);
    }

    getGoalData() {
	let handler = (data, e) => {
	    console.log(e);
	    console.log('Goal data attrieved!');
	    console.log(data);
	    this.setState({
		goal: data["goal"]
	    });
	};
	this.getJSONData(api_url + 'goals', handler);
    }

    getBalance() {
	console.log('Getting balance data...');
	let handler = (data, e) => {
	    console.log(e);
	    console.log('Balance data attrieved!');
	    console.log(data);
	    this.setState({
		balance: data["balance"]
	    });
	};
	// this.getJSONData(api_url + 'calories', handler);
    }


  getJSONData(url, handler) {
    let data;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.onload = (e) => {
      console.log(e);
      data = xhr.response;
      // console.log('Data from ' + url + 'attrieved!');
      // console.log(data);
      handler(JSON.parse(data), e);
    };
    xhr.send(null);
  }

    postGoal(goal) {
	console.log(goal);
	let payload = JSON.stringify({
	    "goal": goal
	});
	this.postJSONData(api_url + 'goals', payload);
    }

    postJSONData(url, data) {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	//xhr.withCredentials = true;
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	xhr.send(data);
    }

  handleInput(input) {
      this.setState({ goal: input });
      this.postGoal(input);
  }
  render() {
    return (
      <div>
        <HeaderBar />
          <Graph goal={this.state.goal} activity={this.state.activity}/>
        <UserInput
          queryText="１日の目標消費カロリーを入力(kcal)："
          handleInput={(e) => this.handleInput(e)}
        />
	  <Balance balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;
