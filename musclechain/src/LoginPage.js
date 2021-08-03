import React, { Component } from "react";
import "./App.css";
import { Link, BrowserRouter } from "react-router-dom";

class LoginPage extends Component {
    render() {
	return (
	    <div>
		<h1>Login</h1>
		<h3>メールアドレス:</h3>
		<input type="text" id="email" />
		<h3>パスワード:</h3>
		<input type="text" id="password" />
		<button>ログイン</button>
		{/*<Link to="/main">Link to Mainpage</Link>*/}
	    </div>
	);
    }
}

export default LoginPage;
