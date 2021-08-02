import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,
  ChartLabel,
  XAxis,
  YAxis,
} from "react-vis";

// あとでcssにまとめる
const myColor = "#cd3b54";
const compColor = "#59b953";
///////////////////

class CompGraph extends Component {
    constructor(props) {
	super(props);
	// 実際のデータは以下で処理
	/* this.state = {
	    myData: this.process_json(props.myData),
	    compData: this.process_json(props.compData)
	    };*/
	this.state = {
	    myData: props.myData,
	    compData: props.compData
	}
    }

    change_date_format(date_string) {
	var date_obj = new Date(date_string);
	// console.log(date_obj);
	var month = date_obj.getMonth() + 1;
	var day = date_obj.getDate();
	var formatted_date = month + "/" + day;
	// console.log(formatted_date);
	return formatted_date;
    }

    process_json(json_datas) {
	var item = 0;
	var graph_datas = [];
	for (item in json_datas) {
	    //日付はパースできる
	    var date = json_datas[item]["date"];
	    var calories = json_datas[item]["calories"];
	    date = this.change_date_format(date);
	    var label = {
		x: date,
		y: calories,
	    };
	    graph_datas.push(label);
	}
	console.log("process data");
	console.log(graph_datas);
	// this.setState({
	//   graph_data: graph_datas,
	// });
	return graph_datas;
    }
    
    render() {
	return (
	    <div>
		<h1>筋肉部屋内の比較</h1>
		<DiscreteColorLegend
		    items={[
			{ title: "あなた" , color: myColor},
			{ title: "相手", color: compColor },
		    ]}
		    orientation="horizontal"
		/>
		<XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
		    <VerticalGridLines />
		    <HorizontalGridLines />
		    <XAxis />
		    <YAxis />
		    <VerticalBarSeries data={this.state.myData} color={myColor}/>
		    <VerticalBarSeries data={this.state.compData}  color={compColor}/>
		</XYPlot>
	    </div>
	);
    }
}

export default CompGraph;
