/* @flow */

import React from 'react';
import KeyStroke from './keystroke.js'
import verify from './verificationService.js'

type Props = {
	stopAuthenticating: (boolean) => void
};
type Event = {
	keyCode: number,
	timeStamp: number
};

export default class InputCapture extends React.Component {

	state: {
		listening: boolean,
		currentKeyDown: ?Event,
		keyStrokes: KeyStroke[],
		glow: boolean
	}	

	constructor(props: Props) {
	  super(props);
	  this.state = {
	  	listening: true,
	  	currentKeyDown: undefined,
	  	keyStrokes: [],
	  	glow: false
	  };
	}

	keyDown(event: Event): void {
		if (this.state.listening) {
			this.setState({
				listening: false,
				currentKeyDown: {keyCode: event.keyCode, timeStamp: event.timeStamp},
				glow: true
			});
		}
	}

	keyUp(event: Event): void {
		const keyDown = this.state.currentKeyDown;
		if (keyDown && keyDown.keyCode == event.keyCode) {
			const newKeyStroke = new KeyStroke(keyDown.keyCode, keyDown.timeStamp, event.timeStamp);
			const newKeyStrokes = this.state.keyStrokes.concat(newKeyStroke);

			verify(newKeyStrokes)
				.then( verified => {
					if (verified) {
						this.props.stopAuthenticating(true);
					}
					else {
						this.setState({
							listening: true,
							currentKeyDown: undefined,
							keyStrokes: newKeyStrokes,
							glow: false
						});
					}
				});
		
		}
	}

	render(){
		return (
			<div id="input-capture" 
				className={ this.state.glow ? "glow" : "" }
				tabIndex="0"
				onKeyDown={this.keyDown.bind(this)}
				onKeyUp={this.keyUp.bind(this)}
			/>			
		);
	}

};