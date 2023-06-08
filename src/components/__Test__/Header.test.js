import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header component', () => {
  it('component renders correctly', () => {
    const tree = renderer.create(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
