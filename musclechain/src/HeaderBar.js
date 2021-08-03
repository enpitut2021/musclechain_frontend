import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import { Redirect } from "react-router-dom";

class HeaderBar extends Component {
    constructor() {
	super();
	this.state = {
	    redirectTo: null
	}
    }
    render() {
	if (this.state.redirectTo)
	    return <Redirect to={this.state.redirectTo} />;
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
			<h1 style={{ color: '#330000', fontSize: 20, paddingLeft: 30, paddingRight: 30, background: "white", borderRadius: 16 }} onClick={() => this.setState({ redirectTo: '/battle' })}>Battle</h1>
			<h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 30 }} onClick={() => this.setState({ redirectTo: '/balance' })}>Balance</h1>
			<h1 style={{ color: 'white', fontSize: 20, paddingLeft: 30, paddingRight: 0 }} onClick={() => this.setState({ redirectTo: '/goal' })}>Goals</h1>
		    </div>
		</div>
	    </div>
	);
    }
}

export default HeaderBar;
