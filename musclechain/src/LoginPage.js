import React, { Component } from "react";
import "./App.css";
import { Link, BrowserRouter, Redirect } from "react-router-dom";

const api_url = "https://76caba17d405.ngrok.io/";

class LoginPage extends Component {
    constructor() {
	super();
	this.state = {
	    loggedIn: false
	}
    }
    login() {
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;
	let payload = JSON.stringify({
	    "email": email,
	    "password": password
	});
	this.postJSONData(api_url + 'firebase/register', payload);
	this.setState({
	    loggedIn: true
	});
    }
    postJSONData(url, data) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	//xhr.withCredentials = true;
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.send(data);
    }
    render() {
	if (this.state.loggedIn)
	    return (<Redirect to="/main" />);
	return (
	    <div>
		<h1>Login</h1>
		<h3>メールアドレス:</h3>
		<input type="text" id="email" />
		<h3>パスワード:</h3>
		<input type="text" id="password" />
		<button onClick={() => this.login()}>ログイン</button>
		{/*<Link to="/main">Link to Mainpage</Link>*/}
	    </div>
	);
    }
}

export default LoginPage;
