import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

import Data from "./data.json";

const json_obj = Data.activity;
const user = Data.user_id;

class Graph extends Component {
  constructor(props) {
    super(props);
    // xとyはキー
    // 値は整数
    this.state = {
      graph_data: [],
      user: "",
    };
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

  handle_activity(activity) {
    console.log(activity.activity);
    return this.process_json(activity.activity);
  }

  handle_goal(goal, data) {
    console.log(goal);
    var goal_data = [];
    for (var item in data) {
      // console.log(data[item]["x"]);
      var x_data = data[item]["x"];
      var y_data = goal;
      var label = { x: x_data, y: y_data };
      goal_data.push(label);
    }
    return goal_data;
  }

  render() {
    // データの処理を追加する
    const data = this.handle_activity(this.props.activity);
    const goal = this.handle_goal(this.props.goal, data);
    return (
      <XYPlot height={300} width={1000} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="date" position="end" />
        <YAxis
          title="calories"
          position="end"
          style={{
            transform: "rotate(90)",
          }}
        />
        <LineSeries data={data} />
        <LineSeries data={goal} />
      </XYPlot>
      // <div>{this.props.goal}</div>
    );
  }
}

export default Graph;
