import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import HeaderBar from "./HeaderBar";
import UserInput from "./UserInput";
import Balance from "./Balance";
import BalanceLog from "./BalanceLog";
import CompGraph from "./CompGraph";
import RoomsList from "./RoomsList";
import firebase from "firebase/app";

const api_url = "http://8d085e270736.ngrok.io/";



const balanceLogSample = [
    { date: "7/26", diff: 10 },
    { date: "7/27", diff: 10 },
    { date: "7/28", diff: 10 },
    { date: "7/29", diff: 23 },
    { date: "7/30", diff: -3 },
];

const roomsSample = [
    {room_id: "部屋ID", participants: "メンバー", start_date: "開始日", end_date: "終了日"},
    {room_id: "room1", participants: [ "user1", "user2", ], start_date: "7/12", end_date: "7/30" },
    {room_id: "room2", participants: [ "user3", "user4", ], start_date: "7/13", end_date: "7/29" },
    {room_id: "room3", participants: [ "user5", "user6", ], start_date: "7/2", end_date: "8/5" },
];

const myData = [
    {x: '7/10', y: 10},
    {x: '7/11', y: 32},
    {x: '7/12', y: 11},
]

const compData = [
    {x: '7/10', y: 33},
    {x: '7/11', y: 22},
    {x: '7/12', y: 37},
]

class MainPage extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    goal: 0,
	    activity: [],
	    balance: 440,
	    balLog: [],
	    rooms: []
	};
    }

    componentDidMount() {
	this.getRooms();
	this.get_activity_data();
	this.getGoalData();
	this.getBalance();
	this.getBalanceLog();
    }

    getRooms() {
	console.log("Getting rooms data")
	let handler = (data, e) => {
	    console.log(e);
	    console.log('Rooms data attrieved!');
	    console.log(data);
	    this.setState({
		rooms: data
	    });
	};
	// this.getJSONData(api_url + 'rooms', handler);
	this.setState({
	    rooms: roomsSample
	});
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
	    console.log("Goal data attrieved!");
	    console.log(data);
	    this.setState({
		goal: data["goal"],
	    });
	};
	this.getJSONData(api_url + "goals", handler);
    }

    getBalance() {
	console.log("Getting balance data...");
	let handler = (data, e) => {
	    console.log(e);
	    console.log("Balance data attrieved!");
	    console.log(data);
	    this.setState({
		balance: data["balance"],
	    });
	};
	// this.getJSONData(api_url + 'calories', handler);
    }

    getBalanceLog() {
	console.log("Getting balance log data...");
	let handler = (data, e) => {
	    console.log(e);
	    console.log("Balance log data attrieved!");
	    console.log(data);
	    this.setState({
		balance: data["balanceLog"],
	    });
	};
	// this.getJSONData(api_url + 'calories', handler);
	this.setState({
	    balLog: balanceLogSample,
	});
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
    hanleRoomEntrance(roomId) {
	let data = JSON.stringify({
	    "myroom": roomId,
	});
	this.postJSONData(api_url + 'myroom', data);
    }
    
    render() {
	return (
	    <div>
		<HeaderBar />
		<Graph goal={this.state.goal} activity={this.state.activity} />
		<UserInput
		    queryText="１日の目標消費カロリーを入力(kcal)："
		    handleInput={(e) => this.handleInput(e)}
		/>
		<Balance balance={this.state.balance}/>
		<BalanceLog balLog={this.state.balLog} />
		<CompGraph myData={myData} compData={compData}/>
		<RoomsList rooms={this.state.rooms} handleRoomEntrance={(roomId) => this.handleRoomEntrance(roomId)}/>
	    </div>
	);
    }
}

export default MainPage;