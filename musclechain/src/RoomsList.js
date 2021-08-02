import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import firebase from "firebase/app";
import "firebase/firestore";

class RoomsList extends Component {
    constructor(props) {
	super(props);
    }
    
    enterRoom(id) {
	
    }
    
    render() {
	let listItems = this.props.rooms.map((item) => {
	    return (
		<tr>
		    <th style={{ padding: 15 }}>{item.room_id}</th>
		    <th style={{ padding: 15 }}>{item.participants}</th>
		    <th style={{ padding: 15 }}>{item.start_date}</th>
		    <th style={{ padding: 15 }}>{item.end_date}</th>
		    <th style={{ padding: 15 }}><button
			type="button"
			onClick={() => this.props.handleRoomEntrance(item.room_id)}>部屋に入る</button></th>
		</tr>);
	});
	
	return (
	    <div>
		<table style={{ width: "50%", border: "1px solid",  padding: 15}}>
		    {listItems}
		</table>
	    </div>
	);
    }
}

export default RoomsList;
