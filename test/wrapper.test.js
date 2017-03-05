import React from 'react';
import Wrapper from '../dev/wrapper.jsx';
import renderer from 'react-test-renderer';

test('Wrapper renders the correct HTML', () => {
  const component = renderer.create(
    <Wrapper>
    	<span>Testing</span>
  	</Wrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});