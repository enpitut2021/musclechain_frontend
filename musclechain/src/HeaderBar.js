import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";

class HeaderBar extends Component {
    render() {
	return (
	    <div style={{
		     background: 'grey',
		     margin: 0, padding: 5,
		     display: 'flex',
		     justifyContent: 'space-between',
		     alignItems: 'center'}}>
		<h1 style={{
			fontSize: 50,
			fontWeight: 'normal',
			margin: 0,
			padding: 10,
			paddingRight: 100}}>MuscleChain</h1>
		<div style={{
			 display: 'flex',
			 margin: 0,
			 padding: 5}}>
		    <h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Balance</h1>
		    <h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Activity</h1>
		    <h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 0 }}>Goals</h1>
		</div>
	    </div>
	);
    }
}

export default HeaderBar;
