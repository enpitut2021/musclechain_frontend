import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";

class HeaderBar extends Component {
    render() {
	return (
	    <div>
		<h1 style={{
			fontSize: 64,
			fontWeight: 'normal',
			margin: 0,
			padding: 10,
			paddingRight: 20,
			paddingBottom: 20,
			position: 'absolute',
			left: 0,
			top: 0,
			background: '#FF3333',
			color: 'white',
			borderBottomRightRadius: 32}}><b>Muscle</b><small>CHAIN</small></h1>
		<div style={{
			 background: '#330000',
			 margin: 0, padding: 5,
			 display: 'flex',
			 justifyContent: 'space-between',
			 alignItems: 'center',
			 height: 50}}>
		    <h1 style={{
			    visibility: 'hidden',
			fontSize: 64,
			fontWeight: 'normal',
			margin: 0,
			padding: 10,
			paddingRight: 20,
			paddingBottom: 20,
			background: '#FF3333',
			color: 'white',
			borderBottomRightRadius: 32}}><b>Muscle</b>Chain</h1>
		    
		    <div style={{
			     display: 'flex',
			     margin: 0,
			     padding: 5,
			     paddingRight: 40}}>
			<h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Balance</h1>
			<h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Activity</h1>
			<h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 0 }}>Goals</h1>
		    </div>
		</div>
	    </div>
	);
    }
}

export default HeaderBar;
