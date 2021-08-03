import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import BattlePage from "./BattlePage";

class App extends Component {
    render() {
	return (
	    <BrowserRouter>
		<Switch>
		    <Route exact path="/" component={LoginPage}/>
		    <Route exact path="/main" component={MainPage}/>
		    <Route exact path="/battle" component={BattlePage} />
		</Switch>
	    </BrowserRouter>
	);
    }
}

export default App;
