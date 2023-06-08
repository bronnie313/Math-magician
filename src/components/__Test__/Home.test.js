import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('home component', () => {
  it('renders home component', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
