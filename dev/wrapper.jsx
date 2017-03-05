import React from 'react';

export default (props) => {
	return (
		<div className="row">
			<div className="col-md-4 col-sm-1" />
			<div className="col-md-4 col-sm-10">{props.children}</div>
			<div className="col-md-4 col-sm-1" />
		</div>
	);
}