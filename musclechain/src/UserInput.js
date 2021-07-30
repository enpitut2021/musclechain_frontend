import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100, // バックエンドAPIができたら100ではなく保存されてるユーザーの目標を使う
    };
  }
  updateValue() {
    const inputComp = document.querySelector('input[type="number"]');
    // TODO: バックエンドAPIができたら更新した目標の値を保存
    // TODO: グラフに目標値を表示
    console.log("updated user goal to " + inputComp.value);
    this.setState({
      value: inputComp.value,
    });
    this.props.handleInput(inputComp.value);
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <label>
          {this.props.queryText}
          <input type="number" placeholder={this.state.value} name="name" />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={() => this.updateValue()}
        />
      </div>
    );
  }
}

export default UserInput;
