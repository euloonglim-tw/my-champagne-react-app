import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders click here to learn more link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Click here to learn more/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders subscribe button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Subscribe/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders email input', () => {
  const { getByText } = render(<App />);
  const inputElement = getByText(/Sign up for updates!/i);
  expect(inputElement).toBeInTheDocument();
});
