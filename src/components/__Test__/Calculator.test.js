import React from 'react';
import renderer from 'react-test-renderer';
import Cal from '../Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Cal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
