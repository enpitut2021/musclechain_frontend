import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";

class UserInput extends Component {
    render() {
	return (
	    <div style={{ display: 'flex' }}>
		<label>
		    {this.props.queryText}
		    <input type="number" name="name" />
		</label>
		<input type="submit" value="Submit" />
	    </div>
	);
    }
}

export default UserInput;
