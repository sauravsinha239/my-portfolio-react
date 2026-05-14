import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByText(/Crafting Digital/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome To My Universe/i)).toBeInTheDocument();
});
