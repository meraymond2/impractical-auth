/* @flow */

import KeyStroke from './keystroke.js'

export default function verify(keyStrokes: KeyStroke[]): Promise<boolean> {
	
	const inputIsValid = true;

	return new Promise(function(resolve, reject) {
		if ("everything goes alright with the server call") {
		  resolve(inputIsValid);
		}
		else {
		  reject();
		}
	});

}