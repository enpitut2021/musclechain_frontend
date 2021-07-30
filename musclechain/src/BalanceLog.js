import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";

class BalanceLog extends Component {
    render () {
	const listItems = this.props.balLog.map((item) => {
	    console.log(item.date);
	    if (item.diff > 0) return (
		<div>
		    <h1 style={{ margin: 20 }}>{item.date}</h1>
		    <h1 style={{ color: 'green', margin: 20 }}>+{item.diff}筋</h1>
		</div>
	    );
	    else return (
		<div>
		    <h1 style={{ margin: 20 }}>{item.date}</h1>
		    <h1 style={{ color: 'red', margin: 20 }}>{item.diff}筋</h1>
		</div>
	    );
	});
	return (
	    <div style={{ background: 'grey'}}>
		<h1>貯金記録:</h1>
		<ul style={{ display: 'flex' }}>{listItems}</ul>
		</div>
	);
    }
}

export default BalanceLog;
