import { logRoles, render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('It changes the state depending on the event', () => {
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
