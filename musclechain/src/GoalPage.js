import React, { Component } from "react";
import "./App.css";
import HeaderBar from "./HeaderBar";
import Graph from "./Graph";
import UserInput from "./UserInput";

import background from "./res/muscle.png";

const api_url = "http://5e321a6b21f3.ngrok.io/";

class GoalPage extends Component {
    constructor() {
	super();
	this.state = {
	    goal: 0,
	    activity: []
	};
    }
    componentDidMount() {
	// this.getGoalData();
	this.get_uid();
    }

    get_uid() {
	console.log("Getting uid data")
	let handler = (data, e) => {
	    console.log(e);
	    console.log('uid data attrieved!');
	    console.log(data);
	    this.setState({
		uid: data["uid"]
	    });
	    this.get_activity_data();
	};
	this.getJSONData(api_url + 'firebase/uid', handler);
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
	let body = {
	    uid: this.state.uid
	};
	console.log("body")
	console.log(body);
	this.getJSONData(api_url + 'firebase/calories', handler, body);
    }
    
    getGoalData() {
	let handler = (data, e) => {
	    console.log(e);
	    console.log("Goal data attrieved!");
	    console.log(data);
	    this.setState({
		goal: data["goal"],
	    });
	};
	this.getJSONData(api_url + "goals", handler);
    }

    getJSONData(url, handler, body = null) {
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
	xhr.send(body);
    }

    postGoal(goal) {
	console.log(goal);
	let payload = JSON.stringify({
	    goal: goal,
	});
	this.postJSONData(api_url + "goals", payload);
    }

    postJSONData(url, data) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	//xhr.withCredentials = true;
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.send(data);
    }
    
    render() {
	return (
	    <div>
		<HeaderBar style={{ zIndex: 3 }}/>
		<div style={{ backgroundImage: `url(${background})`, backgroundSize: 200 }}>
		    <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
			<Graph goal={this.state.goal} activity={this.state.activity} />
			<UserInput
			    queryText="１日の目標消費カロリーを入力(kcal)："
			    handleInput={(e) => this.handleInput(e)}
			/>
		    </div>
		</div>
	    </div>
	);
    }
}

export default GoalPage;
