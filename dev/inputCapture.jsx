/* @flow */

import React from 'react';

export default React.createClass({
	_doSomething(n: number): number {
		return n * 2
	},
	render(){
		return (
				<p onClick={() => this._doSomething(5)}
				>
				I'm going to be the input capture thingy...
				</p>
		);
	}
});