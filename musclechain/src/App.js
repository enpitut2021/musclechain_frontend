import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

class App extends Component {
    render() {
	return (
	    <BrowserRouter>
		<Switch>
		    <Route exact path="/" component={LoginPage}/>
		    <Route exact path="/main" component={MainPage}/>
		</Switch>
	    </BrowserRouter>
	);
    }
}

export default App;
