import React, { Component } from "react";
import "./App.css";
import { Link, BrowserRouter, Redirect } from "react-router-dom";

const api_url = "http://0361b610922f.ngrok.io/";

class LoginPage extends Component {
    constructor() {
	super();
	this.state = {
	    loggedIn: false,
	    loginMode: true, // false で登録になる
	}
    }
    changeMode() {
	this.setState({
	    loginMode: !this.state.loginMode
	});
    }
    login() {
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;
	let payload = JSON.stringify({
	    "email": email,
	    "password": password
	});
	if (this.state.loginMode)
	    this.postJSONData(api_url + 'firebase/login', payload);
	else
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
	    return (<Redirect to="/battle" />);
	return (
	    <div>
		<h1>{(this.state.loginMode) ? 'ログイン' : '登録'}</h1>
		<h3>メールアドレス:</h3>
		<input type="text" id="email" />
		<h3>パスワード:</h3>
		<input type="text" id="password" />
		<h3></h3>
		<button onClick={() => this.login()}>
		    {(this.state.loginMode) ? 'ログイン' : '登録'}
		</button>
		<h3></h3>
		{/*<Link to="/main">Link to Mainpage</Link>*/}
		<button onClick={() => this.changeMode()}>登録・ログイン切り替え</button>
	    </div>
	);
    }
}

export default LoginPage;
