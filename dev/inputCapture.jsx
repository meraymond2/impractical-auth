/* @flow */

import React from 'react';
import KeyStroke from './keystroke.js'
import verify from './verificationService.js'

type Props = {};
type Event = {
	keyCode: number,
	timeStamp: number
};

export default class EventAuth extends React.Component {

	state: {
		listening: boolean,
		currentKeyDown: ?Event,
		keyStrokes: KeyStroke[]
	}	

	constructor(props: Props) {
	  super(props);
	  this.state = {
	  	listening: true,
	  	currentKeyDown: undefined,
	  	keyStrokes: []
	  };
	}

	keyDown(event: Event): void {
		if (this.state.listening) {
			this.setState({
				listening: false,
				currentKeyDown: {keyCode: event.keyCode, timeStamp: event.timeStamp}
			});
		}
	}

	keyUp(event: Event): void {
		const keyDown = this.state.currentKeyDown;
		if (keyDown && keyDown.keyCode == event.keyCode) {
			const newKeyStroke = new KeyStroke(keyDown.keyCode, keyDown.timeStamp, event.timeStamp);
			const newKeyStrokes = this.state.keyStrokes.concat(newKeyStroke);

			verify(newKeyStrokes)
				.then( answer => answer ? alert("good!") : null )
				.catch( () => alert("ERROR!!!" ))

			this.setState({
				listening: true,
				currentKeyDown: undefined,
				keyStrokes: newKeyStrokes
			});
		}
	}

	render(){
		return (
			<div style={{
			height: 100,
			width: 100,
			backgroundColor: "teal"
		}}
			tabIndex="0"
			onKeyDown={this.keyDown.bind(this)}
			onKeyUp={this.keyUp.bind(this)}
		>			
			</div>
		);
	}

};