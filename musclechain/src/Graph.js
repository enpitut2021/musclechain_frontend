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
    //初期化したい時はここで呼べば良さそう
    this.process_json(json_obj);
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
      var label = { x: date, y: calories };
      graph_datas.push(label);
    }
    this.graph_data = graph_datas;
  }

  render() {
    return (
      <XYPlot height={300} width={500} xType="ordinal">
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
        <LineSeries data={this.graph_data} />
      </XYPlot>
    );
  }
}

export default Graph;
