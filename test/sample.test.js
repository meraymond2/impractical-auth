import React from 'react';
import InputCapture from '../dev/inputCapture.jsx';
import renderer from 'react-test-renderer';

test('Do the thing.', () => {
  const component = renderer.create(
    <InputCapture />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  console.log("");
  console.log(tree);
  console.log("");
  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});