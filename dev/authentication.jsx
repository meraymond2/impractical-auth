/* @flow */

import React from 'react';
import InputCapture from './inputCapture.jsx';

type Props = {};

export default class Authentication extends React.Component {

	state: {
		authenticating: boolean,
		authenticated: boolean
	};

	constructor(props: Props) {
	  super(props);
	  this.state = {
	  	authenticating: false,
	  	authenticated: false
	  };
	}

	startAuthenticating(): void {
		// to do: change to ref (if I can get refs to work with Flow)
		this.setState({ authenticating: true }, () => document.getElementById("input-capture").focus());
	}

	stopAuthenticating(successful: boolean): void {
		this.setState({
			authenticating: false,
			authenticated: successful
		});
	}

	render(){
		return (
			<div id="auth-box">
				<div id="input-box">
					{ this.state.authenticating ? <InputCapture stopAuthenticating={this.stopAuthenticating.bind(this)} /> : null}
				</div>
				<div>
					<button className="btn" onClick={this.startAuthenticating.bind(this)}>Authenticate</button>
					<button className="btn" onClick={() => this.stopAuthenticating.bind(this)(false)}>Cancel</button>
					{ this.state.authenticated ? <p id="success-text">Success!</p> : null }
				</div>
			</div>
		);
	}

};