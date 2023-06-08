import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('renders the header text', () => {
    render(<Header />);
    const headerText = screen.getByText('Math Magicians');
    expect(headerText).toBeInTheDocument();
  });

  it('renders the navigation items', () => {
    render(<Header />);
    const navItems = screen.getAllByRole('listitem');
    expect(navItems.length).toBe(3);
  });
});
