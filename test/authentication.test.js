import React from 'react';
import Authentication from '../dev/authentication.jsx';
import renderer from 'react-test-renderer';

test('Authentication should render the correct HTML.', () => {
  const component = renderer.create(
    <Authentication />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
