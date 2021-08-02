import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas
} from 'react-vis';

class BalanceLog extends Component {
    render () {

    console.log("Rerendering balLog");
	
	/*let diffPlus = this.props.balLog.flatMap(
	    (item, i) =>  (item.diff > 0) ? ({x: i, y: item.diff}) : []
	);
	let diffMinus = this.props.balLog.flatMap(
	    (item, i) =>  (item.diff < 0) ? ({x: i, y: -1 * item.diff}) : []
	    );*/
	let barsData = [];
	let current = 400; // 仮データ
	this.props.balLog.forEach((item, i) => {
	    let barColor = (item.diff > 0) ? "green" : "red";
	    barsData.push({ x: i, y: item.diff + current, color: barColor, y0: current });
	    current += item.diff;
	});
	return (
	    <div>
		<XYPlot width={300} height={300}>
		    <VerticalGridLines />
		    <HorizontalGridLines />
		    <XAxis />
		    <YAxis />
		    <VerticalBarSeries data={barsData} />
		</XYPlot>
	    </div>
	);
    }
}

export default BalanceLog;
