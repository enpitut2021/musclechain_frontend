import React, { Component } from "react";
import "./App.css";
import CompGraph from "./CompGraph";
import HeaderBar from "./HeaderBar";
import background from "./res/muscle.png";

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

class BattlePage extends Component {
    render() {
	return (
	    <div>
		<HeaderBar style={{ zIndex: 3 }}/>
		<div style={{ backgroundImage: `url(${background})`, backgroundSize: 200 }}>
		    <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
			<CompGraph myData={myData} compData={compData}/>
		    </div>
		</div>
	    </div>
	);
    }
}

export default BattlePage;
