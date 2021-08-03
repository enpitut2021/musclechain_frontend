import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage";
import BattlePage from "./BattlePage";
import GoalPage from "./GoalPage";
import BalancePage from "./BalancePage";

class App extends Component {
    render() {
	return (
	    <BrowserRouter>
		<Switch>
		    <Route exact path="/" component={LoginPage}/>
		    <Route exact path="/battle" component={BattlePage} />
		    <Route exact path="/goal" component={GoalPage} />
		    <Route exact path="/balance" component={BalancePage} />
		</Switch>
	    </BrowserRouter>
	);
    }
}

export default App;
