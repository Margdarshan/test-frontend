import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cart from './Cart';

describe('Cart', () => {
  it('renders the cart component', () => {
    render(<Cart />);
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    expect(screen.getByText('3 Items In Cart')).toBeInTheDocument();
  });

  it('displays all cart items', () => {
    render(<Cart />);
    expect(screen.getByText('Steady Progress')).toBeInTheDocument();
    expect(screen.getByText('Tri-Mastery')).toBeInTheDocument();
    expect(screen.getByText('Customized Plan')).toBeInTheDocument();
  });

  it('shows the cart summary', () => {
    render(<Cart />);
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('Tax')).toBeInTheDocument();
    expect(screen.getByText('Discount')).toBeInTheDocument();
  });

  it('has a promo code input', () => {
    render(<Cart />);
    expect(screen.getByLabelText('Promo Code')).toBeInTheDocument();
  });

  it('has action buttons', () => {
    render(<Cart />);
    expect(screen.getByText('Confirm Payment')).toBeInTheDocument();
    expect(screen.getByText('Explore More')).toBeInTheDocument();
  });
});
