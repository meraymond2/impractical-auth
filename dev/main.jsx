import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './wrapper.jsx';
import Authentication from './authentication.jsx';

const Main = (props) => {
	return (
    <Wrapper>
    	<Authentication />
    </Wrapper>
	);
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-content')
);