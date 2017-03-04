import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './wrapper.jsx';
import InputCapture from './inputCapture.jsx';

const Main = (props) => {
	return (
    <div>
      <Wrapper>
      	<InputCapture />
      </Wrapper>
    </div>
	);
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-content')
);