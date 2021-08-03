import React, { Component } from "react";
import "./App.css";
import Graph from "./Graph";
import HeaderBar from "./HeaderBar";
import UserInput from "./UserInput";
import CompGraph from "./CompGraph";
import RoomsList from "./RoomsList";

import background from "./res/muscle.png";

const api_url = "http://beae3e33ce88.ngrok.io/";

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


const roomsSample = [
    {room_id: "部屋ID", participants: "メンバー", start_date: "開始日", end_date: "終了日"},
    {room_id: "room1", participants: [ "user1", "user2", ], start_date: "7/12", end_date: "7/30" },
    {room_id: "room2", participants: [ "user3", "user4", ], start_date: "7/13", end_date: "7/29" },
    {room_id: "room3", participants: [ "user5", "user6", ], start_date: "7/2", end_date: "8/5" },
];

class BattlePage extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    balance: 440,
	    balLog: [],
	    rooms: [],
	    uid: null,
	    compid: null,
	    myData: [],
	    compData: [],
	    userRoom: null
	};
    }

    componentDidMount() {
	this.getRooms();

	this.get_uid();
	//compid はルームの情報取れてから
	// this.get_uid();
	// this.get_activity_data());  これはget_uidのhandlerでよぶ（uid必要だから）
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
	    this.getMyGraphData();
	};
	this.getJSONData(api_url + 'firebase/uid', handler);
    }

    get_compid() {
	console.log("Getting compid data");
	    
	let handler = (data) => {
	    console.log('userinfo data attrieved!');
	    console.log(data);
	    this.setState({
		userRoom: JSON.parse(data)["room_id"]
	    });
	    this.state.rooms.forEach((room) => {
		console.log(room["room_document_id"]);
		if (this.state.userRoom==room["room_document_id"]) {
		    console.log(room);
		    let compid = (room["participants"][0] == this.state.uid) ? room["participants"][1] : room["participants"][0];
		    this.setState({compid: compid});
		    this.getCompGraphData();
		}
	    });
	};
	let myBody = JSON.stringify({
	    uid: this.state.uid
	});
	this.postJSONData(api_url + 'firebase/userinfo', myBody, handler);
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
	    this.get_compid();
	};
	this.getJSONData(api_url + 'firebase/rooms', handler);
	// this.setState({
	//     rooms: roomsSample
	// });
    }

    // 理想的じゃない関数のまとめ方になってるから直したい
    getMyGraphData() {
	console.log('Getting activity data...');
	let myHandler = (data) => {
	    console.log('Activity data attrieved!');
	    console.log(data);
	    this.setState({
		myData: JSON.parse(data)
	    });
	};
	let myBody = JSON.stringify({
	    uid: this.state.uid
	});
	this.postJSONData(api_url + 'firebase/calories', myBody, myHandler);
    }

    // 理想的じゃない関数のまとめ方になってるから直したい
    getCompGraphData() {
	console.log('Getting activity data...');
	let compHandler = (data) => {
	    console.log('comp activity data attrieved!');
	    console.log(data);
	    this.setState({
		compData: JSON.parse(data)
	    });
	};
	let compBody = JSON.stringify({
	    uid: this.state.compid
	});
	this.postJSONData(api_url + 'firebase/calories', compBody, compHandler);
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

    postJSONData(url, data, handler = () => {}) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4) {
		handler(xhr.response);
	    }
	}
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
			<CompGraph myData={this.state.myData} compData={this.state.compData}/>
			<RoomsList rooms={this.state.rooms} handleRoomEntrance={(roomId) => this.handleRoomEntrance(roomId)}/>
		    </div>
		</div>
	    </div>
	);
    }
}

export default BattlePage;
