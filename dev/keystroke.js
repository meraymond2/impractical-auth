/* @flow */

export default class KeyStroke {

	keyCode: number
	duration: number

	constructor(keyCode: number, start: number, end: number) {
		this.keyCode = keyCode;
		this.duration = end - start;
	}

}