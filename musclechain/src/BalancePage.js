import React, { Component } from "react";
import "./App.css";
import HeaderBar from "./HeaderBar";
import background from "./res/muscle.png";
import Balance from "./Balance";
import BalanceLog from "./BalanceLog";



const balanceLogSample = [
    { date: "7/26", diff: 10 },
    { date: "7/27", diff: 10 },
    { date: "7/28", diff: 10 },
    { date: "7/29", diff: 23 },
    { date: "7/30", diff: -3 },
];

class BalancePage extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    balance: 440,
	    balLog: [],
	    uid: null
	};
    }

    componentDidMount() {
	this.getBalance();
	this.getBalanceLog();
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
    
    render() {
	return (
	    <div>
		<HeaderBar style={{ zIndex: 3 }}/>
		<div style={{ backgroundImage: `url(${background})`, backgroundSize: 200 }}>
		    <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
			<Balance balance={this.state.balance}/>
			<BalanceLog balLog={this.state.balLog} />
		    </div>
		</div>
	    </div>
	);
    }
}

export default BalancePage;
