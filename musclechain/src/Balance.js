import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";

class Balance extends Component {
    render () {
	return (
	    <h1>貯金残高：{this.props.balance} 筋</h1>
	);
    }
}

export default Balance;
