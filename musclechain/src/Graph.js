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
  constructor() {
    super();
    // xとyはキー
    // 値は整数
    this.graph_data = [];
    this.user = "";
  }

  process_json(json_datas) {
    var item = 0;
    var graph_datas = [];
    for (item in json_datas) {
      //日付はパースできる
      var date = json_datas[item]["date"];
      var calories = json_datas[item]["calories"];
      var label = { x: date, y: calories };
      console.log(label);
      graph_datas.push(label);
      console.log(graph_datas);
    }
    this.graph_data = graph_datas;
  }

  render() {
    console.log(this.process_json(json_obj));
    console.log(this.graph_data);
    return (
      <XYPlot height={300} width={300} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={this.graph_data} />
      </XYPlot>
    );
  }
}

export default Graph;
