import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import HeaderBar from "./HeaderBar";
import UserInput from "./UserInput";
import Balance from "./Balance";
import BalanceLog from "./BalanceLog";
import CompGraph from "./CompGraph";
import RoomsList from "./RoomsList";

import background from "./res/muscle.png";

const api_url = "http://618cd76b2ff4.ngrok.io/";



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

class MainPage extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    balance: 440,
	    balLog: [],
	    rooms: [],
	    uid: null
	};
    }

    componentDidMount() {
	this.getRooms();
	this.getBalance();
	this.getBalanceLog();

	// this.get_uid();
	// this.get_activity_data());  これはget_uidのhandlerでよぶ（uid必要だから）
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
	let body = {
	    uid: this.state.uid
	};
	this.getJSONData(api_url + 'calories', handler, body);
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
		<HeaderBar style={{ zIndex: 3 }}/>
		<div style={{ backgroundImage: `url(${background})`, backgroundSize: 200 }}>
		    <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
			<Balance balance={this.state.balance}/>
			<BalanceLog balLog={this.state.balLog} />
			<RoomsList rooms={this.state.rooms} handleRoomEntrance={(roomId) => this.handleRoomEntrance(roomId)}/>
		    </div>
		</div>
	    </div>
	);
    }
}

export default MainPage;
