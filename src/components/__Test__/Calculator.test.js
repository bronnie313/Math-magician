import React from 'react';
import { render, screen } from '@testing-library/react';
import Cal from '../Calculator';

describe('Cal component', () => {
  it('renders the calculator buttons', () => {
    render(<Cal />);
    const calculatorButtons = screen.getAllByRole('button');
    expect(calculatorButtons.length).toBeGreaterThan(0);
  });
});
