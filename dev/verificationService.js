/* @flow */

import KeyStroke from './keystroke.js'

export default function verify(kS: KeyStroke[]): Promise<boolean> {

	// If the length is correct,
	const inputIsValid: boolean = (kS.length == 4) ? (
		(
			// and the first is 'a' and short,
			(kS[0].keyCode == 65) && (isShort(kS[0].duration)) &&
			// and the second is 'b' and short, and just after the first,
			(kS[1].keyCode == 66) && (isShort(kS[1].duration)) && (kS[1].start - kS[0].end < 200) &&
			// and the third is 'c', and long, and just after the second,
			(kS[2].keyCode == 67) && (isLong(kS[2].duration)) && (kS[2].start - kS[1].end < 200) &&
			// and the fourth is 'd', and short, and at over a second after the third.
			(kS[3].keyCode == 68) && (isShort(kS[3].duration)) && (kS[3].start - kS[2].end > 1000)
			// then it's valid!
		) ? true : false	
	) : false;

	// returns promise because it's mocking a server call
	return new Promise(function(resolve, reject) {
		if ("everything goes alright with the server call") {
		  resolve(inputIsValid);
		}
		else {
		  reject();
		}
	});

}

function isShort(duration: number): boolean {
	return duration < 150;
}

function isLong(duration: number): boolean {
	return duration > 1000;
}

/*

	The correct input code is:
	1. short a
	2. short b
	3. long c
	---wait---
	4. short d

*/