import { logRoles, render, screen, fireEvent } from '@testing-library/react';
import { replaceCamelWithSpaces } from './App';
import App from './App';

it('It changes the state depending on the event', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const colorButton = screen.getByRole('button', { name: 'Change to red' });

  fireEvent.click(checkbox);
  expect(colorButton).not.toBeEnabled();
  expect(colorButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle('background-color: red');
});

describe('spaces before camel-case capital letters', () => {
  it('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  it('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  it('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
