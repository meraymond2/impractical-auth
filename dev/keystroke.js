/* @flow */

export default class KeyStroke {

	keyCode: number
	start: number
	end: number
	duration: number

	constructor(keyCode: number, start: number, end: number) {
		this.keyCode = keyCode;
		this.start = start;
		this.end = end;
		this.duration = end - start;
	}

}