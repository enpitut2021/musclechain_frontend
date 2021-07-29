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
    this.data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
    ];
    this.user = "";
  }

  process_json(json_datas) {
    for (var item in json_datas) {
      //日付はパースできる
      var date = json_datas[item]["date"];
      var calories = json_datas[item]["calories"];
      // this.data[item]["x"] = date;
      // this.data[item]["y"] = calories;
    }
    console.log(typeof this.data[0]["x"]);
  }

  render() {
    console.log(user);
    console.log(this.process_json(json_obj));
    return (
      <div className="App">
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={this.data} />
        </XYPlot>
      </div>
    );
  }
}

export default Graph;
